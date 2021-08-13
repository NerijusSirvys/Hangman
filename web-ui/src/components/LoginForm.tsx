import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { gameEngine } from "../app/services/gameEngine";
import { FormModel } from "../interfaces/FormModel";

const validationSchema = Yup.object({
  username: Yup.string().required("Username required"),
  password: Yup.string().required(),
});

const initialValues = {
  username: "",
  password: "",
};

const LoginForm: React.FC = () => {
  const handleSubmit = (loginValues: FormModel) => {
    gameEngine.loginPlayer(loginValues);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values) => handleSubmit(values)}>
      <Form className="login-form">
        <div className="form-field-group">
          <ErrorMessage name="username" />
          <Field className="form-input" id="username" type="text" name="username" placeholder="Username" autoComplete="off" />
        </div>
        <div className="form-field-group">
          <ErrorMessage name="password" />
          <Field className="form-input" id="password" type="password" name="password" placeholder="Password" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export { LoginForm };
