import { useState } from 'react';

const useForm = (prop) => {
  const { initialValues, validation, onSubmit } = prop;
  const [errors, setErrors] = useState({ account: '', password: '' });
  const [values, setValues] = useState({
    account: initialValues.account,
    password: initialValues.password,
    rememberMe: initialValues.rememberMe,
  });

  function handleChange(e) {
    const getValue = () => {
      // 判斷是否為 rememberMe
      return name === 'rememberMe' ? !values.rememberMe : e.target.value;
    };

    // 取得 input name
    let name = e.target.name;
    let value = getValue();
    let newValues = { ...values, [name]: value };

    setValues(newValues);
  }

  function handleSubmit() {
    setErrors(validation(values));
    onSubmit(values);
  }

  return {
    handleChange: handleChange,
    handleSubmit: handleSubmit,
    values: values,
    errors: errors,
  };
};

export default useForm;
