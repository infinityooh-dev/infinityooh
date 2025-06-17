import { cn } from '@/lib/utils';

interface FormMessageProps {
  result: {
    status: string;
    message: string;
  };
  className?: string;
}

const FormMessage: React.FC<FormMessageProps> = ({ result, className }) => {
  const { status, message } = result;

  if (status == "" || !status){
    return;
  }

  const errorMessages = message.split('; ')
  const errorHeading = errorMessages.length > 1 ? "There were errors with your submission:" : "There was an error with your submission:";

  return (
    <div className={cn('pt-2 bg-white flex flex-col justify-start items-start p-4 mt-5 rounded-sm', status === '' ? 'hidden' : 'block', className)}>
      <p className='text-sm font-open-sans font-bold text-black'>
         { status === "error" && errorHeading }
      </p>
      {status === 'success' ? (
        <p className="text-green-700 fs-sm">{message}</p>
      ) : (
        <ul className="list-disc max-h-[60px] h-full overflow-auto hide-scrollbar">
          { errorMessages.length > 0 ?
            errorMessages.map((error, index) => (
              <li key={index} className='text-error ml-4 text-xs'>
                {error.split(': ').length > 1 ? error.split(': ')[1] : error}
              </li>
            )) : <li className='text-error ml-4 text-xs'>
              {message || 'Something went wrong. Try again later.'}
            </li>
          }
        </ul>
      )}
    </div>
  );
};

export default FormMessage;
