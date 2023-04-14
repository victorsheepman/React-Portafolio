import { Contact } from './components/Contact/Contact'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Project } from './components/Project/Project'
import { projects } from './helpers/dataMock'
import './main.scss'
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <section className="proyects" id="proyects">
        <h2>Projects</h2>
        {
          projects.map(project=>(
            <Project img={project.img} title={project.title} stack={project.stack} github={project.github} web={project.web} />
          ))
        }
      </section>
      <Contact />
    </div>
  )
}

export default App
