export const Textinput = ({ value, onChange }) => {
  const id = Math.random().toString();
  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id={id}>
        ძებნა
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
