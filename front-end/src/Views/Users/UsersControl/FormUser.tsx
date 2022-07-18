import { useFormik } from "formik";
import { FC } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import UserService from "src/Services/UserService";
import * as Yup from "yup";

interface FormData {
  name: string;
  email: string;
  password: string;
  cellphone: string;
}

const FormUser: FC<{ user?: FormData }> = ({ user }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const registerUser = async (values: FormData) => {
    try {
      const result = await UserService.createUser(values);
      toast.success("Registration is success");
      navigate(`/users/edit/${result}`);
    } catch (error) {
      toast.error("An error ocurred on procedure");
    }
  };

  const editUser = async (values: FormData) => {
    try {
      const updateV = { ...values };

      const result = await UserService.updateUser(id || "", updateV);
      if (!result) throw new Error("Update error");

      toast.success("Update procedure success");
      navigate(`/users/edit/${id}`);
    } catch (error) {
      toast.error("An error ocurred on procedure");
    }
  };

  const { handleChange, values, handleSubmit, touched, errors } = useFormik({
    initialValues: user || {
      name: "",
      email: "",
      password: "",
      cellphone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, "Must be 3 characters or more"),
      cellphone: Yup.string(),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(5, "Must be 5 characters or more")
        .max(30, "Must be 30 characters or less"),
    }),
    onSubmit: (values) => {
      if (id) {
        editUser(values);
      } else {
        registerUser(values);
      }
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="card-body">
        <div className="form-group col-sm-6">
          <label htmlFor="name">Name</label>
          <Form.Control
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="John"
            onChange={handleChange}
            defaultValue={values.name}
            isValid={touched.name && !errors.name}
            isInvalid={touched.name && !!errors.name}
          />
        </div>
        <div className="form-group col-sm-6">
          <label htmlFor="email">Email address</label>
          <Form.Control
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter email"
            defaultValue={values.email}
            isValid={touched.email && !errors.email}
            isInvalid={touched.email && !!errors.email}
          />
        </div>
        <div className="form-group col-sm-6">
          <label htmlFor="cellphone">Celular</label>
          <Form.Control
            name="cellphone"
            type="cellphone"
            onChange={handleChange}
            className="form-control"
            id="cellphone"
            placeholder="(__) _ ____-____"
            defaultValue={values.cellphone}
            isValid={touched.cellphone && !errors.cellphone}
            isInvalid={touched.cellphone && !!errors.cellphone}
          />
        </div>
        <div className="form-group col-sm-6">
          <label htmlFor="password">Password</label>
          <Form.Control
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={handleChange}
            placeholder="***********"
            defaultValue={values.password}
            isValid={touched.password && !errors.password}
            isInvalid={touched.password && !!errors.password}
          />
        </div>
      </div>

      <div className="card-footer">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormUser;
