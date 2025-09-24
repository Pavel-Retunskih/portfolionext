// @flow
import * as React from 'react';
import {useEffect, useState} from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {gruvboxDark} from "react-syntax-highlighter/dist/esm/styles/hljs";

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
  return <div>
    <SyntaxHighlighter language="javascript" customStyle={customStyle} style={gruvboxDark} wrapLongLines
                       showLineNumbers>
      {text}
    </SyntaxHighlighter>
  </div>
}