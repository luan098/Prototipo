import { Button } from "src/Components";

const Users = () => {
  return (
    <div className="container-fluid">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Users</h1>
            </div>
            <div className="col-sm-6">
              <Button className="float-sm-right">Register</Button>
            </div>
          </div>
        </div>
      </section>
      <div className="row">
        <div className="col-sm-12">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Create User</h3>
            </div>

            <form>
              <div className="card-body">
                <div className="form-group col-sm-6">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="John"
                  />
                </div>
                <div className="form-group col-sm-6">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Doe"
                  />
                </div>
                <div className="form-group col-sm-6">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group col-sm-6">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="card-footer">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
