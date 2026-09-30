const { useState } = React;

// Skill Item Component with useState for endorsement increments
function SkillItem({ name, initialEndorsements }) {
  const [endorsements, setEndorsements] = useState(initialEndorsements);

  const handleEndorse = () => {
    setEndorsements((prev) => prev + 1);
  };

  return (
    <div className="skill-item">
      <span className="skill-name">{name}</span>
      <button className="endorse-btn" onClick={handleEndorse}>
        + {endorsements}
      </button>
    </div>
  );
}

// Collapsible Bio Component using useState
function BioSection({ fullText }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleBio = () => {
    setIsExpanded((prev) => !prev);
  };

  const truncatedText = fullText.slice(0, 62) + "...";

  return (
    <div className="bio-box">
      <p>{isExpanded ? fullText : truncatedText}</p>
      <button className="bio-toggle-btn" onClick={toggleBio}>
        {isExpanded ? "Show Less ▲" : "Read Full Bio ▼"}
      </button>
    </div>
  );
}

// Main App Component for Devdharshan S
function App() {
  const initialSkills = [
    { id: 1, name: "React.js", count: 12 },
    { id: 2, name: "JavaScript", count: 18 },
    { id: 3, name: "CSS3 / HTML5", count: 10 }
  ];

  const fullBio =
    "Frontend developer building modular, high-performance web interfaces and modern interactive React components.";

  return (
    <div className="profile-card">
      {/* Avatar Initials */}
      <div className="avatar">DS</div>

      {/* Profile Header */}
      <div className="user-info">
        <h1 className="user-name">DEVDHARSHAN S</h1>
        <p className="user-title">Frontend & React Developer</p>
        <p className="user-location">📍 Tamil Nadu, India</p>
      </div>

      {/* Expandable Bio */}
      <BioSection fullText={fullBio} />

      {/* Skill Endorsements */}
      <div className="skills-section">
        <span className="section-label">Endorse Skills (useState)</span>
        <div className="skills-list">
          {initialSkills.map((skill) => (
            <SkillItem
              key={skill.id}
              name={skill.name}
              initialEndorsements={skill.count}
            />
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="btn-connect">Connect With Me</button>
        <button className="btn-share">Share</button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);