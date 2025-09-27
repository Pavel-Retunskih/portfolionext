// @flow
import * as React from 'react';

type Props = {
  error?: string,
  handleChange: (value: string) => void,
  label: string,
  value: string,
};
export const Input = ({handleChange, value, error, label}: Props) => {
  return (
      <div className={'flex flex-wrap flex-col gap-1 w-full'}>
        {label && <label htmlFor={label} className={'text-secondary-grey'}>{label}</label>}
        <input type="text" id={label} name={label}
               className={'pl-3.5 py-2.5 px-3.5 autofill:bg-primary-blue border border-lines' +
                   ' focus:outline-none focus:border-secondary-grey rounded-md bg-primary-blue'}
               value={value} onChange={(e) => handleChange(e.target.value)}/>
        {error && <span className={'text-red-500 text-xs text-center'}>{error}</span>}
      </div>
  );
};