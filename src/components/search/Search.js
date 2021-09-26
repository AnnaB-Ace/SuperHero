import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Search.css";
import { useDispatch } from "react-redux";
import { getSearchNameAction } from "../../store/actions/search";

const Search = ({ history }) => {
  const dispatch = useDispatch();
  const submitName = (name) => dispatch(getSearchNameAction(name));
  return (
    <>
      <div className="row">
        <div className="col-lg-12 col-xs-12 container-instruction px-5 ">
          <div className="instruction">
            <h1>Find a hero and build your team now</h1>
            <p>1-The team must not exceed 6 heroes </p>
            <p>2-the team must have 3 good and 3 bad heroes </p>
          </div>
          <div className="form-group  py-4 px-4">
            <h4 className="mx-4">Search Form </h4>
            <hr />
            <Formik
              className="px-4 py-2"
              initialValues={{ name: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.name) {
                  errors.name = "Enter the name of 1 hero";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                  submitName(values.name);
                  history.push(`/search?q=${values.name}`);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field
                    type="name"
                    name="name"
                    className="form-control my-3"
                  />
                  <ErrorMessage name="name" component="div" />
                  <button
                    className="btn btn-outline-primary"
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
    </>
  );
};

export default Search;
