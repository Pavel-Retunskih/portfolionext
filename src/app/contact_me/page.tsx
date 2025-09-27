'use client'

import {CodeBlock} from "@/components/CodeBlock/CodeBlock";
import {ContactForm} from "@/components/ContactForm/ContactForm";
import {useForm} from "@/app/contact_me/model/useForm";

export default function ContactMePage() {
  const {setName, setEmail, setMessage, message, name, email, handleSubmit, isSubmitting, errors} = useForm()
  console.log(errors)
  return <div className={'flex md:flex-row flex-col gap-6 md:justify-around md:items-center flex-grow' +
      ' max-w-[1200px]'}>
    <h3 className={'lg:hidden sm:flex items-center justify-start py-5 pl-4'}>_contact-me</h3>
    <ContactForm
        name={name}
        email={email}
        message={message}
        setName={setName}
        setEmail={setEmail}
        setMessage={setMessage}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        errors={errors}
    />
    <div className={'hidden md:block border-r border-r-lines'}>
      <CodeBlock
          name={name}
          email={email}
          message={message}
      />
    </div>
  </div>
}

