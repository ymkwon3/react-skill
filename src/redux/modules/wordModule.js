import { db } from "../../firebase";
import { doc, getDocs, updateDoc, deleteField, collection, setDoc, deleteDoc } from "firebase/firestore";

const words_doc = doc(db, 'words', 'words');
const words_collection = collection(db, "words");

// Actions
const LOAD = "wordModules/LOAD";
const DELETE = "wordModules/DELETE";

const initialState = {
  words: [],
  progress: 0
};

// Action Creators
export function loadWord(word_list) {
  return { type: LOAD, word_list };
}

export function deleteWord(term) {
  return { type: DELETE, term };
}


// middlewares
export const loadWordFB = () => {
  return async function (dispatch) {
    const data = await getDocs(words_collection);
    let list = [];
    data.forEach((v) => {
      list.push({...v.data()});
    });
    dispatch(loadWord(list));
  };
};

export const addWordFB = (obj) => {
  return async function () {
    await setDoc(doc(db, "words", obj.term), obj);
  };
};

export const deleteWordFB = (term) => {
  return async function (dispatch) {
    const docRef = doc(db, "words", term);
    await deleteDoc(docRef);
    alert("삭제했다람쥐...")
    dispatch(deleteWord(term));
  };
};

export const checkWordFB = (obj) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "words", obj.term);
    await updateDoc(docRef, obj);
    const word_list = getState().wordModule.words.map(v => v.term === obj.term ? obj : v);
    console.log(word_list)
    dispatch(loadWord(word_list));
  };
};


// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "wordModules/LOAD": {
      const word_list = action.word_list.sort();

      // 데이터베이스에 단어가 없으면 progress를 0으로, 단어가 존재하면 계산
      const progress = word_list.length != 0 ? word_list.reduce((acc, cur) => {
        return cur.checked ? acc + 1 : acc + 0;
      }, 0) / word_list.length : 0;
      return { ...state, progress, words: word_list};
    }
    case "wordModules/DELETE": {
      const words = state.words.filter(v => v.term != action.term);
      return {...state, words: words}
    }
    default:
      return state;
  }
}
