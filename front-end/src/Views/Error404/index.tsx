import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="col-sm-4" style={{ margin: "20vh auto 0 auto" }}>
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <Link to="/" className="h1">
            <b>Admin</b>
            <span>LTE</span>
          </Link>
        </div>
        <div className="card-body">
          <div className="error-content">
            <h3>
              <i className="fas fa-exclamation-triangle text-warning"></i>{" "}
              <span className="headline text-warning"> 404</span> Oops! Page not
              found.
            </h3>
            <p>
              We could not find the page you were looking for. Meanwhile, you
              may <a href="../../index.html">return to dashboard</a> or try
              using the search form.
            </p>
            <form className="search-form">
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  className="form-control"
                  placeholder="Search"
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    name="submit"
                    className="btn btn-warning"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
