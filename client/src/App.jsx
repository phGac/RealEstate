import React, { useState, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import MobileNav from './components/MobileNav';
import SearchSection from './components/SearchSection';
import AboutContent from './components/AboutContent';
import LoginContainer from './components/LoginContainer';
import Footer from './components/Footer';

// containers
import Header from './containers/Header';
import SearchContent from './containers/SearchContent';

import windowResize from './scripts/windowScreen';
import External from './components/External';

function App() {
    const [width, height] = useWindowSize();
    console.log(width, height);
    windowResize(width, height);

    return ( 
        <Router>
            <External.ExternalScript src="https://cdn.jsdelivr.net/npm/choices.js/public/assets/scripts/choices.min.js" />
            <External.ExternalCSS href="https://cdn.jsdelivr.net/npm/choices.js/public/assets/styles/choices.min.css" />
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
