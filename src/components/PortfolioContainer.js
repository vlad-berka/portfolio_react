import React, {useState} from 'react';
import Navbar from './Navbar';
import HeadIMG from './HeadIMG';
import Bio from './Bio';
import Brand from './BrandStatement';
import Work from './Projects';
import Footer from './Footer';
// import Contact from './Contact';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Brand');

    const renderContainer = () => {
        switch(currentPage) {
            case 'Bio':
                return <Bio/>
                break;
            case 'Brand':
                return <Brand/>
                break;
            case 'Work':
                return <Work/>
                break;
            case 'Contact':
                break;
            default:
                return <Brand/>
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