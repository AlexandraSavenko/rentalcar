import React from "react";
import css from "./CarOrderFrom.module.css";
import { ErrorMessage, Field, Formik, type FormikHelpers } from "formik";
import { Form } from "react-router-dom";
import * as Yup from "yup";
import type { FromValues } from "../../utils/types";

export const FormSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("This is not a valid email")
    .required("Please enter your email"),
  comment: Yup.string(),
});

export const formValues = {
  name: "",
  email: "",
  comment: "",
};
const CarOrderFrom = () => {
  const handleSubmit = (
    values: FromValues,
    actions: FormikHelpers<FromValues>
  ): void => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <div>
      <h4>Book your car now</h4>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik
        validationSchema={FormSchema}
        initialValues={formValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            type="text"
            name="name"
            className={css.forminput}
            placeholder="Name*"
          />
          <ErrorMessage name="name" component="span" className={css.errorMess}/>
          <Field
            type="email"
            name="email"
            className={css.forminput}
            placeholder="Email*"
          />
            <ErrorMessage name="email" component="span" className={css.errorMess}/>

          <Field
            type="textarea"
            name="comment"
            className={css.forminput}
            placeholder="Comment"
          />          

        </Form>
      </Formik>
    </div>
  );
};

export default CarOrderFrom;
