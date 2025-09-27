'use client'

import {CodeBlock} from "@/components/CodeBlock/CodeBlock";
import {ContactForm} from "@/components/ContactForm/ContactForm";
import {useForm} from "@/app/contact_me/model/useForm";

export default function ContactMePage() {
  const {setName, setEmail, setMessage, message, name, email, handleSubmit, isSubmitting, errors, success} = useForm()
  console.log(errors)
  return <div className={' w-full flex flex-col md:flex-row'}>


    <div className={'hidden md:block max-w-[300px] w-full border-r border-r-lines'}>
      side navigation
    </div>

    <div className={'flex flex-col w-full '}>
      <span className={'py-2.5 pl-4 border-r border-r-lines max-w-[160px]'}>_contact-me</span>
      <div className={'flex flex-row w-full flex-grow border-t border-t-lines'}>
        <div className={'lg:max-w-[600px] w-full p-6 md:px-28 flex items-center justify-center'}>
          {success ? <div className={'flex flex-col px-4 sm:px-12 gap-10'}>
            <h3 className={'text-center text-3xl md:text-4xl'}>Thank you! 🤘</h3>
            <p className={'text-center text-xs sm:text-xl lg:text-2xl'}>Your message has been accepted. You will recieve
              answer really
              soon!</p>
          </div> : <ContactForm
              name={name}
              email={email}
              message={message}
              setName={setName}
              setEmail={setEmail}
              setMessage={setMessage}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              errors={errors}
          />}
        </div>

        <div
            className={'hidden md:flex border-x border-x-lines max-w-[840px] w-full justify-center items-center'}>
          <CodeBlock
              name={name}
              email={email}
              message={message}
          />
        </div>
      </div>


    </div>

  </div>
}

