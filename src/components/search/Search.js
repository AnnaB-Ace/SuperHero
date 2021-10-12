import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Search.css";
import { useDispatch, useSelector } from "react-redux";
import { getSearchNameAction } from "../../store/actions/search";

const Search = ({ history }) => {
  const dispatch = useDispatch();
  const submitName = (name) => dispatch(getSearchNameAction(name));
  const state = useSelector((state) => state.search);
  const {
    getHeroName: { success },
  } = state;

  return (
    <>
      <div className="row">
        <div className="col-lg-12 col-xs-12 search-instruction my-5 px-5 py-2 ">
          <div className="search-instruction-text">
            <h1>FIND A HERO AND BUILD YOU TEAM NOW </h1>
            <h2>The team must not exceed 6 heroes, the team must have</h2>
            <h2>3 good and 3 bad heroes</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-xs-12 search">
          <div className="search-form">
            <Formik
              initialValues={{ name: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.name) {
                  errors.name = "Enter the name of 1 hero";
                } else if (success === false && values.name) {
                  history.push(`/search?q=${values.name}`);
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                submitName(values.name);
                if (success === true && values.name) {
                  history.push(`/search?q=${values.name}`);
                } else if (success === false && !values.name) {
                  console.log("no hemos encontrado un heroe con ese nombre");
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form className="form">
                  <Field
                    type="name"
                    name="name"
                    className="search-input"
                    placeholder="Search"
                  />
                  <button
                    className="search-button"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                  <ErrorMessage
                    className="search-error"
                    name="name"
                    component="div"
                  />
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
