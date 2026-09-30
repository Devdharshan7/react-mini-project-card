const { useState } = React;

// Card component receiving prop 'title' and using useState for like/unlike state
function Card({ title }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <div className={`card ${liked ? 'is-liked' : ''}`}>
      <h3 className="card-title">{title}</h3>

      {/* Dynamic Liked / Not liked label */}
      <span className={`status-badge ${liked ? 'liked' : 'unliked'}`}>
        {liked ? 'Liked' : 'Not liked'}
      </span>

      {/* Button handling state toggle */}
      <button 
        className={`btn-like ${liked ? 'liked' : ''}`} 
        onClick={toggleLike}
      >
        {liked ? 'Unlike' : 'Like'}
      </button>
    </div>
  );
}

// Parent App component passing different titles via props
function App() {
  const cardTitles = [
    'Component Architecture',
    'React Hooks & State',
    'Passing Props in React',
    'Single Page Applications'
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>React Mini Project</h1>
        <p>Card Component with Props and useState Hook</p>
      </header>

      <div className="card-grid">
        {cardTitles.map((title, index) => (
          <Card key={index} title={title} />
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);