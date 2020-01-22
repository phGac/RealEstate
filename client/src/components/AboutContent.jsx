import React from 'react';

function AboutContent() {
    return (
    <section id="content-about">
        <section id="about">
            <div className="about-text">
                <h2>A young team that is here to help you get your dream home.</h2>
                <p>Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Ut gravida mattis magna, non varius lorem sodales nec. In libero orci, ornare non nisl a, auctor euismod purus. Morbi pretium interdum vestibulum. Fusce nec eleifend ipsum. Sed non blandit tellus. </p>
            </div>
            <div className="about-image">
                <div className="image">
                    <img src="img/about-people.jpg" alt="About" />
                </div>
            </div>
        </section>
        <section id="agents">
            <h2>Nuestros Agentes</h2>
            <div>
                <div className="agent">
                    <div className="agent-image">
                        <img src="img/agent.jpg" alt="Agent"/>
                    </div>
                    <div className="agent-text">
                        <h3>Christinne James</h3>
                        <p>Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora. Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum.</p>
                    </div>
                </div>
            </div>
        </section>
    </section>
)}

export default AboutContent;