import {useState} from "react";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export const useForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Имя обязательно для заполнения';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }

    if (!email.trim()) {
      newErrors.email = 'Email обязателен для заполнения';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Введите корректный email';
    }

    if (!message.trim()) {
      newErrors.message = 'Сообщение обязательно для заполнения';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Сообщение должно содержать минимум 10 символов';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      console.error('Ошибка валидации формы');
      return;
    }

    setIsSubmitting(true);

    try {
      console.log({name, email, message});
      resetForm();
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
  };

  return {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    errors,
    isSubmitting,
    handleSubmit,
    resetForm,
    isValid: Object.keys(errors).length === 0 && name && email && message
  };
};