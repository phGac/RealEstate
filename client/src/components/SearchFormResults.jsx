import React, { Component } from 'react';
import Choices from 'choices.js';

import menuScripts from '../scripts/menu';

class SearchFormResults extends Component {
    render() {
        const { searched } = this.props;
        return (
            <section className="search-container show">
                <button className="close" onClick={() => menuScripts.toggleSearchMenu()}>X</button>
                <div className="search">
                    <div className="filters">
                        <form className="search-form">
                            <select name="type" id="">
                                <option value="">Tipo de Propiedad</option>
                                <option value="house">casa</option>
                                <option value="apartment">departamento</option>
                                <option value="officine">oficina</option>
                            </select>
                            <select name="region" id="">
                                <option value="">Región</option>
                                <option value="metropolitana">metropolitana</option>
                            </select>
                            <select name="commune" id="">
                                <option value="">Comuna</option>
                                <option value="Las Condes">Las Condes</option>
                                <option value="La Florida">La Florida</option>
                                <option value="Puente Alto">Puente Alto</option>
                            </select>
                            <select name="price-min" id="">
                                <option value="">Precio minimo</option>
                                <option value="50000">50.000</option>
                                <option value="70000">70.000</option>
                                <option value="250000">250.000</option>
                                <option value="300000">300.000</option>
                                <option value="800000">800.000</option>
                            </select>
                            <select name="price-max" id="">
                                <option value="">Precio máximo</option>
                                <option value="50000">50.000</option>
                                <option value="70000">70.000</option>
                                <option value="250000">250.000</option>
                                <option value="300000">300.000</option>
                                <option value="800000">800.000</option>
                            </select>
                            <select name="beds-min" id="">
                                <option value="">Dormitorios Min</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <select name="beds-max" id="">
                                <option value="">Dormitorios Max</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <input type="submit" value="Filtrar" />
                        </form>
                    </div>
                    <div className="info">
                        <div className="searched">
                            <div className="item">
                                <p className="name">Busqueda:</p>
                                <p className="value">{ searched.searched }</p>
                            </div>
                            <div className="item">
                                <p className="name">Resultados:</p>
                                <p className="value">{ searched.results.count.total }</p>
                            </div>
                            <div className="item">
                                <p className="name">Tipo Propiedad:</p>
                                <p className="value">{ searched.property.type }</p>
                            </div>
                            <div className="item">
                                <p className="name">Dormitorios (min):</p>
                                <p className="value">{ searched.property.beds.min }</p>
                            </div>
                            <div className="item">
                                <p className="name">Dormitorios (max):</p>
                                <p className="value">{ searched.property.beds.max }</p>
                            </div>
                            <div className="item">
                                <p className="name">Precio (min):</p>
                                <p className="value">{ searched.property.price.min }</p>
                            </div>
                            <div className="item">
                                <p className="name">Precio (max):</p>
                                <p className="value">{ searched.property.price.max }</p>
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