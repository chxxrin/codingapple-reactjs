import "./App.css";
import { useState } from "react";
function App() {
  let [글제목, b] = useState("남자 코트 추천");
  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>
      <div className="list">
        <h4>{글제목}</h4>
        <p>Date : 8/16</p>
      </div>
    </div>
  );
}

export default App;
