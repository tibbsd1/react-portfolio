import './App.css';
import { Project } from './components/Project';
import data from '../src/components/data/skills.json';


function App() {

  return (
    <div className="App">
      <section className="hero is-fullheight" style={{ backgroundColor: "#101010" }}>
        <div className="hero-body container">
          <a href='#projects'>

            <div className="box title-box">
              <p className="title is-spaced dt-title">
                Darrell Tibbs
              </p>
              <p className="subtitle dt-subtitle">
                JavaScript Developer
              </p>
            </div>
          </a>

        </div>
      </section>
      <section>

        <div className="bio container" style={{ maxWidth: "750px" }}>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis modi, explicabo,
            exercitationem officiis minima id tempore repellat, quae saepe non cumque veritatis tenetur vel illo quod odio
            iste reiciendis itaque?</p>
        </div>

      </section>

      <section id='projects'>

        {data.map(p => (
          <Project title={p.title} imageUrl={`${process.env.PUBLIC_URL}/assets/${p.image}`} skills={p.tools} link={p.link} />
        ))}
      </section>
      <footer className='footer'>
        <div className='level'>
          <figure className="level-left image is-48x48">
            <img className="level-item is-rounded" src={`${process.env.PUBLIC_URL}assets/headshot.jpg`} />
            <div className='level-right'>
              <ul>
                <li>Email: tibbsd1@gmail.com</li>
                <li>Linkedin:<a href='http://linkedin.com/in/darrelltibbs' target='_blank' rel='noreferrer'> linkedin.com/in/darrelltibbs</a></li>
                <li>Github:<a href='http://github.com/tibbsd1' target='_blank' rel='noreferrer'> github.com/tibbsd1</a></li>
              </ul>
            </div>
          </figure>
        </div>
      </footer>
    </div>
  );
}

export default App;
