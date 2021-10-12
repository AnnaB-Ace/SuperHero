import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { getAuthAction } from "../../store/actions/auth";
import { useDispatch } from "react-redux";
import "./Login.css";
import { useSelector } from "react-redux";
import MyLoading from "../../components/loading/MyLoading";

const validation = (values) => {
  const errors = {};
  if (!values.user) {
    errors.user = "User is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user)) {
    errors.user = "Invalid user format";
  }
  if (!values.password) {
    errors.password = "Password is Required";
  } else if (!/^.{4,6}$/i.test(values.password)) {
    errors.password = "The password must be between 4 to 6 digits";
  }
  return errors;
};

const Login = () => {
  const dispatch = useDispatch();
  const submit = async (user, password) => {
    dispatch(getAuthAction(user, password));
  };
  const state = useSelector((state) => state.auth);
  const {
    login: { isLoading, error },
  } = state;

  return (
    <div className="row login1">
      <div className="col-lg-12 col-xs-12 login">
        <div className="form-group px-5 py-4">
          <p className="title">SUPERHERO</p>
          <p>Welcome</p>
          <p>Login to continue:</p>
          <Formik
            className="px-4 py-3"
            initialValues={{ user: "challenge@alkemy.org", password: "react" }}
            validate={(values) => validation(values)}
            onSubmit={(values, { setSubmitting }) => {
              submit(values.user, values.password);
            }}
          >
            {() => (
              <Form>
                {error ? <p className="login-error">{error}</p> : null}
                <Field
                  type="user"
                  name="user"
                  className="form-control my-3"
                  placeholder="@email.com"
                />
                <ErrorMessage
                  className="login-error"
                  name="user"
                  component="div"
                />
                <Field
                  type="password"
                  name="password"
                  className="form-control my-3"
                  placeholder="********"
                />
                <ErrorMessage
                  className="login-error"
                  name="password"
                  component="div"
                />
                <button
                  className="btn btn-primary mt-4 form-control"
                  type="submit"
                >
                  {isLoading ? <MyLoading /> : <span>Submit</span>}
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
