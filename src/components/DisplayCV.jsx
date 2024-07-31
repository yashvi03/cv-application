import "../styles/DisplayCV.css";

const DisplayCV = ({ generalInfo, education, experience }) => {
  return (
    <div className="display">
      <div className="header">
        {generalInfo && (
          <div>
            <h2>{generalInfo.name}</h2>
            <div className="personalInfo">
              <p className="personalDetails">
                <span className="material-symbols-outlined">call</span>{" "}
                {generalInfo.phone}
              </p>
              <p className="personalDetails">
                <span className="material-symbols-outlined">mail</span>
                {generalInfo.email}
              </p>
              <p className="personalDetails">
                <span className="material-symbols-outlined">location_on</span>{" "}
                {generalInfo.location}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="body">
        {education.length > 0 && (
          <div className="education-section">
            <h3>Education</h3>
            <hr />
            {education.map((edu, index) => (
              <div className="sec" key={index}>
                <div className="left">
                  <p className="fieldName">{edu.schoolName}</p>
                  <em>
                    {edu.degree} - {edu.marks}
                  </em>
                </div>
                <p className="fieldDate">
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
            ))}
          </div>
        )}

        {experience.length > 0 && (
          <div className="experience-section">
            <h3>Experience</h3>
            <hr />
            {experience.map((exp, index) => (
              <div key={index}>
                <div className="sec">
                  <div className="left">
                    <p className="fieldName">{exp.companyName}</p>
                    <em>{exp.positionTitle}</em>
                    <p>{exp.mainResponsibilities}</p>
                  </div>

                  <p className="fieldDate">
                    {exp.dateFrom}-{exp.dateUntil}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayCV;
