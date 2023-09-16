// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required("is a required field").email("Enter a valid e-mail address"),
  password: yup.string().matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,32}$/,
    'Password must contain 8 to 32 characters and must include letters in mixed case and at least 1 numberassword must meet the criteria')
});
let statusOk = 0;

function App() {
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const submitForm = (data) => {
    console.log(data);
    statusOk = 1;
  }

  console.log(statusOk)

  return (
    <div className="App">
      <form onSubmit={handleSubmit(submitForm)} className={`user-form ${statusOk ? "success" : ""}`}>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="email" placeholder="E-mail address" id="email" name="email" {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" placeholder="Password" name="password" {...register("password")} />
          <p>{errors.password?.message}</p>
        </div>
        <button type="submit" placeholder="Log in">Log In</button>
      </form>
    </div>
  );
}

export default App;
