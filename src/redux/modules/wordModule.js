import { db } from "../../firebase";
import { doc, getDoc, updateDoc, arrayUnion, setDoc } from "firebase/firestore";

// Actions
const LOAD = "wordModules/LOAD";
const ADD = "wordModules/ADD";
const CHECK = "wordModules/CHECK";

const initialState = {
  is_loaded: false,
  words: {},
  progress: 0
};

// Action Creators

export function loadWord(word_list) {
  return { type: LOAD, word_list };
}

// middlewares
export const loadWordFB = () => {
  return async function (dispatch) {
    const data = await getDoc(doc(db, "words", "words"));
    dispatch(loadWord(data.data()));
  };
};

export const addWordFB = (term, mean, link, check) => {
  return async function () {
    await updateDoc(doc(db, "words", "words"), {
      [term]: [term, mean, link, check]
    });
    // updateDoc(doc(db, "words", "words"), {
    //   words: arrayUnion({
    //     term: term,
    //     mean: mean,
    //     link: link,
    //   }),
    // });
  };
};

export const checkWordFB = (term, mean, link, check) => {
  return async function (dispatch) {
    await updateDoc(doc(db, "words", "words"), {
      [term]: [term, mean, link, check]
    });
    dispatch(loadWordFB());
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "wordModules/LOAD": {
      const word_list = Object.entries(action.word_list).sort();
      const progressCnt = word_list.reduce((acc, cur) => {
        return cur[1][3] ? acc + 1 : acc + 0;
      }, 0)
      let map = new Map(word_list);
      return { ...state, words: map, progress: progressCnt / word_list.length};
    }
    default:
      return state;
  }
}
