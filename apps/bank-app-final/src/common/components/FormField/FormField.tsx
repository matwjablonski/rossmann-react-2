import { ChangeEvent, FC, ReactNode } from 'react';

interface FormFieldProps {
  id: string;
  name: string;
  label: ReactNode | string;
  placeholder: string;
  type: 'text' | 'password' | 'textarea' | 'select';
  value: string;
  handleChange(e: ChangeEvent): void;
  options?: string[]
}

const FormField: FC<FormFieldProps> = ({
  id,
  name,
  type = 'text',
  placeholder,
  label,
  value,
  handleChange,
  options
}) => {

  if (type === 'select') {
    return (
      <select
        value={value}
        id={id} 
        name={name}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange(e)}
      >
        {options?.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    )
  }

  if (type === 'textarea') {
    return (
      <textarea
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange(e)}
      />
    )
  }

  return (
    <>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
      />
    </>
  )
}

// FormField.defaultProps = {
//   type: 'text',
// }

export default FormField;
