import {Input} from "@/components/Input/Input";
import {FormValues} from "@/app/contact_me/model/useForm";
import {FormEvent} from "react";
import {TextArea} from "@/components/TextArea/TextArea";
import {FieldErrors, UseFormRegister} from "react-hook-form";

type Props = {
  register: UseFormRegister<FormValues>;
  handleSubmit: () => void;
  isSubmitting: boolean;
  errors: FieldErrors<{ name: string, email: string, message: string }>;
}

export const ContactForm = ({
                              register,
                              handleSubmit,
                              isSubmitting,
                              errors
                            }: Props) => {

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
      <form className={'flex items-center flex-col gap-8 w-full'} onSubmit={onSubmit}>
        <Input id="name" label={'_name:'} error={errors.name?.message} autoComplete="name" required
               register={register('name')}/>
        <Input id="email" label={'_email:'} error={errors.email?.message} type="email" autoComplete="email" required
               register={register('email')}/>
        <TextArea id="message" label={'_message:'} error={errors.message?.message} required
                  register={register('message')}/>
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
