import { ChangeEvent, SyntheticEvent, useCallback, useRef, useState } from 'react'
import Button from '../Button/Button';
import FormField from '../FormField/FormField';

const ContactForm = () => {
  const [ formValues, setFormValues ] = useState({
    topic: '',
    message: '',
    time: ''
  });

  const areFormReady = formValues.message && formValues.time && formValues.topic;

  const handleSubmit = useCallback((e: SyntheticEvent) => {
    e.preventDefault();

    alert('Wiadomość została wysłana.')
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const nameField = e.currentTarget.name;
    const fieldValue = e.currentTarget.value;

    setFormValues((prevState) => ({
      ...prevState,
      [nameField]: fieldValue
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        id="topic"
        type="text"
        placeholder="Podaj tytuł"
        name="topic"
        label="Tytuł"
        value={formValues.topic}
        handleChange={handleChange}
      />
      <FormField
        id="message"
        label="Wiadomość"
        name="message"
        type="textarea"
        placeholder="Czym chcesz się podzielić?"
        value={formValues.message}
        handleChange={handleChange}
      />
      <FormField
        id="time"
        label="Która pora?"
        name="time"
        type="select"
        placeholder="Która pora?"
        value={formValues.time}
        handleChange={handleChange}
        options={[
          'rano',
          'wieczorem'
        ]}
      />
      <Button label='Wyślij' type="submit" disabled={!areFormReady} />
    </form>
  )
}

export default ContactForm;
