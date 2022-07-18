import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "src/Components";
import UserService from "src/Services/UserService";

const Users = () => {
  const [users, setUsers] = useState([] as Array<any>);
  const navigate = useNavigate();

  const findUsers = async () => {
    setUsers(await UserService.listUser());
  };

  useEffect(() => {
    findUsers();
  }, []);

  return (
    <div className="container-fluid">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Users</h1>
            </div>
            <div className="col-sm-6">
              <Button
                className="float-sm-right"
                onClick={() => {
                  navigate("/users/create");
                }}
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className="row">
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box">
            <span className="info-box-icon bg-danger">
              <i className="far fa-star" />
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Online</span>
              <span className="info-box-number">0</span>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <table
            id="example1"
            className="table table-bordered table-striped dataTable dtr-inline"
            aria-describedby="example1_info"
          >
            <thead>
              <tr>
                <th
                  className="sorting sorting_asc"
                  tabIndex={0}
                  aria-controls="example1"
                  rowSpan={1}
                  colSpan={1}
                >
                  Id
                </th>
                <th
                  className="sorting sorting_asc"
                  tabIndex={0}
                  aria-controls="example1"
                  rowSpan={1}
                  colSpan={1}
                >
                  Name
                </th>
                <th
                  className="sorting sorting_asc"
                  tabIndex={0}
                  aria-controls="example1"
                  rowSpan={1}
                  colSpan={1}
                >
                  Cellphone
                </th>
                <th
                  className="sorting sorting_asc"
                  tabIndex={0}
                  aria-controls="example1"
                  rowSpan={1}
                  colSpan={1}
                >
                  Email
                </th>
                <th
                  className="sorting sorting_asc"
                  tabIndex={0}
                  aria-controls="example1"
                  rowSpan={1}
                  colSpan={1}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map((v, index) => {
                const oddEven = index % 2 === 0 ? "even" : "odd";
                return (
                  <tr
                    key={`users_${oddEven}_${index}_${v.id}`}
                    className={oddEven}
                  >
                    <td>{v.id}</td>
                    <td>{v.name}</td>
                    <td>{v.cellphone}</td>
                    <td>{v.email}</td>
                    <td>
                      <Button
                        onClick={() => {
                          navigate(`/users/edit/${v.id}`);
                        }}
                      >
                        Edit
                      </Button>{" "}
                      <Button
                        onClick={async () => {
                          const result = await UserService.delete(v.id);
                          toast(
                            result
                              ? "Data erased."
                              : "An error ocurred in process."
                          );

                          findUsers();
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
