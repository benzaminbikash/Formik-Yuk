import React from "react";
import { useField } from "formik";

const Check = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log("feild", field);
  console.log("meta", meta);
  return (
    <div>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      <span>I accept terms n police</span>
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
};

export default Check;
