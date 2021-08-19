import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Link, RouteComponentProps, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { history } from "../..";
import { routes } from "../../app/routes/routes";
import { RegistrationFormModel } from "../../interfaces/RegistrationFormModel";
import { RegisterPlayer } from "./RegisterPlayer.logic";
import "./styles.css";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .required("Password confirmation is required")
    .oneOf([Yup.ref("password")], "Passwords does not match"),
});

const initialValues: RegistrationFormModel = {
  username: "",
  password: "",
  confirmPassword: "",
};

const handleSubmit = (values: RegistrationFormModel) => {
  RegisterPlayer(values)
    .then(() => {
      history.push(routes.gameBoard);
    })
    .catch((error) => {
      //TODO: add error handler
      console.log(error);
    });
};

const RegistrationForm: React.FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values)}
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
        <div className="form-field-group">
          <ErrorMessage name="confirmPassword" />
          <Field
            className="form-input"
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
          />
        </div>
        <div className="links links-center">
          <Link to={routes.homePage} className="link button">
            Back
          </Link>
          <button className="link button" type="submit">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export { RegistrationForm };
