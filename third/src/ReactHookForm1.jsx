import React from "react";
import { useForm } from "react-hook-form";

function ReactHookForm(){
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Enter name" />
      <br />
      <input type="submit" />
    </form>
  );
}

export default ReactHookForm;