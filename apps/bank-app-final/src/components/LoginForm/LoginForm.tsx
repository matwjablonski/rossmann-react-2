import { ChangeEvent, SyntheticEvent, useState } from 'react';
import Button from '../Button/Button';
import FormField from '../FormField/FormField';

const LoginForm = () => {
  const [ formValue, setFormValue ] = useState({
    login: '',
    password: '',
  });

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    console.log(formValue)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nameField = e.currentTarget.name;
    const fieldValue = e.currentTarget.value;

    setFormValue((prevState) => ({
      ...prevState,
      [nameField]: fieldValue
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        placeholder='Wpisz login'
        type="text"
        label="Login:"
        id="login"
        name="login"
        value={formValue.login}
        handleChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
      />
      <FormField
        placeholder='Wpisz hasło'
        type="password"
        label="Hasło:"
        id="password"
        name="password"
        value={formValue.password} 
        handleChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
      />
      <Button label='Zaloguj' type="submit" />
    </form>
  )
}

export default LoginForm;
