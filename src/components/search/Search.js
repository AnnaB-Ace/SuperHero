import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Search.css";
import axios from "axios";
import SearchHeroList from "./SearchHeroList";
// import axios from "axios";

const Search = ({ history }) => {
  const [searchHero, setSearchHero] = useState([]);
  const heroeEncontrado = (name) => {
    axios
      .get(`https://superheroapi.com/api.php/10226767840599231/search/${name}`)
      .then((res) => {
        const data = res.data.results;
        console.log(data);
        setSearchHero(data);
      });
  }; // validar si el heroe no se encuentra en la url
  //  useEffect(() => {
  //    const getData = async (name) => {
  //      try {
  //        const resp = await axios.get(`https://superheroapi.com/api.php/10226767840599231/search/${name}`)
  //        if (!resp) {
  //          console.log("no encontramos el heroe");
  //        } else {
  //          const data = resp.data.results;
  //          console.log(data);
  //          setSearchHero(data);

  //        }
  //      } catch (error) {
  //        console.error("Firestore error: ", error);

  //      }
  //    };
  //    getData();
  //  }, []);
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-xs-12 search ">
          <div className="form-group py-4 px-4">
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
                  heroeEncontrado(values.name);
                  // history.push(`/search?q=${values.name}`);
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
        <div className="col-lg-6 col-xs-12 ">
          <h1>Comienza a armas tu equipo</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-xs-12 list">
          <div className="list-container">
            {searchHero.map((heroList) => {
              return <SearchHeroList key={heroList.id} {...{ heroList }} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
