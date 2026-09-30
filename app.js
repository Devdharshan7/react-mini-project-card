const { useState } = React;

function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [isConnected, setIsConnected] = useState(false);
  const [isBioExpanded, setIsBioExpanded] = useState(false);
  
  const [skills, setSkills] = useState([
    { id: 1, name: "React.js SPA Architecture", endorsements: 14 },
    { id: 2, name: "JavaScript (ES6+)", endorsements: 20 },
    { id: 3, name: "CSS Grid & Flexbox Layouts", endorsements: 11 }
  ]);

  const handleEndorse = (id) => {
    setSkills((prevSkills) =>
      prevSkills.map((skill) =>
        skill.id === id
          ? { ...skill, endorsements: skill.endorsements + 1 }
          : skill
      )
    );
  };

  const shortBio = "Frontend developer focused on building scalable, component-driven web applications with React.";
  const fullBio = "Frontend developer focused on building scalable, component-driven web applications with React. Experienced in structuring clean Single Page Applications, managing local UI state, and producing fully responsive user interfaces using pure CSS without heavy build toolchains.";

  return (
    <div className="profile-deck">
      {/* Left Sidebar Panel */}
      <div className="profile-sidebar">
        <div>
          <div className="avatar-initials">DS</div>
          <div className="sidebar-info">
            <h1>DEVDHARSHAN S</h1>
            <p className="role">Frontend & React Developer</p>
            <p className="location">📍 Tamil Nadu, India</p>
            <div className="status-indicator">
              <span className="dot"></span> Available for projects
            </div>
          </div>
        </div>

        <button 
          className={`btn-connect ${isConnected ? 'active' : ''}`}
          onClick={() => setIsConnected(!isConnected)}
        >
          {isConnected ? "✓ Connected" : "+ Connect"}
        </button>
      </div>

      {/* Right Content Panel with Tabs */}
      <div className="profile-content">
        {/* Navigation Tabs */}
        <nav className="tab-navigation">
          <button 
            className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
          <button 
            className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            Skills & Endorsements
          </button>
          <button 
            className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
        </nav>

        {/* Tab Content */}
        <div className="tab-panel">
          {activeTab === 'about' && (
            <div>
              <p className="bio-paragraph">
                {isBioExpanded ? fullBio : shortBio}
              </p>
              <button 
                className="btn-text-toggle"
                onClick={() => setIsBioExpanded(!isBioExpanded)}
              >
                {isBioExpanded ? "Show Less ▲" : "Read Full Bio ▼"}
              </button>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.id} className="skill-row">
                  <span className="skill-row-title">{skill.name}</span>
                  <button 
                    className="btn-endorse"
                    onClick={() => handleEndorse(skill.id)}
                  >
                    + Endorse ({skill.endorsements})
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'projects' && (
            <div>
              <div className="project-item">
                <h4>Contact Management SPA</h4>
                <p>A modular CRUD application for managing contacts built with React state.</p>
              </div>
              <div className="project-item">
                <h4>Developer Portfolio</h4>
                <p>Minimalist responsive web portfolio hosted on GitHub Pages.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);