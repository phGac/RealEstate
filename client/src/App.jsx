import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// https://colorlib.com/etc/lf/Login_v4/index.html

// components
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import SearchSection from './components/SearchSection';
import AboutContent from './components/AboutContent';
import LoginContainer from './components/LoginContainer';
import Footer from './components/Footer';

// containers
import SearchContent from './containers/SearchContent';

function App() {
    return ( 
        <Router>
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

export default App;
