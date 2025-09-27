type Props = {
  error?: string,
  handleChange: (value: string) => void,
  label: string,
  value: string,
};
export const TextArea = ({handleChange, value, error, label}: Props) => {
  return (
      <div className={'flex flex-col gap-1 w-full'}>
        {label && <label htmlFor={label} className={'text-secondary-grey'}>{label}</label>}
        <textarea id={label} name={label}
                  className={'pl-3.5 resize-none h-[145px]  autofill:bg-primary-blue  border' +
                      ' border-lines' +
                      ' focus:outline-none focus:border-secondary-grey rounded-md bg-primary-blue'}
                  value={value} onChange={(e) => handleChange(e.target.value)}/>
        {error && <span className={'text-red-500 text-xs text-center'}>{error}</span>}
      </div>
  );
};