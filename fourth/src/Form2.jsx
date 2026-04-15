import { useRef } from "react";

export default function Form2() {
  let name = useRef();
  let email = useRef();
  let contact = useRef(); // fixed (small letter)

  let handleSubmit = (e) => {
    e.preventDefault();

    console.log(name.current.value);
    console.log(email.current.value);
    console.log(contact.current.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">enter name:</label>
          <input
            type="text"
            ref={name}
            placeholder="enter the name"
            id="name"
          />
        </div>

        <div>
          <label htmlFor="email">enter email:</label>
          <input
            type="email"
            ref={email}
            placeholder="enter the email"
            id="email"
          />
        </div>

        <div>
          <label htmlFor="contact">enter contact:</label>
          <input
            type="number"
            ref={contact}
            placeholder="enter the contact"
            id="contact"
          />
        </div>

        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
}