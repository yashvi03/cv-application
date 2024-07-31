import { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import EducationalExperience from './EducationalExperience';
import PracticalExperience from './PracticalExperience';
import "../styles/Form.css";

const Form = ({
  onSaveGeneralInfo,
  onSaveEducation,
  onSaveExperience,
  onDeleteEducation,
  onDeleteExperience,
}) => {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });
  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);
  const [currentEducation, setCurrentEducation] = useState({
    id: "",
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: "",
    marks: "",
  });
  const [currentExperience, setCurrentExperience] = useState({
    id: "",
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    dateFrom: "",
    dateUntil: "",
  });

  const [isEducationVisible, setIsEducationVisible] = useState(true);
  const [isExperienceVisible, setIsExperienceVisible] = useState(true);

  const handleSaveGeneralInfo = (info) => {
    setGeneralInfo(info);
    onSaveGeneralInfo(info);
  };

  const handleSaveEducation = (edu) => {
    let updatedList;
    if (currentEducation.id) {
      updatedList = educationList.map((item) =>
        item.id === edu.id ? edu : item
      );
    } else {
      updatedList = [...educationList, { ...edu, id: Date.now().toString() }];
    }
    setEducationList(updatedList);
    onSaveEducation(updatedList);
    setCurrentEducation({
      id: "",
      schoolName: "",
      degree: "",
      startDate: "",
      endDate: "",
      marks: "",
    });
  };

  const handleSaveExperience = (exp) => {
    let updatedList;
    if (currentExperience.id) {
      updatedList = experienceList.map((item) =>
        item.id === exp.id ? exp : item
      );
    } else {
      updatedList = [...experienceList, { ...exp, id: Date.now().toString() }];
    }
    setExperienceList(updatedList);
    onSaveExperience(updatedList);
    setCurrentExperience({
      id: "",
      companyName: "",
      positionTitle: "",
      mainResponsibilities: "",
      dateFrom: "",
      dateUntil: "",
    });
  };

  const handleDeleteEducation = (index) => {
    const updatedList = educationList.filter((_, i) => i !== index);
    setEducationList(updatedList);
    onDeleteEducation(index);
  };

  const handleDeleteExperience = (index) => {
    const updatedList = experienceList.filter((_, i) => i !== index);
    setExperienceList(updatedList);
    onDeleteExperience(index);
  };

  const handleEditEducationClick = (id) => {
    const selectedEducation = educationList.find((edu) => edu.id === id);
    setCurrentEducation(selectedEducation);
  };

  const handleEditExperienceClick = (id) => {
    const selectedExperience = experienceList.find((exp) => exp.id === id);
    setCurrentExperience(selectedExperience);
  };

  const toggleEducationVisibility = () => {
    setIsEducationVisible(!isEducationVisible);
  };

  const toggleExperienceVisibility = () => {
    setIsExperienceVisible(!isExperienceVisible);
  };

  return (
    <div className="form-container">
      <GeneralInfo onSave={handleSaveGeneralInfo} />

      <EducationalExperience
        currentEducation={currentEducation}
        setCurrentEducation={setCurrentEducation}
        onSave={handleSaveEducation}
        isVisible={isEducationVisible}
        toggleVisibility={toggleEducationVisibility}
      />
      <ul>
        {educationList.map((edu, index) => (
          <li className="list" key={edu.id}>
            <div onClick={() => handleEditEducationClick(edu.id)}>
              {edu.schoolName}
            </div>
            <button
              className="delete"
              onClick={() => handleDeleteEducation(index)}
            >
              <span className="material-symbols-outlined">delete</span>
            </button>
          </li>
        ))}
      </ul>

      <PracticalExperience
        currentExperience={currentExperience}
        setCurrentExperience={setCurrentExperience}
        onSave={handleSaveExperience}
        isVisible={isExperienceVisible}
        toggleVisibility={toggleExperienceVisibility}
      />
      <ul>
        {experienceList.map((exp, index) => (
          <li className="list" key={exp.id}>
            <div onClick={() => handleEditExperienceClick(exp.id)}>
              {exp.companyName}
            </div>
            <button
              className="delete"
              onClick={() => handleDeleteExperience(index)}
            >
              <span className="material-symbols-outlined">delete</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="buttons">
      </div>
    </div>
  );
};

export default Form;
