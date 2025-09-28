// @flow
import * as React from 'react';
import {forwardRef} from "react";
import {UseFormRegisterReturn} from 'react-hook-form';

type Props = {
  id: string;
  label: string;
  // RHF usage: pass register return
  register?: UseFormRegisterReturn;
  // Controlled fallback usage
  value?: string;
  handleChange?: (value: string) => void;
  error?: string;
  type?: 'text' | 'email' | 'password';
  autoComplete?: string;
  required?: boolean;
  placeholder?: string;
};
export const Input = forwardRef<HTMLInputElement, Props>(({
                                                            label,
                                                            type,
                                                            required,
                                                            placeholder,
                                                            error,
                                                            id,
                                                            handleChange,
                                                            value,
                                                            autoComplete,
                                                            register
                                                          }, ref) => {
  const isRHF = !!register;
  return (
      <div className={'flex flex-wrap flex-col gap-1 w-full'}>
        {label && <label htmlFor={id} className={'text-secondary-grey'}>{label}</label>}
        {isRHF ? (
            <input
                id={id}
                type={type ?? 'text'}
                autoComplete={autoComplete}
                required={required}
                placeholder={placeholder}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
                className={'pl-3.5 py-2.5 px-3.5 autofill:bg-primary-blue border border-lines' +
                    ' focus:outline-none focus:border-secondary-grey rounded-md bg-primary-blue'}
                {...register}
            />
        ) : (
            <input
                ref={ref}
                id={id}
                name={id}
                type={type ?? 'text'}
                autoComplete={autoComplete}
                required={required}
                placeholder={placeholder}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
                className={'pl-3.5 py-2.5 px-3.5 autofill:bg-primary-blue border border-lines' +
                    ' focus:outline-none focus:border-secondary-grey rounded-md bg-primary-blue'}
                value={value ?? ''}
                onChange={(e) => handleChange?.(e.target.value)}
            />
        )}
        {error &&
            <span id={`${id}-error`} className={'text-red-500 text-xs text-center'} aria-live="polite">{error}</span>}
      </div>
  );
})
Input.displayName = 'Input';
Input.displayName = 'Input';
