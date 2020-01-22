import React from 'react';

function Footer () {
    return (
    <footer id="footer">
        <div className="little-about">
            <div className="image">
                <img src="img/footer-logo.png" alt="Little About" />
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis sed a rem eum facilis, expedita quibusdam vel. Eum minus totam laboriosam animi repellat.</p>
            <div className="clearfix"></div>
        </div>
        <div className="links-cols">
            <div className="links-col">
                <h3 className="title">Titulo Columna</h3>
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                    <li>Link 4</li>
                </ul>
            </div>
            <div className="links-col">
                <h3  className="title">Titulo Columna</h3>
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                    <li>Link 4</li>
                </ul>
            </div>
            <div className="links-col">
                <h3 className="title">Titulo Columna</h3>
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                    <li>Link 4</li>
                </ul>
            </div>
        </div>
        <div className="clearfix"></div>
    </footer>
)}

export default Footer;