import { useForm } from "react-hook-form";

export default function ReactHookForm(){
  let { register, handleSubmit, formState: { errors } } = useForm();


  let OnHandleSubmit = (data) => {
    console.log("Form submit", data);
  };


  return (
    <>
      <form onSubmit={handleSubmit(OnHandleSubmit)}>
        <div>
          <label htmlFor="name">enter name:</label>

          <input
            type="text"
            id="name"
            placeholder="enter the name"
            {...register("name", {
              required: "please enter the name",
              minLength: {
                value: 5,
                message: "Please enter at least 5 characters"
              }
            })}
          />

          {errors.name && (
            <span style={{ color: "red" }}>
              {errors.name.message}
            </span>
          )}
        </div>

        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
}

