import { db } from "../../firebase";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";

// Actions
const LOAD = "wordModules/LOAD";
const ADD = "wordModules/ADD";

const initialState = {
  is_loaded: false,
  what: "리액트",
  who: "Guest",
};

// Action Creators

export function loadWord(word_list) {
  return { type: LOAD, word_list };
}

// middlewares
export const loadWordFB = () => {
  console.log("loadWordFB excuted!");
  return async function (dispatch) {
    const data = await getDoc(doc(db, "words", "words"));
    dispatch(loadWord(data.data().words));
    console.log("loadWordFB ended", data.data().words);
  };
};

export const addWordFB = (term, mean, link) => {
  return async function (dispatch) {
    console.log("addwordFB excuted!");
    await updateDoc(doc(db, "words", "words"), {
      words: arrayUnion({
        term: term,
        mean: mean,
        link: link,
      }),
    });
    // dispatch(loadWordFB());
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "wordModules/LOAD": {
      console.log(action.word_list)
      return { ...state};
    }
    default:
      return state;
  }
}
