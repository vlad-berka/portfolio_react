import React from 'react';

function Footer() {
    return (
        <div className="row align-items-start text-top container-fluid">
            <div className="col-md-4 col-xs-12 col-left">
                <h2 className="col-11 align-self-end" id="Contact_Me">Contact Me</h2>
            </div>
            <div className="col-md-8 col-xs-12 col-right container-fluid row contact_me">
                <nav>
                    <a href="">Ph: (832) 368-5421</a>
                    <a href="#Top">WEBSITE</a>
                    <a href="https://github.com/vlad-berka" target="_blank">GitHub</a>
                    <a href="https://www.linkedin.com/in/vladimir-berka/" target="_blank">Linked-in</a>
                    <a href="https://open.spotify.com/user/czech_yo_self?si=89cda40d601a4415" target=" _blank">Spotify</a>
                    <a href="mailto:vlad.m.berka@gmail.com" target=" _blank">Email</a>   
                    <a href="./assets/images/Vlad Berka_RESUME.pdf" target="_blank">Resume</a>                
                </nav>
            </div>
        </div>
    );
}

export default Footer;