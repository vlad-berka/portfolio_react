import React from 'react';
import resume from "../assets/images/Vlad_Berka_RESUME.pdf";
import MTG_EDH_TRACKER from "../assets/images/MTG_EDH_TRACKER.png";

function BrandStatement({currentPage, pageChange_handler}) {
    return (
        <div className="align-items-start text-center container-fluid row">
            <div className="col-md-4 col-xs-12 col-left">
                <h2 className="col-11" id="About_Me">Brand Statement</h2>
            </div>
            <div className="col-md-8 col-xs-12 col-right container-fluid row">
                <p>Structural Engineer of 8 years exploring software development pathways.</p>
                <p>Currently earning a certificate in Full Stack Web Development with strengths in communication and analytical reasoning.</p>
                <p>Passionate about puzzles and tabletop games, with an insatiable desire to solve complex logic problems in a software development environment.</p>
            </div>
        </div>
    )
}

export default BrandStatement;