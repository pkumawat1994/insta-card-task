import React, { useState } from "react";
import ReactHashtag from "react-hashtag";
import Features from "./Features";
//------Style-----

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8,
};

const Post = ({ ele, i, arr, setArr }) => {
  const favratAdd = () => {
    console.log("inref");
  };

  //------Fetch for more data-----

  return (
    <>
      <div
        class="card intgrm"
        onDoubleClick={favratAdd}
        style={{ width: "18rem" }}
      >
        <h4 key={i}>{ele.id}</h4>
        <img class="card-img-top" src={ele.img} alt="Card" />
        <div class="card-body">
          <h1>
            <ReactHashtag>{ele.tagname}</ReactHashtag>
          </h1>
        </div>
        <div className="features">
          <Features i={i} ele={ele} arr={arr} setArr={setArr} />
        </div>
      </div>
    </>
  );
};

export default Post;
