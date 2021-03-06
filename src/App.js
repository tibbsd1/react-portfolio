import './App.css';
import { Project } from './Components/Project';

function App() {
  return (
    <div className="App">
      <section class="hero is-fullheight" style={{ backgroundColor: "#101010" }}>
        <div class="hero-body container">
          <div class="box title-box">
            <p class="title is-spaced dt-title">
              Darrell Tibbs
            </p>
            <p class="subtitle dt-subtitle">
              JavaScript Developer
            </p>
          </div>
        </div>
      </section>
      <section>

        <div class="bio container" style={{ maxWidth: "750px" }}>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis modi, explicabo,
            exercitationem officiis minima id tempore repellat, quae saepe non cumque veritatis tenetur vel illo quod odio
            iste reiciendis itaque?</p>
        </div>

      </section>

      <Project title="Web App #1"/>
      <Project title="Web App #2"/>
      <Project title="Web App #3"/>
      <Project title="Web App #4"/>
      <Project title="Web App #5"/>

    </div>
  );
}

export default App;
