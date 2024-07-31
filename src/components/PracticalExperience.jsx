import React from "react";
import "../styles/PracticalExperience.css";

const PracticalExperience = ({ currentExperience, setCurrentExperience, onSave, isVisible, toggleVisibility }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentExperience({ ...currentExperience, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(currentExperience);
    setCurrentExperience({
      id: "",
      companyName: "",
      positionTitle: "",
      mainResponsibilities: "",
      dateFrom: "",
      dateUntil: "",
    });
  };

  return (
    <div className="experience-section">
      <h3 className="exp-heading">
        <div className="icon">
        <span className="material-symbols-outlined">work</span>
        Experience
        </div>
        <button onClick={toggleVisibility} className="toggle-button">
          <span className="material-symbols-outlined">
            {isVisible ? "expand_less" : "expand_more"}
          </span>
        </button>
      </h3>
      {isVisible && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="companyName"
            value={currentExperience.companyName}
            onChange={handleChange}
            placeholder="Company Name"
          />
          <input
            type="text"
            name="positionTitle"
            value={currentExperience.positionTitle}
            onChange={handleChange}
            placeholder="Position Title"
          />
          <textarea
            name="mainResponsibilities"
            value={currentExperience.mainResponsibilities}
            onChange={handleChange}
            placeholder="Main Responsibilities"
          ></textarea>
          <div className="date">
            <input
              type="text"
              name="dateFrom"
              value={currentExperience.dateFrom}
              onChange={handleChange}
              placeholder="Start Date"
            />
            <input
              type="text"
              name="dateUntil"
              value={currentExperience.dateUntil}
              onChange={handleChange}
              placeholder="End Date"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default PracticalExperience;
