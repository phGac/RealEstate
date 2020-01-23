import React, { Component } from 'react';
import Choices from 'choices.js';

import menuScripts from '../scripts/menu';

class SearchFormResults extends Component {
    render() {
        return (
            <section className="search-container show">
                <button className="close" onClick={() => menuScripts.toggleSearchMenu()}>X</button>
                <div className="search">
                    <div className="filters">
                        <form className="search-form">
                            <select name="type" id="">
                                <option value="">todo</option>
                                <option value="">casa</option>
                                <option value="">departamento</option>
                                <option value="">oficina</option>
                            </select>
                            <select name="region" id="">
                                <option value="">todo</option>
                                <option value="">metropolitana</option>
                            </select>
                            <select name="comuna" id="">
                                <option value="">todo</option>
                                <option value="">Las Condes</option>
                                <option value="">La Florida</option>
                                <option value="">Puente Alto</option>
                            </select>
                            <select name="precio-min" id="">
                                <option value="">cero</option>
                                <option value="">50.000</option>
                                <option value="">70.000</option>
                                <option value="">250.000</option>
                                <option value="">300.000</option>
                                <option value="">800.000</option>
                            </select>
                            <select name="precio-max" id="">
                                <option value="">sin definir</option>
                                <option value="">50.000</option>
                                <option value="">70.000</option>
                                <option value="">250.000</option>
                                <option value="">300.000</option>
                                <option value="">800.000</option>
                            </select>
                            <select name="habitaciones-min" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                            </select>
                            <select name="habitaciones-max" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                            </select>
                            <input type="submit" value="Filtrar" />
                        </form>
                    </div>
                    <div className="info">
                        <div className="searched">
                            <div className="item">
                                <p className="name">Busqueda:</p>
                                <p className="value">Santiago</p>
                            </div>
                            <div className="item">
                                <p className="name">Resultados:</p>
                                <p className="value">215</p>
                            </div>
                            <div className="item">
                                <p className="name">Tipo Inmueble:</p>
                                <p className="value">casa</p>
                            </div>
                            <div className="item">
                                <p className="name">Habitaciones (min):</p>
                                <p className="value">0</p>
                            </div>
                            <div className="item">
                                <p className="name">Habitaciones (max):</p>
                                <p className="value">3</p>
                            </div>
                            <div className="item">
                                <p className="name">Precio (min):</p>
                                <p className="value">0</p>
                            </div>
                            <div className="item">
                                <p className="name">Precio (max):</p>
                                <p className="value">todo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    componentDidMount() {
        const elements = document.querySelectorAll('.search-container select');
        elements.forEach(element => {
            new Choices(element);
        });
    }
}

export default SearchFormResults;