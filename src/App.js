import './App.css';
import { Project } from './components/Project';
import data from '../src/components/data/skills.json';


function App() {

  return (
    <div className="App">
      <section className="hero is-fullheight" style={{ backgroundColor: "#101010" }}>
        <div className="hero-body container">
          <div className="box title-box">
            <p className="title is-spaced dt-title">
              Darrell Tibbs
            </p>
            <p className="subtitle dt-subtitle">
              JavaScript Developer
            </p>
          </div>
        </div>
      </section>
      <section>

        <div className="bio container" style={{ maxWidth: "750px" }}>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis modi, explicabo,
            exercitationem officiis minima id tempore repellat, quae saepe non cumque veritatis tenetur vel illo quod odio
            iste reiciendis itaque?</p>
        </div>

      </section>

      {data && data.map(p => (
        <Project title={p.title} imageUrl={`${process.env.PUBLIC_URL}/assets/${p.image}`} skills={p.tools} link={p.link} />
      ))}
    </div>
  );
}

export default App;
