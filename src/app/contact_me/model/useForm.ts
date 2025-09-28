import {useCallback, useState} from "react";
import {useForm as useRHForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {sendMessage} from "@/app/contact_me/model/sendMessage";

const formSchema = z.object({
  name: z
      .string()
      .trim()
      .min(2, {message: 'Имя должно содержать минимум 2 символа'}),
  email: z.email({message: 'Введите корректный email'}),
  message: z
      .string()
      .trim()
      .min(10, {message: 'Сообщение должно содержать минимум 10 символов'}),
});

export type FormValues = z.infer<typeof formSchema>;

export const useForm = () => {

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const {register, handleSubmit: rhfHandleSubmit, watch, formState, reset} = useRHForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {name: '', email: '', message: ''},
  });
  const onSubmit = useCallback(async (data: FormValues) => {
    const payload: FormValues = {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      message: data.message.trim(),
    };
    try {
      await sendMessage(JSON.stringify(payload))
      setStatus('success');
      reset();

    } catch (error) {
      setStatus('error');
    }

  }, [reset]);

  const handleReset = () => {
    setStatus('idle')
  }

  const handleSubmit = useCallback(() => {
    return rhfHandleSubmit(onSubmit)();
  }, [onSubmit, rhfHandleSubmit]);
  const isSuccess = status === 'success';
  const isError = status === 'error';
  const isIdle = status === 'idle';

  return {
    email: watch('email'),
    name: watch('name'),
    message: watch('message'),
    errors: formState.errors,
    isSubmitting: formState.isSubmitting,
    isValid: formState.isValid,
    isError,
    isSuccess,
    isIdle,
    handleSubmit,
    register,
    handleReset,
  };
};
