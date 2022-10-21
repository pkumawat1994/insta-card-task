import "./App.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Comments from "./Comments";
import { IoMdShareAlt } from "react-icons/io";
import { useState } from "react";
import {
  MdThumbUpOffAlt,
  MdThumbUp,
  MdThumbDown,
  MdThumbDownOffAlt,
} from "react-icons/md";

const Features = ({ i, ele, arr, setArr }) => {
  const [likenum, setLikenum] = useState(0);
  const [dislikenum, setdisLikenum] = useState(2);
  const [unlikeView, setUnLikeView] = useState(false);
  const [likeView, setLikeView] = useState(true);
  const unlikeHandler = () => {
    setLikenum(likenum - 1);

    setLikeView(true);
  };
  const likeHandler = () => {
    setLikenum(likenum + 1);
    setLikeView(false);
  };
  const dislikeHandler = () => {
    // console.log("call unlike");
    setdisLikenum(dislikenum - 1);
    setUnLikeView(false);
  };
  const disUnlikeHandler = () => {
    setdisLikenum(dislikenum + 1);
    setUnLikeView(true);
  };
  const addFav = (targetValue, id) => {
    // console.log("callll", id);
    // console.log("callllcheckkkk", targetValue.target.checked);
    var checkValue = targetValue.target.checked;
    let objIndex = arr.findIndex((obj, i) => i === id);
    if (arr[objIndex].favarate === true) {
      arr[objIndex].favarate = checkValue;
    } else {
      arr[objIndex].favarate = checkValue;
    }
    setArr(arr);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  name="checkedH"
                  onChange={(e) => {
                    addFav(e, i);
                  }}
                />
              }
              label="favrt"
            />
          </div>
          <div className="commentIcon">
            <Comments i={i} ele={ele} arr={arr} setArr={setArr} />
          </div>{" "}
          {/* ------------like-Unlike------------- */}
          <div className="LikeDiv">
            {" "}
            {likeView ? (
              <MdThumbUpOffAlt
                fontSize="large"
                color="secondary"
                onClick={() => likeHandler()}
              />
            ) : (
              <MdThumbUp
                fontSize="large"
                color="secondary"
                onClick={() => unlikeHandler()}
              />
            )}{" "}
            {/* ------------disLike-Undislike--------- */}
            <p className="unlike_p">{likenum === 0 ? null : likenum}</p>
          </div>
          <div className="unlikeDiv">
            {unlikeView ? (
              <MdThumbDown
                fontSize="large"
                color="secondary"
                className="dislike_icon"
                onClick={() => dislikeHandler()}
              />
            ) : (
              <MdThumbDownOffAlt
                fontSize="large"
                color="secondary"
                className="disunlike_icon"
                onClick={() => disUnlikeHandler()}
              />
            )}
            <p className="unlike_p">{dislikenum}</p>
          </div>
          <IoMdShareAlt className="shareIcn" />
        </div>
      </div>
    </>
  );
};

export default Features;
