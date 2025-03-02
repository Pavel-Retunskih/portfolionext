'use client'

import {useEffect, useState} from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {gruvboxDark} from "react-syntax-highlighter/dist/esm/styles/hljs"

export default function ContactMePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  return (<div className={'flex flex-col lg:flex-row lg:gap-10 border-t border-t-lines'}>
    <h3 className={'lg:hidden sm:flex items-center justify-start py-5 pl-4'}>_contact-me</h3>
    <form className={'flex flex-col gap-8 border-r  border-r-lines px-32 pt-28'}>
      <div className={'flex flex-col gap-1'}>
        <label htmlFor="name" className={'text-secondary-grey'}>_name:</label>
        <input type="text" id={'name'} name={'name'}
               className={'pl-3.5 autofill:bg-primary-blue w-[327px] border border-lines' +
                   ' focus:outline-none focus:border-secondary-grey rounded-md bg-primary-blue'}
               value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <div className={'flex flex-col gap-1'}>
        <label htmlFor={'email'} className={'text-secondary-grey'}>_email:</label>
        <input type="text" id={'email'} name={'email'}
               className={'pl-3.5 w-[327px] border autofill:bg-primary-blue border-lines focus:outline-none' +
                   ' focus:border-secondary-grey rounded-md bg-primary-blue'}
               value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className={'flex flex-col gap-1'}>
        <label htmlFor={'message'} className={'text-secondary-grey'}>_message:</label>
        <textarea name={'message'}
                  className={'w-[327px] h-[145px] border focus:outline-none autofill:bg-primary-blue' +
                      ' focus:border-secondary-grey' +
                      ' rounded-md' +
                      ' pl-3.5 border-lines bg-primary-blue'}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}/>
      </div>
      <button type={'submit'}>submit-message</button>
    </form>
    <div className={'hidden md:block border-r pt-28 border-r-lines px-20'}>
      <CodeBlock name={name} email={email} message={message}/>
    </div>
  </div>)
}

function CodeBlock({name, message, email}: { name: string, email: string, message: string }) {
  const customStyle = {
    background: 'transparent',
  };
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleString('en-GB', {weekday: 'short', day: '2-digit', month: 'short'});
    setCurrentDate(formattedDate);
  }, []);
  const text = `
const button = document.querySelector('#sendBtn');

const message = {
  name: "${name}",
  email: "${email}",
  message: "${message}",
  date: "${currentDate}"
};

button.addEventListener('click', () => {
  form.send(message);
});
`;
  return <div className={'w-[600px]'}>
    <SyntaxHighlighter language="javascript" customStyle={customStyle} style={gruvboxDark} wrapLongLines
                       showLineNumbers>
      {text}
    </SyntaxHighlighter>
  </div>
}