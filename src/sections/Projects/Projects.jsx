import styles from './ProjectsStyles.module.css';
import fancontent from '../../assets/fancontent.png';
import polloloko from '../../assets/polloloko.png';
import steambot from '../../assets/steambot.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Proyectos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={fancontent}
          link="https://www.fan-content.com/  "
          h3="Fan Content"
          p="Organizacion de eventos"
        />
        <ProjectCard
          src={polloloko}
          link="https://github.com/grosalestintaya/company-landing-page-2"
          h3="Pollo_Loko"
          p="Polleria Restaurant"
        />
        <ProjectCard
          src={steambot}
          link="https://github.com/grosalestintaya/company-landing-page-2"
          h3="Steam Bot"
          p="Bot de tradeo steam"
        />
  
      </div>
    </section>
  );
}

export default Projects;
