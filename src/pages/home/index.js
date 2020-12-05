import React from 'react';

import Layout from "../../components/layout";

import logo from "../../Assets/mercado-libre-logo.png";

import indexStyles from './index.module.scss';

export default function index() {
    return (
        <Layout>
            <div className={indexStyles.generalContainerHome}>
                <img src={logo} alt="Logo MELI" />
            </div>
        </Layout>
    )
}
