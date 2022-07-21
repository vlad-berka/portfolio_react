import React from 'react';
import headshotIMG from "../assets/images/headshot.JPG";
import background from "../assets/images/background.jpg";

function HeadIMG() {
    return (
        // <!-- Background flavor image and headshot separating top of page and rest of content -->
        <header className="container-fluid">
            <img className="Background col-12" src={background} alt="Background Image"></img>
            {/* <img className="headshot" src={headshotIMG} alt="Headshot Image"></img> */}
        </header>
    );
}

export default HeadIMG;