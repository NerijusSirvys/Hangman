import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { history } from "../..";
import { routes } from "../../app/routes/routes";
import { engine } from "../../app/services/engine";
import { RegistrationFormModel } from "../../interfaces/RegistrationFormModel";

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
  engine.registerPlayer(values);
};

export const RegistrationForm: React.FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values)}
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
        <div className="form-row">
          <ErrorMessage className="error-msg" name="confirmPassword" />
          <Field
            className="input"
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
          />
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
