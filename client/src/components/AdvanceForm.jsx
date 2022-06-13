import React from "react";
import Custom from "../schemes/Custom";
import { Field, Form, Formik } from "formik";
import { Advance } from "../schemes";
import Selet from "../schemes/Selet";
import Check from "../schemes/Check";

const AdvanceForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ username: "", jobType: "", acceptedTos: false }}
        validationSchema={Advance}
      >
        <Form>
          <Custom
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
          />
          <Selet
            label="Seletion"
            name="jobType"
            placeholder="Please select a jopb"
          >
            <option value="">Please Select a job</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
            <option value="other">Other</option>
          </Selet>
          <Check type="checkbox" name="acceptedTos" />
          {/* <Field type="text" name="name" placeholder="Name" /> */}
          <button type="submit">submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AdvanceForm;
