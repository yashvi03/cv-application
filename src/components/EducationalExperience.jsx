import React from "react";
import "../styles/EducationalExperience.css";

const EducationalExperience = ({
  currentEducation,
  setCurrentEducation,
  onSave,
  isVisible,
  toggleVisibility,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEducation({ ...currentEducation, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(currentEducation);
    setCurrentEducation({
      id: "",
      schoolName: "",
      degree: "",
      startDate: "",
      endDate: "",
      marks: "",
    });
  };

  return (
    <div className="education-section">
      <h3 className="edu-heading">
        <div className="icon">
          <span className="material-symbols-outlined">school</span>
          Education
        </div>
        <button onClick={toggleVisibility} className="toggle-button">
          <span className="material-symbols-outlined">
            {isVisible ? "expand_less" : "expand_more"}
          </span>
        </button>
      </h3>
      {isVisible && (
        <form className="education" onSubmit={handleSubmit}>
          <input
            type="text"
            name="schoolName"
            value={currentEducation.schoolName}
            onChange={handleChange}
            placeholder="School/College Name"
          />
          <input
            type="text"
            name="degree"
            value={currentEducation.degree}
            onChange={handleChange}
            placeholder="Field of Study"
          />
          <div className="date">
            <input
              type="text"
              name="startDate"
              value={currentEducation.startDate}
              onChange={handleChange}
              placeholder="Start Date"
            />
            <input
              type="text"
              name="endDate"
              value={currentEducation.endDate}
              onChange={handleChange}
              placeholder="End Date"
            />
          </div>
          <input
            type="text"
            name="marks"
            value={currentEducation.marks}
            onChange={handleChange}
            placeholder="CGPA/Percentage"
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default EducationalExperience;
