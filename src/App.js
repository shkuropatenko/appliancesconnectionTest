// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  email: yup.string().required("is a required field").email("Enter a valid e-mail address"),
  password: yup.string().min(8).max(32).matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,32}$/,
    'PPassword must contain 8 to 32 characters and must include letters in mixed case and at least 1 numberassword must meet the criteria')
});

function App() {
  const { handleSubmit, register, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });
  const [statusOk, setStatusOk] = useState(false);
  let i = 0;
  // const formSubmit = data => {
  //   axios
  //     .post(
  //       data,
  //       setStatusOk(true)
  //     )
  //     .then(response => { console.log(response.data) })
  //     .catch(error => { console.log(error.data) });
  // };
  // console.log(i);
  const submitForm = (data) => {
    console.log(data);
    i = 1;
    // console.log(i);
    return i;
  }
  console.log(i);
  return (
    <div className="App">
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="email" placeholder="E-mail address" id="email" name="email" {...register("email")} required />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" placeholder="Password" name="password" {...register("password")} required />
          <p>{errors.password?.message}</p>
        </div>
        <button type="submit" placeholder="Log in">Log In</button>
      </form>
    </div>
  );
}

export default App;
