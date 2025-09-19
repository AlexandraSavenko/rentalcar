import css from "./CarOrderFrom.module.css";
import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from "formik";
import * as Yup from "yup";
import { formOrderValues } from "../../utils/initialStates";
import type { FromOrderValues } from "../../utils/types";



export const FormSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("This is not a valid email")
    .required("Please enter your email"),
  bDate: Yup.string().required("Please enter the booking date"),
  comment: Yup.string(),
});

const CarOrderFrom = () => {
  const handleSubmit = (
    values: FromOrderValues,
    actions: FormikHelpers<FromOrderValues>
  ): void => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <div className={css.formWrap}>
      <h4>Book your car now</h4>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik
        validationSchema={FormSchema}
        initialValues={formOrderValues}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <Field
            type="text"
            name="name"
            className={css.forminput}
            placeholder="Name*"
          />
          <ErrorMessage
            name="name"
            component="span"
            className={css.errorMess}
          />
          <Field
            type="email"
            name="email"
            className={css.forminput}
            placeholder="Email*"
          />
          <ErrorMessage
            name="email"
            component="span"
            className={css.errorMess}
          />
          <Field
            type="text"
            name="bDate"
            className={css.forminput}
            placeholder="Booking Date*"
          />
          <ErrorMessage
            name="bDate"
            component="span"
            className={css.errorMess}
          />
          <Field
            type="textarea"
            name="comment"
            className={css.forminput}
            placeholder="Comment"
          />
          <button className={css.sendBtn} type="submit">Send</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CarOrderFrom;
