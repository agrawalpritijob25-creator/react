import { useState } from "react";
import Checkbox from "./Checkbox.js";
import Search from "./Search.js";
const Form = () => {
  const [checked, setChecked] = useState(false);
  const Message = ({ visible }) => {
    return visible ? <p>Message to show when checked</p> : "No Checked yet!";
  };
  const selectData = [
    {
      id: 1,
      fruits: "apple",
    },
    {
      id: 2,
      fruits: "banana",
    },

    {
      id: 3,
      fruits: "grapes",
    },
    {
      id: 4,
      fruits: "muskmelon",
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    age: "",
    email: "",
    select: "",
  });
  const [error, setError] = useState({});
  const validation = () => {
    let newError = {};
    if (!formData.name?.trim()) newError.name = "Name is required";
    if (!formData.password) newError.password = "Password is required";
    if (!formData.age) newError.age = "age is required";
    if (!formData.email?.includes("@")) newError.email = "email required";
    setError(newError);
    return Object.keys(newError).length === 0;
  };
  const formInputHanlder = (e) => {
    const { name, value } = e.target;
    setFormData({ ...Form, [name]: value });
  };

  const onSubmitHanlder = (e) => {
    e.preventDefault();
    if (validation()) {
      console.log("form submit", formData);
    }
  };
  return (
    <>
      <form className="card" onSubmit={onSubmitHanlder}>
        <input
          type="text"
          name="name"
          value={formData.name ?? ""}
          placeholder="Enter the name"
          onChange={formInputHanlder}
        />
        {error.name && <span style={{ color: "red" }}>{error.name}</span>}

        <input
          type="password"
          name="password"
          value={formData.password ?? ""}
          placeholder="Enter the password"
          onChange={formInputHanlder}
        />
        {error.password && (
          <span style={{ color: "red" }}>{error.password}</span>
        )}

        <input
          type="age"
          name="age"
          value={formData.age ?? ""}
          placeholder="Enter the age"
          onChange={formInputHanlder}
        />
        {error.age && <span style={{ color: "red" }}>{error.age}</span>}

        <input
          type="email"
          name="email"
          value={formData.email ?? ""}
          placeholder="Enter the email"
          onChange={formInputHanlder}
        />
        {error.email && <span style={{ color: "red" }}>{error.email}</span>}

        <select type="select" onChange={formInputHanlder}>
          <option value="">Please select</option>
          {selectData.map((item) => (
            <option key={item.id}>{item.fruits}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <Message visible={checked} />

      <Search />
    </>
  );
};

export default Form;
