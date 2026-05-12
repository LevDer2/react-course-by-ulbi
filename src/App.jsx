// ! IMPORTS
import React, { useRef, useState } from "react";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./UI/select/MySelect";

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

  // ! Function
  const createNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // ! Get a post from childrens component
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  // ! DOM
  return (
    <div className="App">
      <PostForm create={createNewPost} />
      <hr style={{margin: "15px 0"}}/>
      <div>
        <MySelect options={[
          {value: "title", name: "Sort by titles"},
          {value: "body", name: "Sort by main texts"}
        ]} defaultOption="Sort by..."/>
      </div>
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title={"Lists"} />
      ) : (
        <h1 style={{ textAlign: "center" }}>Please create new posts!</h1>
      )}
    </div>
  );
}
