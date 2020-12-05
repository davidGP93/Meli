import React from 'react';

import logo from "../../Assets/mercado-libre-logo.png";

import indexStyles from "./index.module.scss";

export default function index() {
    return (
        <div className={indexStyles.generalContainerLoading}>
            <div className={[indexStyles.box ,indexStyles.bounce3].join(' ')}>
              <img src={logo} alt="Logo MELI" /><br />
              <h6>Cargando....</h6>
              </div>
        </div>
    )
}
