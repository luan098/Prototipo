import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "src/Components";
import UserService from "src/Services/UserService";
import FormUser from "./FormUser";

const UsersControl = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cellphone: "",
  });

  const getUser = async (userId: string) => {
    try {
      const result = await UserService.getUserById(userId);
      result.password = "";
      setUser(result);
    } catch (error) {
      toast.error("An error ocurred on procedure");
    }
  };

  useEffect(() => {
    if (id) {
      getUser(id);
    }
  }, [id]);

  return (
    <div className="container-fluid">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Users</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="row">
        <div className="col-sm-12">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">{id ? "Edit User" : "Create User"}</h3>
            </div>
            {id && !user?.email ? "" : <FormUser user={user} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersControl;
