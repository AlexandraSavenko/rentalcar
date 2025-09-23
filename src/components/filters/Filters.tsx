import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBrands, selectFilterLoading } from "../../redux/filters/selectors";
import { resetFilters, setQueryFilters } from "../../redux/filters/slice";
import { getBrands } from "../../redux/filters/operations";
import type { AppDispatch } from "../../redux/store";
import { Formik, Form, type FormikHelpers } from "formik";
import FilterSelect from "../filterSelect/FilterSelect";
import { filterInitValues } from "../../utils/initialStates";
import type { FormFilterValues } from "../../utils/types";
import css from "./Filters.module.css";
import FilterInput from "../filterInput/FilterInput";
import Loader from "../loader/Loader";

const Filters = () => {
  const filterLoading = useSelector(selectFilterLoading)
  const brands = useSelector(selectBrands);
  const prices = new Array(8)
    .fill(0)
    .map((_, i) => (i + 3) * 10)
    .map((el) => el.toString());
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getBrands());
  }, []);

  const handleSubmitFilters = (
    values: FormFilterValues,
    action: FormikHelpers<FormFilterValues>
  ) => {
    dispatch(setQueryFilters(values));
    action.resetForm();
  };
  const handleResetFilters = () => {
    dispatch(resetFilters());
  };
  
  return (
    filterLoading ? <Loader/>  :
    (<div className={css.filtersWrap}>
      <Formik initialValues={filterInitValues} onSubmit={handleSubmitFilters}>
        <Form className={css.filtersForm}>
          <FilterSelect name="brand" options={brands} />
          <FilterSelect name="price" options={prices} />
          <div className={css.milesWrap}>
            <FilterInput name="milesFrom" />
            <FilterInput name="milesTo" />
          </div>

          <button className={css.filterBtn} type="submit">
            Search
          </button>
        </Form>
      </Formik>

      <button className={css.filterBtn} onClick={handleResetFilters}>
        Reset Filters
      </button>
    </div>)
  );
};

export default Filters;
