import React from "react";
import { useFormik } from "formik";
import BasicSechma from "../schemes";

const onSubmit = async (values, action) => {
  console.log(values);
  console.log(action);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  action.resetForm();
};

const BasicForm = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: BasicSechma,
    onSubmit,
  });
  return (
    <div>
      <form className="Bikash" onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="email">Email</label>
        <input
          value={values.email}
          onChange={handleChange}
          id="email"
          type="text"
          placeholder="Enter your email"
          onBlur={handleBlur}
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && <p>{errors.email}</p>}
        <label htmlFor="age">Age</label>
        <input
          value={values.age}
          onChange={handleChange}
          id="age"
          type="number"
          placeholder="Enter your Age"
          onBlur={handleBlur}
          className={errors.age && touched.age ? "input-error" : ""}
        />
        {errors.age && touched.age && <p>{errors.age}</p>}
        <label htmlFor="password">Password</label>
        <input
          value={values.password}
          onChange={handleChange}
          id="password"
          type="password"
          placeholder="Enter your password"
          onBlur={handleBlur}
          className={errors.password && touched.password ? "input-error" : ""}
        />
        {errors.password && touched.password && <p>{errors.password}</p>}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          value={values.confirmPassword}
          onChange={handleChange}
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          onBlur={handleBlur}
          className={
            errors.confirmPassword && touched.confirmPassword
              ? "input-error"
              : ""
          }
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p>{errors.confirmPassword}</p>
        )}
        <button disabled={isSubmitting}>Submit</button>
      </form>
    </div>
  );
};

export default BasicForm;
