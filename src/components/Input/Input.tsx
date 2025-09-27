// @flow
import * as React from 'react';

type Props = {
  id: string;
  label: string;
  value: string;
  handleChange: (value: string) => void;
  error?: string;
  type?: 'text' | 'email' | 'password';
  autoComplete?: string;
  required?: boolean;
  placeholder?: string;
};
export const Input = ({
  id,
  handleChange,
  value,
  error,
  label,
  type = 'text',
  autoComplete,
  required,
  placeholder,
}: Props) => {
  return (
      <div className={'flex flex-wrap flex-col gap-1 w-full'}>
        {label && <label htmlFor={id} className={'text-secondary-grey'}>{label}</label>}
        <input
               id={id}
               name={id}
               type={type}
               autoComplete={autoComplete}
               required={required}
               placeholder={placeholder}
               aria-invalid={!!error}
               aria-describedby={error ? `${id}-error` : undefined}
               className={'pl-3.5 py-2.5 px-3.5 autofill:bg-primary-blue border border-lines' +
                   ' focus:outline-none focus:border-secondary-grey rounded-md bg-primary-blue'}
               value={value} onChange={(e) => handleChange(e.target.value)}/>
        {error && <span id={`${id}-error`} className={'text-red-500 text-xs text-center'} aria-live="polite">{error}</span>}
      </div>
  );
};
