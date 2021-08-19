import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { history } from "../..";
import { routes } from "../../app/routes/routes";
import { FormModel } from "../../interfaces/FormModel";
import { LoginPlayer } from "./LoginPlayer.logic";
import "./styles.css";

const validationSchema = Yup.object({
  username: Yup.string().required("Username required"),
  password: Yup.string().required("Password is required"),
});

const initialValues = {
  username: "",
  password: "",
};

const handleSubmit = (loginValues: FormModel) => {
  LoginPlayer(loginValues).then(() => {
    history.push(routes.gameBoard);
  });
};

const LoginForm: React.FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values: FormModel) => handleSubmit(values)}
    >
      <Form className="login-form">
        <div className="form-field-group">
          <ErrorMessage name="username" />
          <Field
            className="form-input"
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="off"
          />
        </div>
        <div className="form-field-group">
          <ErrorMessage name="password" />
          <Field className="form-input" id="password" type="password" name="password" placeholder="Password" />
        </div>

        <button className="link button" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export { LoginForm };
