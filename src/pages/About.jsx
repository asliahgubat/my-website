import './About.css';

function About() {
  const skills = ['React.js', 'JavaScript', 'Responsive & Transition Design', 'Vite & React Router'];

  return (
    <div className="page about-page">
      <h1>About Us</h1>
      <p>We build modern web applications with a focus on user experience and performance.</p>
      <h2>Our Core Skills:</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default About;