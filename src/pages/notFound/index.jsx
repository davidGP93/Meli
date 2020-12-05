import React from 'react';
import { Link } from "react-router-dom";
import Layout from "../../components/layout";

import indexStyles from "./index.module.scss";

export default function view() {
    return (
        <Layout>
            <div className={indexStyles.generalContainerNotFound}>
                <div>
                    <h3>Ups... no encontramos la pagina solicitada</h3>
                    <Link to="/">Volver al inicio</Link>
                </div>
            </div>
        </Layout>
    )
}
