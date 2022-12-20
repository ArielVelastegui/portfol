import { useEffect, useState } from "react";
import "./App.css";
import Cv from "./components/Cv";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skill from "./components/Skill";

function App() {
  const [change, setChange] = useState(false);
  const [show, setShow] = useState(false);
  const [hack, setHack] = useState(false);
  const [nav, setNav] = useState(false)

  const languages = ['Html 5','CSS','JavaScript','React','Git']
  const logos = ['images/html.png','images/css.png','images/javaScript.png','images/React.png','images/git.png']
  const skill = ['English (Fluent)','Spanish (Native)']
  
  const changeBg=()=> {
    window.scrollY?setNav(true):false
  }

  useEffect(() => {
    changeBg
  }, [nav])
  

  return (
    <div className={change ? "dark" : "App"}>
      <header>
        <nav className={`${change ? "navie_dark" : "navie"}${nav?' active':''}`}>
          <button
            ClassName={show ? "hidden" : ""}
            onClick={() => setChange(!change)}
          >
            <input id="tooggle" class="tooggle" type="checkbox" />
            <div class="background"></div>
          </button>

          <Navbar change={change} show={show} hack={hack} />
        </nav>
      </header>
      <main>
        <section>
        <img className="img" src="images/FOTO.jpg" alt="" />
        <h1 className="name">
          Ariel <br />{" "}
          <span className={change ? "darkie_span" : ""}>Velastegui</span>{" "}
        </h1>
        
        <Cv change={change}/>
        </section>
        <section id="skills" >
        <ul className="s-networks">
          <a href="https://www.linkedin.com/in/ariel-velastegui-morales-424212256/" target='_blank'>
          <li className="light-sn"><svg class="svg1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_59_1250)">
                <path d="M5.74446 21H1.39071V6.9795H5.74446V21ZM3.56496 5.067C2.17296 5.067 1.04346 3.9135 1.04346 2.5215C1.04346 1.85276 1.30911 1.2114 1.78199 0.73853C2.25486 0.265657 2.89621 0 3.56496 0C4.2337 0 4.87505 0.265657 5.34793 0.73853C5.8208 1.2114 6.08646 1.85276 6.08646 2.5215C6.08646 3.9135 4.95696 5.067 3.56496 5.067ZM22.039 21H17.695V14.175C17.695 12.5482 17.662 10.4625 15.4315 10.4625C13.168 10.4625 12.8207 12.2295 12.8207 14.058V21H8.47146V6.9795H12.6467V8.892H12.7075C13.2887 7.79025 14.7085 6.62775 16.8265 6.62775C21.2327 6.62775 22.0427 9.5295 22.0427 13.2983V21H22.039Z" fill="#242635"/>
            </g>
            <defs>
                <clipPath id="clip0_59_1250">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>
        </li>
        </a>
        </ul>
          <h2>My Skills</h2>
          <span className="skill">
            <Skill lang={languages} logos={logos} title='Programming' />
          <Skill lang={skill} title='Languages'/>  
          </span>
            
        </section>
          <h2>Projects</h2>
        <section id="projects" className="projects">
          <Projects change={change} title='Poke Api' image='/images/pokeApi.png' description='Shows all pokemon or apply filters, responsive design (Api, Redux, Router-Dom, Protected routes)' linkGit='https://github.com/ArielVelastegui/entregable5' linkNet='https://app.netlify.com/sites/poke-api-aca/overview' />
          <Projects change={change} title='Rick and Morty locations' image='/images/rickandmorty.png' description='Shows random locations of the show and info of all the residents (Api, props, customHooks) ' linkGit='https://github.com/ArielVelastegui/entregable-3' linkNet='https://entregable-3-aca.netlify.app/' />
          <Projects change={change} title='Users generator Api' image='/images/usersApi.png' description='Interacting directly with and Api Creating Reading Updating Deleting  ' linkGit='https://github.com/ArielVelastegui/UsersApi' linkNet='https://users-generator-api.netlify.app/' />
          <Projects change={change} title='Random Quotes' image='/images/randomQuote.png' description='A random quote generator that also changes background color and text color' linkGit='https://github.com/ArielVelastegui/entregable1' linkNet='https://random-quote-1a.netlify.app/' />
          <Projects change={change} title='Weather App' image='/images/weatherApp.png' description='Shows the weather in your current location and changes background color if celsius are above or below 17 (Api and props)' linkGit='https://github.com/ArielVelastegui/entregable2' linkNet='https://weather-app-2a.netlify.app/' />
        </section>
          <h2>Contact</h2>
        <section id="contacts" className="cont_container">
          
          <article className="contacts">
          <svg className="cont" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"/></svg>
          <span className="cont_p">
            <p>velastegui.ariel@gmail.com</p>
          </span>
          
          </article>
          <article className="contacts">
          <svg className="cont" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"/><path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"/></svg>
          <span className="cont_p">
            <p>+593 098 066 8149</p>
          </span>
          

          </article>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
