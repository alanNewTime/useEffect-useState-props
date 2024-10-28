import "./App.css";
import Test from "./components/test";
import { useState, useEffect } from "react";

function App() {
  //uso useState per definire gli oggetti, le categrie e la disponibilità del contenuto da passare come prop
  const [content, setContent] = useState([]);
  const [isTrue, setIsTrue] = useState(true);
  const [isCategory, setIsCategory] = useState("");

  //useEffect mi fa tre chiamate api a seconda di quello che mi serve
  //viene attivcato solo se clicco su una categoria particolare
  useEffect(() => {
    if (isCategory === "users") {
      fetch(`https://jsonplaceholder.typicode.com/${isCategory}`)
        .then((response) => response.json())
        .then((json) => setContent(json));
    } else if (isCategory === "posts") {
      fetch(`https://jsonplaceholder.typicode.com/${isCategory}`)
        .then((response) => response.json())
        .then((json) => setContent(json));
    } else if (isCategory === "comments") {
      fetch(`https://jsonplaceholder.typicode.com/${isCategory}`)
        .then((response) => response.json())
        .then((json) => setContent(json));
    }
  }, [isCategory]);

  return (
    <>
      {/* options start */}
      <div className="options">
        <p>SELECT VISIBILITY</p>
        <button
          className="btn btn-success"
          onClick={() => {
            setIsTrue(false);
          }}
        >
          Make Disappear
        </button>

        <button
          className="btn btn-success"
          onClick={() => {
            setIsTrue(true);
          }}
        >
          Make Appear
        </button>
        <p>SELECT CATEGORIES</p>
        <button
          className="btn btn-success"
          onClick={() => {
            setIsCategory("users");
          }}
        >
          Users
        </button>

        <button
          className="btn btn-success"
          onClick={() => {
            setIsCategory("posts");
          }}
        >
          Posts
        </button>

        <button
          className="btn btn-success"
          onClick={() => {
            setIsCategory("comments");
          }}
        >
          Comments
        </button>
      </div>
      {/* options end */}
      {/* componente che riceve le mie props */}
      <Test object={content} category={isCategory} isAvailable={isTrue}></Test>
    </>
  );
}

export default App;
