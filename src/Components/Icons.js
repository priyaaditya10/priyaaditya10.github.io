import { faIcons } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelope, faMailBulk, faMobile, faMobileAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faSkype, faTelegram, faTelegramPlane, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function Icons() {
    return (

        <div className="contact-div-alter">

            <a href="mailto:articpv93@gmail.com" target="_blank">
                < FontAwesomeIcon className="font-icons-alter" icon={faEnvelope} />
            </a>

            <a href="https://www.facebook.com/articpv" target="_blank">
                < FontAwesomeIcon className="font-icons-alter" icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/artic_pv/" target="_blank">
                < FontAwesomeIcon className="font-icons-alter" icon={faInstagram} />
            </a>
            <a href="https://wa.me/message/OYMOZWS6ENC2M1" target="_blank">
                < FontAwesomeIcon className="font-icons-alter" icon={faWhatsapp} />
            </a>
            <a href="https://join.skype.com/invite/YhoygRu7EwPT" target="_blank">
                < FontAwesomeIcon className="font-icons-alter" icon={faSkype} />
            </a>


        </div>
    )

}

export default Icons;