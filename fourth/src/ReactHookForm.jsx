import { useForm } from "react-hook-form";

export default function ReactHookForm() {
  let {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  let OnHandleSubmit = (data) => {
    console.log("Form submit", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(OnHandleSubmit)}>
        
        {/* NAME */}
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

        {/* EMAIL */}
        <div>
          <label htmlFor="email">enter email:</label>

          <input
            type="email"
            id="email"
            placeholder="enter the email"
            {...register("email", {
              required: "please enter the email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email"
              }
            })}
          />

          {errors.email && (
            <span style={{ color: "red" }}>
              {errors.email.message}
            </span>
          )}
        </div>

        {/* CONTACT */}
        <div>
          <label htmlFor="contact">enter contact:</label>

          <input
            type="tel"
            id="contact"
            placeholder="enter the contact"
            {...register("contact", {
              required: "please enter the contact",
              validate: (val) => {
                if (val.length !== 10) {
                  return "Contact must be 10 digits";
                }
                return true;
              }
            })}
          />

          {errors.contact && (
            <span style={{ color: "red" }}>
              {errors.contact.message}
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