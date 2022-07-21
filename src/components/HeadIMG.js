import React from 'react';

function HeadIMG() {
    return (
        // <!-- Background flavor image and headshot separating top of page and rest of content -->
        <header className="container-fluid">
            <img className="Background col-12" src="./assets/images/background.jpg" alt="Background Image"></img>
            <img className="headshot" src="./assets/images/headshot.JPG" alt="Headshot Image"></img>
        </header>
    );
}

export default HeadIMG;