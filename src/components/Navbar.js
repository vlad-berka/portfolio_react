import React from 'react';
import resume from "../assets/images/Vlad_Berka_RESUME.pdf";

function Navbar({currentPage, pageChange_handler}) {
    return (
        <div className="row align-items-center text-center container-fluid">
            <div className="col-lg-4 col-s-12 col-left">
              <h1 className="col-12">VLADIMIR BERKA</h1>
            </div>
            <div className="col-lg-8 col-xs-12 xtra_pad">
                <nav className="col-right top_nav">
                    <a href="#About_Me" onClick={()=> pageChange_handler('Brand')} className={currentPage === 'Brand' ? 'selected' : ''}>BRAND STATEMENT</a>
                    <a href="#My_Work" onClick={()=> pageChange_handler('Work')} className={currentPage === 'Work' ? 'selected' : ''}>MY WORK</a>
                    <a href="#Bio" onClick={()=> pageChange_handler('Bio')} className={currentPage === 'Bio' ? 'selected' : ''}>BIO</a>
                    <a href="#Contact_Me" onClick={()=> pageChange_handler('Contact')} className={currentPage === 'Contact' ? 'selected' : ''}>CONTACT ME</a>
                    <a href={resume} target="_blank">RESUME</a>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;