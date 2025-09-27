import {Input} from "@/components/Input/Input";
import {FormErrors} from "@/app/contact_me/model/useForm";
import {FormEvent} from "react";
import {TextArea} from "@/components/TextArea/TextArea";

type Props = {
  name: string;
  email: string;
  message: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setMessage: (message: string) => void;
  handleSubmit: () => void
  isSubmitting: boolean;
  errors: FormErrors;
}

export const ContactForm = ({
                              setName,
                              name,
                              message,
                              setMessage,
                              setEmail,
                              email,
                              handleSubmit,
                              isSubmitting,
                              errors
                            }: Props) => {

  const onSubmit = (e: FormEvent) => {
    e.preventDefault(); // Предотвращаем стандартную отправку формы
    handleSubmit();
  };

  return (
      <form className={'flex items-center flex-col gap-8 w-full'} onSubmit={onSubmit}>
        <Input id="name" value={name} handleChange={setName} label={'_name:'} error={errors.name} autoComplete="name" required />
        <Input id="email" handleChange={setEmail} value={email} label={'_email:'} error={errors.email} type="email" autoComplete="email" required />
        <TextArea id="message" handleChange={setMessage} value={message} label={'_message:'} error={errors.message} required />
        <button
            className={'py-3 px-6 bg-[#1C2B3A] rounded-lg'}
            type="submit"
            aria-label="Send contact message"
            disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'submit-message'}
        </button>
      </form>
  );
};
