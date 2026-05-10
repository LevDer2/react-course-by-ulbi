// ! IMPORTS
import React, { useRef, useState } from "react";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

export default function App() {
  // ! Firsts posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Javascript",
      body: "Javascript - язык программирования",
    },
    {
      id: 2,
      title: "Javascript 2",
      body: "Javascript - язык программирования",
    },
    {
      id: 3,
      title: "Javascript 3",
      body: "Javascript - язык программирования",
    },
  ]);

  // ! State
  // const bodyInputRef = useRef();
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");

  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  // ! Function
  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "" });
  };
  // ! DOM
  return (
    <div className="App">
      <form>
        {/*! If the value goes to the state it is caling Managed Component !*/}
        <MyInput
          type="text"
          placeholder="Title of your post"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <MyInput
          type="text"
          placeholder="Body of your post"
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
        {/* If we write this code from useRef it is call Not Maneged Component */}
        {/* <MyInput
          type="text"
          placeholder="Body of your post"
          ref={bodyInputRef}
        /> */}
        <MyButton type="submit" onClick={addNewPost}>
          Create a post
        </MyButton>
      </form>
      <PostList posts={posts} title={"Lists"} />
    </div>
  );
}
