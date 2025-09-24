type Props = {
  name: string;
  email: string;
  message: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setMessage: (message: string) => void;
  handleSubmit: () => void
}
export const ContactForm = ({setName, name, message, setMessage, setEmail, email, handleSubmit}: Props) => {


  return (
      <form className={'flex flex-col gap-8'}>
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
        <button onClick={handleSubmit}>submit-message</button>
      </form>
  );
};