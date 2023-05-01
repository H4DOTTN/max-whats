import { useCallback, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';
import AddFile from '../assets/icons/addFile.svg';
import AddFileLight from '../assets/icons/addFileLight.svg';
import useData from '../context/data';
import { useTheme } from '../context/theme';
import SectionTitle from './section-title';
const UploadFile = () => {
  const { setFile, file } = useData();
  const onDropAccepted = useCallback((acceptedFiles: any) => {
    // Do something with the files
    setFile(acceptedFiles[0]);
  }, []);
  const onDropRejected = useCallback((fileRejections: any) => {
    // Do something with the files
    toast.error('please select only one file of type CSV');
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
    fileRejections,
  } = useDropzone({
    onDropAccepted,
    onDropRejected,
    accept: { 'text/csv': ['.csv'] },
    maxFiles: 1,
  });

  return (
    <section className="flex flex-col items-start gap-2">
      <SectionTitle
        title="Upload file"
        imgDark={AddFile}
        imgLight={AddFileLight}
      />
      <div
        {...getRootProps()}
        className={`w-full text-xs transition-background duration-300 bg-light-secondary dark:bg-dark-secondary  flex flex-row justify-between items-center px-4 py-2`}
      >
        <input {...getInputProps()} />

        <>
          <label htmlFor="file-upload">
            {file ? (
              <span>{file.name}</span>
            ) : (
              <>
                Please import your file <span>*CSV Only</span>
              </>
            )}
          </label>
          <button className="btn btn-primary">Browse</button>
        </>
      </div>
    </section>
  );
};

export default UploadFile;
