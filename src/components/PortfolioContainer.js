import React, {useState} from 'react';
import Navbar from './Navbar';
import HeadIMG from './HeadIMG';
// import Home from './Home';
// import About from './About';
// import Blog from './Blog';
import Footer from './Footer';
// import Contact from './Contact';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderContainer = () => {
        switch(currentPage) {
            // case 'Home':
            //     return <Home/>
            //     break;
            // case 'About':
            //     return <About/>
            //     break;
            // case 'Blog':
            //     return <Blog/>
            //     break;
            // default:
            //     return <Home/>
        }
    };

    const pageChange_handler = (page) => setCurrentPage(page);

    return (
        <div>
            <Navbar currentPage={currentPage} pageChange_handler={pageChange_handler}/>
            <HeadIMG/>
            {renderContainer()}
            <Footer/>
        </div>
    )
}