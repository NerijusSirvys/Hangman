import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { history } from "../..";
import { routes } from "../../app/routes/routes";
import { FormModel } from "../../interfaces/FormModel";
import { LoginPlayer } from "./LoginPlayer.logic";

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

export const LoginForm: React.FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values: FormModel) => handleSubmit(values)}
    >
      <Form className="form">
        <div className="form-row">
          <ErrorMessage className="error-msg" name="username" />
          <Field
            className="input"
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="off"
          />
        </div>
        <div className="form-row">
          <ErrorMessage className="error-msg" name="password" />
          <Field className="input" id="password" type="password" name="password" placeholder="Password" />
        </div>
        <div className="button-row">
          <Link to={routes.homePage} className="button">
            Back
          </Link>
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};
