import "./App.css";
import { useState, useEffect } from "react";
function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  // localStorage에서 따봉 값을 가져오기. 없으면 기본값 0으로 설정.
  let [따봉, 따봉변경] = useState(() => {
    const savedCount = localStorage.getItem("따봉");
    return savedCount ? parseInt(savedCount) : 0;
  });
  let [modal, setModal] = useState(false);
  // 따봉 값이 변경될 때마다 localStorage에 저장하기.
  useEffect(() => {
    localStorage.setItem("따봉", 따봉.toString());
  }, [따봉]);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자 코트 추천";
          글제목변경(copy);
        }}
      >
        글수정버튼
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}
      >
        가나다순 정렬
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy.reverse();
          글제목변경(copy);
        }}
      >
        다나가순 정렬
      </button>

      <div className="list">
        <h4
          onClick={() => {
            setModal(true);
          }}
        >
          {글제목[0]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            ❤️
          </span>
          {따봉}
        </h4>
        <p>Date : 8/16</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>Date : 8/16</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>Date : 8/16</p>
      </div>
      {modal === true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>title</h4>
      <p>date</p>
      <p>content</p>
    </div>
  );
}
export default App;
