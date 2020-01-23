import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SearchFormResults from './SearchFormResults';
import SearchResults from './SearchResults';
import PostShow from '../components/PostShow';

import menuScripts from '../scripts/menu';

function SearchContent() {
    return (
    <section id="content-search">
        <button id="search-menu" className="show" onClick={() => menuScripts.toggleSearchMenu()}>Filtros</button>
        <SearchFormResults />
        <Switch>
            <Route path={"/search"} exact component={SearchResults} />
            <Route path={"/search/post/:id"} component={PostShow} />
        </Switch>
    </section>
)}

export default SearchContent;
