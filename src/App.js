import './App.css';
import { Project } from '../src/Components/Project';
import data from '../src/Components/data/skills.json';


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

          <p><span>Hello friend.</span> I'm Darrell, a full Stack JavaScript and Microsoft Power BI platform developer. Thank you for being here and please take a look at my work below.</p>
        </div>

      </section>

      <section id='projects'>
        {data.map((p, i) => (
          <Project key={i} title={p.title} imageUrl={`${process.env.PUBLIC_URL}/assets/${p.image}`} skills={p.tools} link={p.link} />
        ))}
      </section>
      <footer className='footer'>
        <div className='level'>
          <figure className="level-left image is-48x48">
            <img className="level-item is-rounded" src={`${process.env.PUBLIC_URL}assets/headshot.jpg`} alt='Darrell' />
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
