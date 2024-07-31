import { useState } from 'react';
import Form from './Form';
import DisplayCV from './DisplayCV';
import '../styles/CVForm.css';

const CVForm = () => {
  const initialInfo = {
    generalInfo: null,
    education: [],
    experience: []
  };

  const [info, setInfo] = useState(initialInfo);

  const addEducation = (education) => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      education
    }));
  };

  const removeEducation = (index) => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      education: prevInfo.education.filter((_, i) => i !== index)
    }));
  };

  const addExperience = (experience) => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      experience
    }));
  };

  const removeExperience = (index) => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      experience: prevInfo.experience.filter((_, i) => i !== index)
    }));
  };

  const clearResume = () => {
    setInfo(initialInfo);
  };

  return (
    <div className='cvForm'>
      <div className='Form'>
        <Form 
          onSaveGeneralInfo={(info) => setInfo((prevInfo) => ({ ...prevInfo, generalInfo: info }))}
          onSaveEducation={addEducation}
          onSaveExperience={addExperience}
          onDeleteEducation={removeEducation}
          onDeleteExperience={removeExperience}
        />
        <button onClick={clearResume}>Clear Resume</button>
      </div>
      <div className='DisplayCV'>
        <DisplayCV 
          generalInfo={info.generalInfo} 
          education={info.education} 
          experience={info.experience}
        />
      </div>
    </div>
  );
};

export default CVForm;
