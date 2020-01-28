import React, { useState, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import SearchSection from './components/SearchSection';
import AboutContent from './components/AboutContent';
import Footer from './components/Footer';

// containers
import LoginContainer from './containers/LoginContainer';
import SearchContent from './containers/SearchContent';

import windowResize from './scripts/windowScreen';
import External from './components/External';

function App() {
    const [width, height] = useWindowSize();
    console.log(width, height);
    windowResize(width, height);

    return ( 
        <Router>
            <External.ExternalScript src="/libs/choices.js/choices.min.js" />
            <External.ExternalCSS href="/libs/choices.js/choices.min.css" />
            <Header />
            <MobileNav />
            <Switch>
                <Route path="/" exact component={SearchSection} />
                <Route path="/about" component={AboutContent} />
                <Route path="/search" component={SearchContent} />
                <Route path="/(login|register)/" component={LoginContainer} />
            </Switch>
            <Footer />
        </Router>
    );
}


function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export default App;
