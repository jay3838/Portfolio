import React from "react";
import "./Projects.css";
import google from "./assets/Google.png";
import amazone from "./assets/amazone.png";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projects__container">
        <h2 className="projects__work">CHECK OUT SOME OF MY REACT PROJECTS</h2>

        <div class="project__container">
          <div>
              <div class="project_card">
                <a href="https://jay3838.github.io/Reactamzoneclone/">
                  <img class="Image" src={amazone} loading="lazy"/>
                </a>
                <h3 class="jp">Amzone clone</h3>
              </div>
          </div>
              <div class="project_card">
                <a href="https://jay3838.github.io/ReactGoogleclone/">
                  <img class="Image" src={google} loading="lazy"/>
                </a>
                <h3 class="jp">Google Clone</h3>
                
              </div>

              {/* <div>
                <div class="project_card"><a href=""><img class="Image" src={amazone} /></a><h3 class="jp">Amzone clone</h3></div>
                </div> */}
                </div>
      </div>
    </div>
  );
}

export default Projects;
