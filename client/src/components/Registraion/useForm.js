import { useState } from "react";
import validateInfo from "./validateInfo";
import Swal from "sweetalert2";

const useForm = (validate) => {
  const [values, setValues] = useState(validate);

  const [errors, setErrors] = useState(validate);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateInfo(values);
    if (errors) {
      setErrors(errors);
    } else {
      const url = "https://staremovieapp.herokuapp.com/apiv1/register";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",

        body: JSON.stringify({
          name: values.username,
          email: values.email,
          password: values.password,
        }),
      });
      let data = await response.json().then((val) => {
        return val;
      });

      if (data) {
        Swal.fire("Please check your email to verify your account");
      }
      console.log(data);

      setErrors({});
      setValues({
        username: "",
        email: "",
        password: "",
      });
    }
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
