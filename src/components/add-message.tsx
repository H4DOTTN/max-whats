import SectionTitle from './section-title';
import yourMessage from '../assets/icons/your-message.svg';
import yourMessageLight from '../assets/icons/your-message-light.svg';
import useData from '../context/data';
const AddMessage = () => {
  const {message,setMessage} = useData();
  const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <section className="flex flex-col items-start gap-2">
      <SectionTitle
        title="Your Message"
        imgDark={yourMessage}
        imgLight={yourMessageLight}
      />
      <form className='w-full transition-all duration-300  text-xs bg-light-secondary dark:bg-dark-secondary  flex flex-row justify-between items-center px-4 py-2'>
        <textarea value={message} onChange={e => handleChange(e)} rows={10} className='w-full bg-transparent outline-none font-normal text-[11px] placeholder:font-light placeholder:text-[rgba(61, 59, 164, 0.41)] dark:placeholder:text-[rgba(255, 255, 255, 0.41)] ' placeholder='Write your text here...'/>
      </form>
    </section>
  );
};

export default AddMessage;
