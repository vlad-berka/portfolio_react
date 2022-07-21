import React from 'react';
import resume from "../assets/images/Vlad_Berka_RESUME.pdf";
import MTG_EDH_TRACKER from "../assets/images/MTG_EDH_TRACKER.png";
import Bens_Diner from "../assets/images/BENS DINER.png";
import Tech_Blog from "../assets/images/TECH_BLOG.png";
import E_Commerce from "../assets/images/E_COMMERCE_BACKEND.png";
import Note_Taker from "../assets/images/NOTE_TAKER.png";
import Weather_Dashboard from "../assets/images/Weather_Dashboard_ScreenShot_1.png";
import Code_Quiz from "../assets/images/VMB_CodeQuiz_SS2.png";
import Translate_App from "../assets/images/Screenshot_Translation_App.png";

function Projects({currentPage, pageChange_handler}) {
    return (
        <div>
            <div className="align-items-start text-center container-fluid row">
                <div className="col-md-4 col-xs-12 col-left d-flex">
                    <h2 className="col-11 align-self-end" id="My_Work">Personal Projects in Development</h2>
                </div>
                <div className="col-md-8 col-xs-12 col-right container-fluid row">
                    <article className="col-12 d-flex">
                        <h3 className="align-self-center col-md-4 col-xs-6"><a href="https://github.com/vlad-berka/MTG_EDH_Tracker" target="_blank">Magic the Gathering, Stat Tracker, GitHub</a></h3>
                        <a href="https://mtg-edh-stat-tracker.herokuapp.com/" target="_blank">
                        <img className="nested_img_L" src={MTG_EDH_TRACKER} alt="Personal Project 1, screenshot"></img></a>
                    </article>
                </div>
            </div>
            
            <div className="align-items-start text-center container-fluid row">
                <div className="col-md-4 col-xs-12 col-left d-flex">
                    <h2 className="col-11 align-self-end" id="My_Work">Completed Work</h2>
                </div>
                <div className="col-md-8 col-xs-12 col-right container-fluid row">
                    <article className="col-12 d-flex">
                        <h3 className="align-self-center col-md-4 col-xs-6"><a href = "https://github.com/wonjong2/Bens_Diner" target="_blank">Ben's Diner (Full-Stack App)</a></h3>
                        <a href="https://bens-diner.herokuapp.com/" target="_blank" className="">
                        <img className="nested_img_L" src={Bens_Diner} alt="Group Project 2, Ben's Diner"></img></a>
                    </article>
                    <aside className="col-md-6 col-xs-12 d-flex">
                        <h3 className="align-self-center col-md-2 col-xs-6"><a href = "https://github.com/vlad-berka/Tech_Blog" target="_blank">Tech Blog</a></h3>
                        <a href="https://shielded-journey-15443.herokuapp.com/" target="_blank">
                        <img className="nested_img_S" src={Tech_Blog} alt="Tech Blog Screenshot"></img></a>
                    </aside>
                    <aside className="col-md-6 col-xs-12 d-flex">
                        <h3 className="align-self-center col-md-2 col-xs-6"><a href = "https://github.com/vlad-berka/E_Commerce_Backend" target="_blank">E Commerce Backend</a></h3>
                        <a href="https://github.com/vlad-berka/E_Commerce_Backend" target="_blank">
                        <img className="nested_img_S" src={E_Commerce} alt="E_Commerce Backend Screenshot"></img></a>
                    </aside>
                    <aside className="col-md-6 col-xs-12 d-flex">
                        <h3 className="align-self-center col-md-2 col-xs-6"><a href = "https://github.com/vlad-berka/Note_Taker" target="_blank">Note Taker</a></h3>
                        <a href="https://shrouded-stream-07436.herokuapp.com/" target="_blank">
                        <img className="nested_img_S" src={Note_Taker} alt="Note Taker Screenshot"></img></a>
                    </aside>

                    <aside className="col-md-6 col-xs-12 d-flex">
                        <h3 className="align-self-center col-md-2 col-xs-6"><a href = "https://github.com/vlad-berka/Weather_Dashboard" target="_blank">Weather Dashboard</a></h3>
                        <a href="https://vlad-berka.github.io/Weather_Dashboard/" target="_blank">
                        <img className="nested_img_S" src={Weather_Dashboard} alt="Weather Dashboard Screenshot"></img></a>
                    </aside>
                    <aside className="col-md-6 col-xs-12 d-flex">
                        <h3 className="align-self-center col-md-2 col-xs-6"><a href = "https://github.com/vlad-berka/Code_Quiz" target="_blank">Code Quiz</a></h3>
                        <a href="https://vlad-berka.github.io/Code_Quiz/" target="_blank">
                        <img className="nested_img_S" src={Code_Quiz} alt="Code Quiz Screenshot"></img></a>
                    </aside>
                    <aside className="col-md-6 col-xs-12 d-flex">
                        <h3 className="align-self-center col-md-2 col-xs-6"><a href = "https://github.com/levisgaragegroupinc/translation_app" target="_blank">Translate App (Google Translate API)</a></h3>
                        <a href="https://levisgaragegroupinc.github.io/translation_app/" target="_blank">
                        <img className="nested_img_L" src={Translate_App} alt="Group Project 1, Google Translate API Screenshot"></img></a>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default Projects;