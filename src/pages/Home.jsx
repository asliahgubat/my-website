import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="page home-page">
      <h1 className="home-title">Welcome to My Website!</h1>
      <p>This is a multi-page web application I've built using ReactJS and Vite in JavaScript.</p>
      <Link to="/contact" className="cta-button">
        Share your thoughts!
      </Link>
    </div>
  );
}

export default Home;