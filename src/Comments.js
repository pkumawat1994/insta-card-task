import React, { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const Comments = ({ i, ele, arr, setArr }) => {
  const [inputView, setInputView] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [objIndex, setObjIndex] = useState("");

  const viewCommentsBox = () => {
    console.log("call comments", ele);
    setInputView(true);
    setObjIndex(i);
  };
  const commentInputChangeHandle = (e) => {
    console.log("comments", e.target.value);
    setInputVal(e.target.value);
  };
  const addComments = (i) => {
    console.log("kkkkk", i);
    console.log(inputVal);
    console.log(arr);
    let objIndex = arr.findIndex((obj, id) => id === i);
    console.log(objIndex);

    arr[objIndex].comments.push(inputVal);

    setArr(arr);
    setInputVal("");
  };

  return (
    <>
      <FaRegCommentDots onClick={viewCommentsBox} className="comments" />
      {inputView ? (
        <>
          <input
            type="text"
            placeholder="Comment"
            value={inputVal}
            onChange={(e) => {
              commentInputChangeHandle(e);
            }}
            className="commentinput"
          />
          <IoMdSend
            type="button"
            onClick={() => addComments(i)}
            className="sendIcon"
          />
          <div className="commentsDiv">
            {arr[arr.findIndex((obj, id) => id === objIndex)].comments.map(
              (ele) => (
                <p className="comment_P">{ele}</p>
              )
            )}
          </div>
        </>
      ) : null}
    </>
  );
};

export default Comments;
