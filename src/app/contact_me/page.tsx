'use client'
import {useState} from "react";

export default function ContactMePage(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const date = new Date();
  return (<div>
    <form className={'flex flex-col gap-8'}>
      <div className={'flex flex-col gap-1'}>
        <label htmlFor="name" className={'text-secondary-grey'}>_name:</label>
        <input type="text" id={'name'} name={'name'} className={'w-[327px] border border-lines bg-primary-blue'} value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className={'flex flex-col gap-1'}>
        <label htmlFor={'email'} className={'text-secondary-grey'}>_email:</label>
        <input type="text" id={'email'} name={'email'} className={'w-[327px] border border-lines bg-primary-blue'} value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className={'flex flex-col gap-1'}>
        <label htmlFor={'message'} className={'text-secondary-grey'}>_message:</label>
        <textarea name={'message'} className={'w-[327px] h-[145px] border border-lines bg-primary-blue'} value={message}  onChange={(e) => setMessage(e.target.value)} />
      </div>
      <button type={'submit'}>submit-message</button>
    </form>
    <div>
      <div>
        <span>{name}</span>
      </div>
      <div><span>{email}</span></div>
      <div><span>{message}</span></div>
      <div>{date.toDateString()}</div>

    </div>
  </div>)
}