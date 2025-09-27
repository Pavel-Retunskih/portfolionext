'use client'
import {useEffect, useState} from "react";
import {gruvboxDark} from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

type Props = {
  name: string,
  email: string,
  message: string
};
export const CodeBlock = ({name, message, email}: Props) => {
  const customStyle = {
    background: 'transparent',
  };
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleString('en-GB', {weekday: 'short', day: '2-digit', month: 'short'});
    setCurrentDate(formattedDate);
  }, []);

  const escapeHtml = (str: string) =>
      str.replace(/[&<>'"]/g, (match) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;',
        '"': '&quot;', "'": '&#39;'
      }[match] || match));

  const text = `
const button = document.querySelector('#sendBtn');

const message = {
  name: "${escapeHtml(name)}",
  email: "${escapeHtml(email)}",
  message: "${escapeHtml(message)}",
  date: "${escapeHtml(currentDate)}"
};

button.addEventListener('click', () => {
  form.send(message);
});
`;
  return <div>
    <SyntaxHighlighter language="javascript" customStyle={customStyle} style={gruvboxDark} wrapLongLines
                       showLineNumbers>
      {text}
    </SyntaxHighlighter>
  </div>
}