function Input({ value, label, onChange }) {
  function handleChange(e) {
    console.log(e, "event");
    onChange(e.target.value);
  }

  return (
    <div>
      <label>{label}</label>
      <br />
      <input value={value} onChange={handleChange} />
    </div>
  );
}

export default Input;
