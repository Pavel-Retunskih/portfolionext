type Props = {
  id: string;
  label: string;
  value: string;
  handleChange: (value: string) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
};
export const TextArea = ({id, handleChange, value, error, label, required, placeholder}: Props) => {
  return (
      <div className={'flex flex-col gap-1 w-full'}>
        {label && <label htmlFor={id} className={'text-secondary-grey'}>{label}</label>}
        <textarea id={id} name={id}
                  required={required}
                  placeholder={placeholder}
                  aria-invalid={!!error}
                  aria-describedby={error ? `${id}-error` : undefined}
                  className={'pl-3.5 resize-none h-[145px]  autofill:bg-primary-blue  border' +
                      ' border-lines' +
                      ' focus:outline-none focus:border-secondary-grey rounded-md bg-primary-blue'}
                  value={value} onChange={(e) => handleChange(e.target.value)}/>
        {error && <span id={`${id}-error`} className={'text-red-500 text-xs text-center'} aria-live="polite">{error}</span>}
      </div>
  );
};
