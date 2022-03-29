import { db } from "../../firebase";
import {
  doc,
  getDocs,
  updateDoc,
  collection,
  setDoc,
  deleteDoc,
  query,
  limit,
  startAfter,
  orderBy,
} from "firebase/firestore";

const words_collection = collection(db, "words");

// Actions
const LOAD = "wordModules/LOAD";
const DELETE = "wordModules/DELETE";

const initialState = {
  words: [],
  lastValue: null,
  progress: 0,
};

// Action Creators
export function loadWord(word_list, last) {
  return { type: LOAD, word_list, last };
}

export function deleteWord(term) {
  return { type: DELETE, term };
}

// middlewares
export const loadWordFB = last => {
  // firestore의 전체 데이터 불러오기
  return async function (dispatch) {
    const q = last
      ? query(words_collection, orderBy("term"), startAfter(last), limit(3))
      : query(words_collection, orderBy("term"), limit(3));
    const data = await getDocs(q);
    let list = [];
    data.forEach(v => {
      list.push({ ...v.data() });
    });
    dispatch(loadWord(list, last));
  };
};

export const addWordFB = obj => {
  // firestore에 요소 추가
  return async function () {
    await setDoc(doc(db, "words", obj.term), obj);
  };
};

export const deleteWordFB = term => {
  // 해당 요소를 firestore에서 삭제 및 리듀서에서 삭제
  return async function (dispatch) {
    const docRef = doc(db, "words", term);
    await deleteDoc(docRef);
    alert("삭제했다람쥐...");
    dispatch(deleteWord(term));
  };
};

export const checkWordFB = obj => {
  // 클릭된 요소를 찾아 firestore 데이터 수정 및 리듀서 데이터 수정
  return async function (dispatch, getState) {
    const docRef = doc(db, "words", obj.term);
    await updateDoc(docRef, obj);
    const word_list = getState().wordModule.words.map(v =>
      v.term === obj.term ? obj : v
    );
    dispatch(loadWord(word_list));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "wordModules/LOAD": {
      const word_list = action.last ? [...state.words, ...action.word_list] : [...action.word_list];
      // 데이터베이스에 단어가 없으면 progress를 0으로, 단어가 존재하면 누적
      const progress =
        word_list.length != 0
          ? word_list.reduce((acc, cur) => {
              return cur.checked ? acc + 1 : acc + 0;
            }, 0)
          : 0;

      return {
        ...state,
        progress,
        words: word_list,
        lastValue: word_list[word_list.length - 1].term,
      };
    }
    case "wordModules/DELETE": {
      let progress = state.progress;
      const words = state.words.filter(v => {
        (v.term === action.term && action.checked) && progress--;
        return v.term != action.term
      });
      return { ...state, words: words, progress};
    }
    default:
      return state;
  }
}
