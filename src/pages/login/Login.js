import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { getAuthAction } from "../../store/actions/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const submit = async (user, password) => {
    try {
      dispatch(getAuthAction(user, password));
      history.push("/home");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="row login1">
      <div className="col-lg-12 col-xs-12 login">
        <div className="form-group px-5">
          <Formik
            className="px-4 py-2"
            initialValues={{ user: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.user) {
                errors.user = "User is Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user)
              ) {
                errors.user = "Invalid user format";
              }
              if (!values.password) {
                errors.password = "Password is Required";
              } else if (!/^.{4,6}$/i.test(values.password)) {
                errors.password = "The password must be between 4 to 6 digits";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                submit(values.user, values.password);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  type="user"
                  name="user"
                  className="form-control my-3"
                  placeholder="@email.com"
                />
                <ErrorMessage name="user" component="div" />
                <Field
                  type="password"
                  name="password"
                  className="form-control my-3"
                  placeholder="**********"
                />
                <ErrorMessage name="password" component="div" />
                <button
                  className="btn btn-outline-primary mt-4"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
