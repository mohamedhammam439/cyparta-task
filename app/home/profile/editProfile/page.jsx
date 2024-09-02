"use client";

import { Formik } from "formik";

const EditProfile = () => {
  return (
    <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
      }}
      onSubmit={(values, actions) => {
        console.log("values :>> ", values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <label className="block text-btnColor text-base font-semibold mb-2">
            First Name
            <input
              type="text"
              name="first_name"
              className="form-input mt-1 block w-1/2 border border-inputBorder rounded-md px-3 py-2 focus:outline-none focus:border-outInputBorder focus:ring focus:ring-outInputBorder"
              placeholder="mohamed"
              value={values.first_name}
              onChange={handleChange}
            />
          </label>
          <label className="block text-btnColor text-base font-semibold mb-2">
            Last Name
            <input
              type="text"
              name="last_name"
              className="form-input mt-1 block w-1/2 border border-inputBorder rounded-md px-3 py-2 focus:outline-none focus:border-outInputBorder focus:ring focus:ring-outInputBorder"
              placeholder="hammam"
              value={values.last_name}
              onChange={handleChange}
            />
          </label>
          <label className="block text-btnColor text-base font-semibold mb-2">
            Email
            <input
              type="email"
              name="email"
              className="form-input mt-1 block w-1/2 border border-inputBorder rounded-md px-3 py-2 focus:outline-none focus:border-outInputBorder focus:ring focus:ring-outInputBorder"
              placeholder="nouran@cyparta.com"
              value={values.email}
              onChange={handleChange}
            />
          </label>
          <label className="block text-btnColor text-base font-semibold mb-2">
            Phone
            <input
              type="tel"
              name="phone"
              className="form-input mt-1 block w-1/2 border border-inputBorder rounded-md px-3 py-2 focus:outline-none focus:border-outInputBorder focus:ring focus:ring-outInputBorder"
              placeholder="0102547856"
              value={values.phone}
              onChange={handleChange}
            />
          </label>
          <button
            type="submit"
            className="bg-btnColor  text-white font-bold py-2 px-4 rounded w-1/2 mt-20"
          >
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default EditProfile;
