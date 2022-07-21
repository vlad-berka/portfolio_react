import React from 'react';

function Navbar({currentPage, pageChange_handler}) {
    return (
        <div className="row align-items-center text-center container-fluid">
            <div className="col-lg-4 col-s-12 col-left">
              <h1 className="col-12">VLADIMIR BERKA</h1>
            </div>
            <div className="col-lg-8 col-xs-12 xtra_pad">
                <nav className="col-right top_nav">
                    <a href="#About_Me" onClick={()=> pageChange_handler('About')}>BRAND STATEMENT</a>
                    <a href="#My_Work" onClick={()=> pageChange_handler('Work')}>MY WORK</a>
                    <a href="#Bio" onClick={()=> pageChange_handler('Home')}>BIO</a>
                    <a href="#Contact_Me" onClick={()=> pageChange_handler('Contact')}>CONTACT ME</a>
                    <a href="./assets/images/Vlad Berka_RESUME.pdf" target="_blank">RESUME</a>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;