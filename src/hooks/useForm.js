import { useState } from 'react';

function useForm(inicialValues)
{
    const [values, setValues] = useState(inicialValues);

    const setValue = (key, val) =>
    {
        // eslint-disable-next-line no-unused-expressions
        setValues({
            ...values,
            [key] : val,
        });
    }

    const handleChange = (event) =>
    {
        setValue(
            event.target.getAttribute('name'),
            event.target.value
        );
    }

    const handleError = (valor) =>
    {
        setValue("err",valor);
    }

    const clearForm = () =>
    {
        setValues(inicialValues);
    }

    return {
        values,
        handleChange,
        clearForm,
        handleError
    }

}

export default useForm;