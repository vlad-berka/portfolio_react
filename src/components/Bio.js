import React from 'react';
import resume from "../assets/images/Vlad_Berka_RESUME.pdf";

function Bio({currentPage, pageChange_handler}) {
    return (
        <div className="align-items-start text-center container-fluid row">
            <div className="col-md-4 col-xs-12 col-left">
                <h2 className="col-11" id="Bio">Bio</h2>
            </div>
            <div className="col-md-8 col-xs-12 col-right container-fluid row">
                <p>Civil Engineer by education and Structural Engineer by profession, but aspiring web developer.</p>
                <p>Slovak by birth and Texan by nurture, but Pacific North-West native by nature.</p>
                <p>While waiting for the season's snow fall, I play and design tabletop board games.</p>
                <p>And when I'm neither gaming or snowboarding; I'm out hiking, exploring, or trying different brews.</p>
                <p>Moved up to Seattle from Houston to pursue all 5 of those things, and stayed because of the weather.</p>
                <p>Night owl and coffee addict. Music appreciator and a really bad singer.</p>

            </div>
        </div>
    )
}

export default Bio;