import useData from '../context/data';

const Submit = () => {
  const { sending, handleSubmit, skipRef } = useData();
  const handleClick = () => {
    skipRef.current = false;
    handleSubmit();
  };

  return (
    <div className="ml-auto">
      <button
        className="btn btn-submit disabled:cursor-not-allowed"
        onClick={handleClick}
        disabled={sending}
      >
        {sending ? 'Sending...' : 'Send'}
      </button>
    </div>
  );
};

export default Submit;
