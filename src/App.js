import "./App.css";
import React, { useState } from "react";
import Heartmodel from "./Heartmodel";
import { Routes, Route } from "react-router-dom";
import Datatable from "./Datatable";
import InfiniteScroll from "react-infinite-scroll-component";
import { data } from "./data";
import Post from "./Post";

//-----------------SCROLL FUNCTION----------------------

let page = 1;
let start = 0;
let last = 2;

//----------------------SCROLL FUNCTION END-------------------

const refresh = (setItems) => {};

//===========
function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const modifyImage = URL.createObjectURL(img);
    console.log(modifyImage);

    let obj = {
      id: data.length + 1,
      name: name,
      tagname: tagname,
      img: modifyImage,
      like: 1,
      favarate: false,
      comments: null,
    };

    let a = [];
    a.push(...items, obj);
    setItems(a);
    console.log("first", arr);
  };
  const favratList = () => {
    const dat = arr.filter((ele) => ele.favarate === true);
    setFavrtTable(dat);
    console.log(dat);
  };

  <Route>
    <Routes path="/" element={<App />} />
  </Route>;

  const [name, setName] = useState("");
  const [tagname, setTagName] = useState("");
  const [img, setImg] = useState("");
  const [arr, setArr] = useState(data);
  const [items, setItems] = React.useState([]);
  const [favrtTable, setFavrtTable] = useState([]);
  const [initial, setInitial] = useState(0);

  //function scrolll---------------
  const fetchData = (setItems, items) => {
    // console.log(333, setItems);
    console.log(111, items);
    //====WITH API INFINITY---------start----------------------------->

    //   axios
    //     .get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
    //     .then((res) => {
    //       setItems([...items, ...res.data]);
    //       page = page + 1;
    //     });

    //=====WITH NON API INFINITY-------start---------------------------->

    setItems([...items, ...data.slice(start, last)]);
    // console.log("page", page);
    start = last;
    last += 2; //EVERY REFRESH LIMIT DATA

    console.log("starttttt", start);
    console.log("last", last);
  };

  return (
    <>
      <div className="mainDiv">
        <form onSubmit={handleSubmit}>
          <div className="formDiv">
            <input
              onChange={(e) => setName(e.target.value)}
              className="inpt"
              type="text"
              name="name"
              placeholder="Enter Name"
            />
            <br />
            <input
              className="inpt"
              onChange={(e) => setTagName(e.target.value)}
              name="tage"
              type="text"
              placeholder="Tage@yahoo"
            />
            <br />

            <input
              onChange={(e) => setImg(e.target.files[0])}
              type="file"
              name="img"
            />
            <br />
          </div>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </form>
      </div>

      <div className="favrt_div">
        <button
          onClick={() => {
            favratList();
          }}
          className="btn btn-danger bt"
          data-toggle="modal"
          data-target="#myModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chat-right-heart-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2ZM8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
          </svg>{" "}
          SEE FAVRATE
        </button>

        <button
          className="btn btn-danger bt"
          data-toggle="modal"
          data-target="#myTableModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chat-right-heart-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2ZM8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
          </svg>{" "}
          Table
        </button>
      </div>
      {/* ---------------------------- favrt table MODEL------------------------------ */}
      <Heartmodel favrtTable={favrtTable} />

      {/* ---------------------------- totel data table MODEL------------------------------ */}
      <Datatable arr={arr} setArr={setArr} />

      <div className="cardWrapper">
        {/* <div className="mycard"> */}
        <div className="container">
          <div className="row">
            <InfiniteScroll
              dataLength={items.length} //This is important field to render the next data
              next={() => {
                fetchData(setItems, items);
              }}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
              // below props only if you need pull down functionality
              refreshFunction={refresh}
              pullDownToRefresh
              pullDownToRefreshThreshold={2}
              pullDownToRefreshContent={
                <h3 style={{ textAlign: "center" }}> Pull esh</h3>
              }
              releaseToRefreshContent={
                <h3 style={{ textAlign: "center" }}>
                  &# 8593; Release to refresh
                </h3>
              }
            >
              {items?.map((ele, i) => {
                console.log(888, ele);
                return (
                  <>
                    <center>
                      <Post ele={ele} i={i} arr={arr} setArr={setArr} />
                    </center>
                  </>
                );
              })}
            </InfiniteScroll>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
