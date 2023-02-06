import { useState } from "react";
//  The { ...form } spread syntax ensures that the state object is replaced rather than mutated.
export default function CorrectForm() {
  const [form, setForm] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  return (
    <>
      <label>
        First name:
        <input
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Last name:
        <input
          value={form.lastName}
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />
      </label>
      <p>
        {/* {form.firstName}{' '}
        {form.lastName}{' '}
        ({form.email}) */}
        {`${form.firstName} ${form.lastName} ${form.email}`}
      </p>
    </>
  );
}
