import { useState } from "react";

const typesValidation = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido.'
  },
}

export default function useForm(type) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  function validate(value) {
    if (type === false) return;

    if (value.length === 0) {
      setError('Campo obrigatório.');
      return false;
    } else if (typesValidation[type] && !typesValidation[type].regex.test(value)) {
      setError(typesValidation[type].message);
      return false;
    } else {
      setError(null);
      return;
    }
  }

  function onChange(event) {
    if (error) validate(event.target.value);

    setValue(event.target.value);
  }

  return { 
    value, 
    error, 
    setValue, 
    onChange, 
    validate: () => validate(value), 
    onBlur: () => validate(value) 
  };
}