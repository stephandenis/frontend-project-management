const Input = ({
  name,
  label,
  required,
  type,
  defaultValue,
}: {
  name: string;
  label: string;
  required: boolean;
  type: string;
  defaultValue: string;
}) => {
  return (
    <label htmlFor={name} className='flex flex-col my-3'>
      <span>{label}</span>
      <input
        required={required}
        type={type}
        name={name}
        className='input'
        defaultValue={defaultValue}
      />
    </label>
  );
};

export default Input;
