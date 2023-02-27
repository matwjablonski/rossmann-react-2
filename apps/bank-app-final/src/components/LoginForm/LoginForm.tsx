import { ChangeEvent, SyntheticEvent, useState } from 'react';

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
      <label htmlFor="login">
        Login:
      </label>
      <input
        placeholder='Wpisz login'
        type="text"
        id="login"
        name="login"
        value={formValue.login}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
      />
      <label htmlFor="password">
        Hasło:
      </label>
      <input 
        placeholder='Wpisz hasło'
        type="password"
        id="password"
        name="password"
        value={formValue.password} 
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
      />
      <button type="submit">Zaloguj</button>
    </form>
  )
}

export default LoginForm;
