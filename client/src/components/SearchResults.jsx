import React from 'react';
import { Link } from 'react-router-dom';

function SearchResults({ results }) {
    return (
    <section id="results">
        {
            results.map((result) => (
                <article className="result" key={result.id}>
                    <div className="picture">
                        <img src={result.picture.url} alt=""/>
                        <div className="info">
                        <div className="price">$ {result.property.price}</div>
                        <span className="status">{result.property.status}</span>
                    </div>
                    </div>
                    <Link to={`/search/post/${result.id}`} className="wrap-info">
                        <h3 className="direction">
                            {result.property.direction.number} {result.property.direction.street}, {result.property.direction.city}, {result.property.direction.state}
                        </h3>
                        <div className="property_info">
                            <div className="beds">{result.property.beds} Dormitorio(s)</div>
                            <div className="rooms">{result.property.rooms} Cuarto(s)</div>
                            <div className="baths">{result.property.baths} Baño(s)</div>
                            <div className="type">{result.property.type}</div>
                        </div>
                        <div className="post-info">
                            <div className="time">{result.post.time}</div>
                        </div>
                    </Link>
                </article>
            ))
        }
    </section>
)}

export default SearchResults;
