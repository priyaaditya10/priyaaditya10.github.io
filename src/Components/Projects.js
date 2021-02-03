import React from 'react';

import Video from './Video';
import Raster from './Raster';
import Branding from './Branding';
import InvitationGraphics from './InvitationGraphics';
import Catalouge from './Catalouge';
import Post from './Post';




function Projects() {


    return (
        <div id="project">

            <h2 className="services-text-alter"> PROJECTS </h2><br /><br /><br /><br />

            <h3 className="projects-text-alter">Vector  and  Digital  Art</h3><br /><br />
            <Raster /><br /><br /><br /><br />
            <h3 className="projects-text-alter">Logo  Reveal  and  Infographic  Videos</h3><br /><br />
            <Video /><br /><br /><br /><br />
            <h3 className="projects-text-alter">Branding  and  Printing  Services </h3><br /><br />
            <Branding /> <br /> <br /><br /><br />
            <h3 className="projects-text-alter">Social Media Post and Designing </h3><br /><br />
            <Post /> <br /> <br /><br /><br />
            <h3 className="projects-text-alter">Invitation Graphics  and  E-Card </h3><br /><br />
            <InvitationGraphics /> <br /> <br /><br /><br />
            <h3 className="projects-text-alter">Catalouge Designing</h3><br /><br />
            <Catalouge /> <br /> <br /> <br /><br /><br />


        </div>


    )


}


export default Projects;