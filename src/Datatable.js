import React, { useState } from "react";

const Datatable = ({ arr, setArr }) => {
  const [search, setSearch] = useState("");

  const tableChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  const searchResponse = !search
    ? arr
    : arr?.filter(
        (ele) =>
          ele.name.toLowerCase().includes(search.toLowerCase()) ||
          ele.tagname.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <>
      <h1>Datatable</h1>
      <div class="modal fade" id="myTableModal" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="col-sm-4">
              <span>
                <input
                  placeholder="search"
                  type="text"
                  onChange={(e) => tableChangeHandler(e)}
                />
              </span>
            </div>
            <div class="modal-body">
              {/* -------Table------ */}
              <table class="table table-dark a">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">favrt</th>
                    {/* <th scope="col">Handle</th> */}
                  </tr>
                </thead>

                <tbody>
                  {searchResponse?.map((element, i) => {
                    return (
                      <React.Fragment>
                        <tr>
                          <th scope="row">1</th>
                          <td>{element.name}</td>
                          {/* <td>
                            {element.favarate === true ? (
                              <BsFillBookmarkHeartFill className="favIcon" />
                            ) : null}
                          </td> */}
                          <td>{element.tagname}</td>
                        </tr>
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Datatable;
