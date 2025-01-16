'use client'
import '../../styles/codeBox.css'
import {useEffect, useState} from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {gruvboxDark} from "react-syntax-highlighter/dist/esm/styles/hljs"
export default function ContactMePage(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  return (<div className={'flex justify-around ml-[300px]'}>
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
  <CodeBlock name={name} email={email} message={message} />
    </div>
  </div>)
}

function CodeBlock({name, message,email}:{name:string, email:string ,message: string}) {
  const customStyle = {
    background: 'transparent',
  };
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {

    const date = new Date();
    const formattedDate = date.toLocaleString('en-GB', { weekday: 'short', day: '2-digit', month: 'short' });
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
  return  <div className={'w-[600px]'}>
    <SyntaxHighlighter language="javascript"  customStyle={customStyle} style={gruvboxDark} wrapLongLines showLineNumbers>
      {text}
    </SyntaxHighlighter>
  </div>
}