"use client";
import Image from "next/image";
import { Formik } from "formik";
import { useState, useEffect } from "react";
import "../globals.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const [accessToken, setAccessToken] = useState();
  const router = useRouter();

  const getAccessToken = async (values) => {
    try {
      const response = await fetch("http://193.22.146.56:4242/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      const { accessToken } = data;

      setAccessToken(accessToken);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (accessToken) {
      router.push("/home/dashboard");
    }
  }, [accessToken, router]);
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="w-1/2">
        <Image
          src="/logo.png"
          width={225}
          height={102}
          alt="logo"
          className="mx-auto mb-8"
        />
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values, actions) => {
            getAccessToken(values);
            actions.resetForm();
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
            <form
              className="w-full border border-outframBorder px-10 py-20 rounded-2xl  "
              onSubmit={handleSubmit}
            >
              <label className="block text-btnColor text-base font-semibold mb-2">
                Email Address
                <input
                  type="email"
                  name="email"
                  placeholder="nouran@cyparta.com"
                  className="form-input mt-1 block w-full border border-inputBorder rounded-md px-3 py-2 focus:outline-none focus:border-outInputBorder focus:ring focus:ring-outInputBorder"
                  required
                  value={values.email}
                  onChange={handleChange}
                />
              </label>
              <label className="block text-btnColor text-base font-semibold mb-2">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="**********"
                  className="form-input mt-1 block w-full border  border-inputBorder rounded-md px-3 py-2 focus:outline-none focus:border-outInputBorder focus:ring focus:ring-outInputBorder"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
              </label>
              <button
                type="submit"
                className="bg-btnColor  text-white font-bold py-2 px-4 rounded w-full mt-20"
              >
                Login
              </button>
            </form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default Login;
