import React from 'react';
import NavbarPage from './NavbarPage';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import ServicesHeading from './ServicesHeading';
import ContactHeading from './ContactHeading';
import Icons from './Icons';
import Banner from './Banner';

function MyApp() {
    return ( 
        <div style={{backgroundColor: 'black'}} >
         
         <NavbarPage/>
         <About/>
         <ServicesHeading/>
         <Services/>
         <Projects/>
         <ContactHeading/>
         <Icons/>
         <Banner/>

        </div>

    )

}

export default MyApp;