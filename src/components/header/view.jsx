import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import logo from "../../Assets/Logo_ML.png";
import search from "../../Assets/ic_Search.png";
import indexStyles from './index.module.scss';

export default function view({ setQuery, handleSearchProducts, query }) {
    return (
        <div className={indexStyles.generalContainerHeader}>
            <div className={indexStyles.containerHeader}>
                <Link to="/"><img src={logo} id={indexStyles.logo} alt="Logo" /></Link>
                <div className={indexStyles.searchBar}>
                    <input
                        onKeyPress={e => {
                            if (e.charCode === 13) {
                                handleSearchProducts();
                            }
                        }}
                        onChange={e => setQuery(e.target.value)} 
                        placeholder="Nunca dejes de buscar"
                        value={query}
                    />
                    <button className={indexStyles.iconSearch} onClick={handleSearchProducts}>
                        <img src={search} alt="search" />
                    </button>
                </div>
            </div>
        </div>
    )
}

view.propTypes = {
    setQuery: PropTypes.func,
    handleSearchProducts: PropTypes.func,
    query: PropTypes.string
}