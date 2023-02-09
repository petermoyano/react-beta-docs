import { useState } from "react";

export default function EditProfile() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [person, setPerson] = useState({ name: "Jane", lastName: "Jacobs" });
  function toggleEditMode(e) {
    e.preventDefault();
    setIsEditMode(!isEditMode);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setPerson((person) => ({
      ...person,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={toggleEditMode}>
      <label>
        First name: {!isEditMode && <b>{person.name}</b>}
        {isEditMode && (
          <input value={person.name} name="name" onChange={handleChange} />
        )}
      </label>
      <br />
      <label>
        Last person: {!isEditMode && <b>{person.lastName}</b>}
        {isEditMode && (
          <input
            value={person.lastName}
            name="lastName"
            onChange={handleChange}
          />
        )}
      </label>
      <br />
      <button type="submit">
        {isEditMode ? "Save Profile" : "Edit Profile"}
      </button>
      <p>
        <i>
          Hello, {person.name} {person.lastName}!
        </i>
      </p>
    </form>
  );
}
