import SectionTitle from './section-title';
import addImage from '../assets/icons/image.svg';
import addImageLight from '../assets/icons/image-light.svg';
import dropImage from '../assets/icons/image-drop.svg';
import dropImageLight from '../assets/icons/image-drop-light.svg';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTheme } from '../context/theme';
import { toast } from 'react-toastify';
import useData from '../context/data';
const AddImage = () => {
  const { theme } = useTheme();
  const { image, setImage } = useData();
  const onDropAccepted = useCallback((acceptedFiles: any) => {
    // if (acceptedFiles[0].size > 1000000) {
    //   toast.error('File size is too large, 1Mb max');
    //   return null;
    // }

    setImage(acceptedFiles[0]);
  }, []);
  const onDropRejected = useCallback((fileRejections: any) => {
    // Do something with the files
    toast.error('Please select only one image of type jpeg or png');
  }, []);
  const handleRemove = () => {
    setImage(null);
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
    fileRejections,
  } = useDropzone({
    onDropAccepted,
    onDropRejected,
    accept: {
      'image/jpeg': ['.jpeg'],
      'image/png': ['.png'],
    },
    maxFiles: 1,
  });
  return (
    <section className="flex flex-col items-start gap-2">
      <SectionTitle
        title="Add Image"
        imgDark={addImage}
        imgLight={addImageLight}
      />
      {image ? (
        <div className="group relative text-xs w-full rounded-sm h-[128px] flex flex-col justify-center items-center border-dashed border-light-primary dark:border-dark-primary border">
          <img
            src={URL.createObjectURL(image)}
            alt="image"
            className="w-full h-full object-cover"
          />

          <div className=" transition-opacity duration-200 absolute w-full h-full flex opacity-0 justify-center items-center bg-[rgba(0,0,0,0.6)] group-hover:opacity-100 ">
            <button className="btn btn-primary" onClick={handleRemove}>
              remove{' '}
            </button>
          </div>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={` text-xs w-full rounded-sm h-[128px] flex flex-col justify-center items-center border-dashed border-light-primary dark:border-dark-primary border`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <div className="flex flex-col justify-center items-center gap-1">
              <img
                alt="dragNdrop"
                src={theme === 'dark' ? dropImage : dropImageLight}
                className="mb-4"
              />
              <p>
                Drop your image here, or{' '}
                <span className="font-bold">browse</span>
              </p>
              <p className="font-light text-light-textSecondary">
                Supports: JEPG, PNG | Max size: 1MB
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default AddImage;
