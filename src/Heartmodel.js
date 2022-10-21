import React from "react";
import { BsFillBookmarkHeartFill } from "react-icons/bs";

const Heartmodel = ({ favrtTable }) => {
  return (
    <>
      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
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
                  {favrtTable?.map((element, i) => {
                    return (
                      <React.Fragment>
                        <tr>
                          <th scope="row">1</th>
                          <td>{element.name}</td>
                          <td>
                            {element.favarate === true ? (
                              <BsFillBookmarkHeartFill className="favIcon" />
                            ) : null}
                          </td>
                          <td>@mdo</td>
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

export default Heartmodel;
