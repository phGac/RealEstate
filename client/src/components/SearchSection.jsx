import React from 'react';

function SearchSection() {
    return (
    <section id="search-container">
        <div>
            <div className="wrap-container">
                <form action="/search" className="search-form">
                    <div className="search-type">
                        <div className="item">
                            <input type="radio" name="type" id="search-type-buy" defaultChecked/>
                            <label htmlFor="search-type-buy">Comprar</label>
                        </div>
                        <div className="item">
                            <input type="radio" name="type" id="search-type-rent"/>
                            <label htmlFor="search-type-rent">Rentar</label>
                        </div>
                        <div className="item">
                            <input type="radio" name="type" id="search-type-sell"/>
                            <label htmlFor="search-type-sell">Vender</label>
                        </div>
                    </div>
                    <div className="search-input">
                        <input type="text" placeholder="Buscar por región o comuna..."/>
                        <input type="submit" value="Buscar" className="search-submit"/>
                    </div>
                    <div className="property-restrictions">
                        <select className="property-type" id="property-rooms-min">
                            <option value="">Habitaciones(min)</option>
                        </select>
                        <select className="property-type" id="property-rooms-max">
                            <option value="">Habitaciones(max)</option>
                        </select>
                        <select className="property-type" id="property-price">
                            <option value="">Precio(min)</option>
                        </select>
                        <select className="property-type" id="property-max">
                            <option value="">Precio(max)</option>
                        </select>
                        <select className="property-type" id="property-type">
                            <option value="">Todos los tipos</option>
                            <optgroup label="Grupo 1">
                                <option value="g1-1">Casa</option>
                                <option value="g1-2">Departamento</option>
                            </optgroup>
                            <optgroup label="Grupo 2">
                                <option value="g1-1">Oficina</option>
                            </optgroup>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    </section>
)}

export default SearchSection;