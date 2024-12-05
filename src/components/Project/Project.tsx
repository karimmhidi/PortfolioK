import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";
import pfe2022 from "../../assets/pfe2022.png"
import pfe2023 from "../../assets/pfe2024.png"

export function Project() {
  return (
    <Container id="project">
      <h2>Mes projets</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                
                <a href="https://www.kaggle.com/code/karimmhidi1111/analyse-de-l-emploi-en-tunisie" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Analyse de l'emploi en tuinsie</h3>
              <img
        src="https://media.licdn.com/dms/image/D4D12AQF7bb02gCVx4g/article-cover_image-shrink_600_2000/0/1712916116635?e=2147483647&v=beta&t=nGLUXJXTjRFUx02h2qrl1SRpijQtbBkL_pH-PW2JQwc" // Remplacez par l'URL ou le chemin de votre image
        alt="Analyse des ventes"
        style={{
          width: "80%",
          height: "auto",
          borderRadius: "8px",
          margin: "15px auto", // Centre horizontalement
          display: "block", // Nécessaire pour que margin auto fonctionne
        }}      />
              <p> Ce projet vise à explorer et analyser la répartition de la population active en Tunisie selon les différents secteurs d'activité. À l'aide de méthodes de partitionnement et de visualisation des données, il met en évidence les tendances clés, les secteurs les plus représentatifs et les déséquilibres éventuels dans le marché de l'emploi. </p>
            </div>
            <footer> <ul className="tech-list"> <li>Pandas</li> <li>Matplotlib</li> <li>Pyhton </li>  <li>Jupyter Notebook </li></ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
             
                <a href="https://www.kaggle.com/code/karimmhidi1111/analyse-des-ventes-de-produits-lectroniques" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Analyse des ventes de produits électroniques              </h3>
              <img
        src="data:image/jpeg;base64,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" // Remplacez par l'URL ou le chemin de votre image
        alt="Analyse des ventes"
        style={{
          width: "80%",
          height: "auto",
          borderRadius: "8px",
          margin: "15px auto", // Centre horizontalement
          display: "block", // Nécessaire pour que margin auto fonctionne
        }}      />
              <p>
              Ce projet se concentre sur l’analyse des ventes de produits électroniques en explorant plusieurs dimensions, telles que les catégories de produits, les régions géographiques, les périodes de l’année, et les préférences des clients. L'objectif est de fournir des insights clés pour optimiser les stratégies de vente et identifier les tendances du marché.
</p>
            </div>
            <footer>
              <ul className="tech-list">
              <li>Python</li>
  <li>Pandas</li>
  <li>Matplotlib</li>
  <li>Seaborn</li>
  <li>Jupyter Notebook</li>
  <li>Scikit-learn</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
            
                <a href="https://www.kaggle.com/code/karimmhidi1111/mod-lisation-du-churn" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Modélisation du Churn : Prédire le départ d'un client d'une banque
              </h3>
              <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWWKThrxQwUqcQ1iQgXKDTUPa1m1fmJO_CCw&s" // Remplacez par l'URL ou le chemin de votre image
        alt="Analyse des ventes"
        style={{
          width: "80%",
          height: "auto",
          borderRadius: "8px",
          margin: "15px auto", // Centre horizontalement
          display: "block", // Nécessaire pour que margin auto fonctionne
        }}      />
              <p>
              Ce projet se concentre sur la prédiction des clients susceptibles de quitter une banque. Grâce à une analyse de données et à des algorithmes de machine learning, le modèle vise à détecter les comportements à risque et à fournir des insights pour améliorer la fidélisation des clients.</p>
            </div>
            <footer>
              <ul className="tech-list">
              <li>Python</li>
  <li>Pandas</li>
  <li>Scikit-learn</li>
  <li>TensorFlow</li>
  <li>Matplotlib</li>
  <li>Seaborn</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
               
                <a href="https://www.kaggle.com/code/karimmhidi1111/analyse-avanc-e-avec-pyspark" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Analyse avancée avec PySpark </h3>
              <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS_QcRAbyCpw-bWvnJld7WS4lwLzNC03oKbQ&s" // Remplacez par l'URL ou le chemin de votre image
        alt="Analyse des ventes"
        style={{
          width: "80%",
          height: "auto",
          borderRadius: "8px",
          margin: "15px auto", // Centre horizontalement
          display: "block", // Nécessaire pour que margin auto fonctionne
        }}      />
              <p>PySpark, une interface Python pour Apache Spark, est utilisée pour l’analyse de données volumineuses. Ce projet se concentre sur une analyse avancée de données en utilisant PySpark, qui permet de manipuler, nettoyer, et analyser de larges volumes de données de manière distribuée.</p>
            </div>
            <footer>
              <ul className="tech-list">
              <li>PySpark</li>
  <li>Apache Spark</li>
  <li>Hadoop</li>

              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
              
                <a href="https://1drv.ms/x/c/243B139E1C9052CA/EdZpHHrB-K5EpcBOUgjMJI4BFK7cviuDabwN-m4J6ASoBA?e=vvWs7i" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Gestion Commerciale avec Excel Avancé</h3>
              <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGpY4c3zWgqDyO3CzKRSLBPaUj0ce68H7vEQ&s" // Remplacez par l'URL ou le chemin de votre image
        alt="Analyse des ventes"
        style={{
          width: "80%",
          height: "auto",
          borderRadius: "8px",
          margin: "15px auto", // Centre horizontalement
          display: "block", // Nécessaire pour que margin auto fonctionne
        }}      />
              <p>Ce projet consiste à utiliser les fonctionnalités avancées d’Excel pour gérer et analyser les données commerciales d’une entreprise. Il intègre le traitement des données, la création de tableaux croisés dynamiques, et le développement de tableaux de bord interactifs pour une meilleure prise de décision.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Excel</li>
                <li>Visualization</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://1drv.ms/f/c/243B139E1C9052CA/EjhoIdNxpS1CkGVMDTaxCnABfyHjnyv5coEu1nHu3w_AAg" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Suivi et Analyse de la Pandémie de Coronavirus avec Power BI</h3>
              <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqBtPImxXXJv7YgsBT4wByZf3M2ILpdyTxjA&s" // Remplacez par l'URL ou le chemin de votre image
        alt="Analyse des ventes"
        style={{
          width: "80%",
          height: "auto",
          borderRadius: "8px",
          margin: "15px auto", // Centre horizontalement
          display: "block", // Nécessaire pour que margin auto fonctionne
        }}      />
              <p>
              Ce projet consiste à créer un tableau de bord interactif dans Power BI pour analyser les données relatives à la pandémie de coronavirus (COVID-19). Il permet de visualiser l'évolution des cas, des décès, et des récupérations à travers le monde ou dans des régions spécifiques.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Power bi</li>
                <li>Data preprocessing</li>
                <li>Data Transformation</li>
                <li>Visualization</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        
      </div>
      <h2>Les projets PFE</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                
                <a href="https://github.com/SiwarZaghmi/GitHub_Analytics" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Analyse de l'avancement des projets a travers le tableau kanban </h3>
              <img
        src={pfe2022} // Remplacez par l'URL ou le chemin de votre image
        alt="Analyse des ventes"
        style={{
          width: "80%",
          height: "auto",
          borderRadius: "8px",
          margin: "15px auto", // Centre horizontalement
          display: "block", // Nécessaire pour que margin auto fonctionne
        }}      />
              <p>Développement d’une solution pour récupérer les données d’un tableau Kanban GitHub via des webhooks et API, les traiter avec Python, les stocker dans une base MongoDB et les analyser à travers un tableau de bord interactif développé avec Angular et Chart.js.



Fonctionnalités

Récupération et préparation des données.
Stockage dans MongoDB.
Visualisation de l’avancement des projets et de la contribution des employés.
</p>
            </div>
            <footer> <ul className="tech-list">   <li>Python</li>
  <li>MongoDB</li>
  <li>Angular</li>
  <li>Chart.js</li>
  <li>Webhooks</li>
  <li>API GitHub</li></ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                
                <a href="https://github.com/karimmhidi/pyhtonapp" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Platforme de matching cv  </h3>
              <img
        src={pfe2023} // Remplacez par l'URL ou le chemin de votre image
        alt="Analyse des ventes"
        style={{
          width: "80%",
          height: "auto",
          borderRadius: "8px",
          margin: "15px auto", // Centre horizontalement
          display: "block", // Nécessaire pour que margin auto fonctionne
        }}      />
              <p>
              Mon projet de fin d’études consiste en la création d’une plateforme innovante de matching de CVs et d’offres d’emploi, exploitant les techniques de traitement automatique du langage naturel (NLP) pour générer des scores de correspondance précis entre les compétences des candidats et les exigences des postes. La solution repose sur un système de stockage centralisé assurant la gestion efficace des données des utilisateurs. Le projet intègre une architecture complète avec un front-end développé en Angular et un back-end basé sur Django REST Framework, offrant une expérience utilisateur fluide et performante. Réalisé en collaboration avec un contributeur, ce projet vise à simplifier et optimiser le processus de recrutement pour les entreprises.</p>
            </div>
            <footer>
              <ul className="tech-list">
  <li>#Angular Django </li>
  <li>NOSQL</li>
  <li>#NLP</li>
  <li>#Word2Vec</li>
 
  
</ul>
            </footer>
          </div>
        </ScrollAnimation>
        </div>
    </Container>
  );
}