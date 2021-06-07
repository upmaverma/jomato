import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const footer = ()=>{
    return(
        <>
            <div className="footer">
                <p className="footerPara">Copyright<FontAwesomeIcon icon={['far', 'copyright']} />2021 Made by Upma Verma with  love <FontAwesomeIcon icon={['fas', 'heart']} id="heartFont" /></p>
            </div>
        </>
    )
}
export default footer;