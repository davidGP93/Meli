import React from 'react';
import PropTypes from "prop-types";
import {Helmet} from "react-helmet";

import Layout from "../../components/layout";
import Loading from "../../components/loading";

import indexStyles from "./index.module.scss";
import Pictures from '../../components/pictures';
import mercadoPago from "../../Assets/mercado_pago (1).png";

export default function view({ dataProduct, loading, error, currentImage, handleCurrentImage }) {
    if(loading) return <Loading />
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{dataProduct.title}</title>
                <meta name="description" content={dataProduct.description} />
                <meta name="keywords" content={dataProduct.title} />
                <meta name="og:image" content={dataProduct.pictures[0].secure_url} />
                <meta name="og:title" content={dataProduct.title} />
                <meta name="og:description" content={dataProduct.description} />
            </Helmet>
            <div className={indexStyles.breadCrumbs}>
            Inicio {'>'} {dataProduct.category_id} {'>'}  {dataProduct.title}
            </div>
            <div className={indexStyles.generalContainerDetailProduct}>
                <div className={indexStyles.dataArt}>
                    <div>
                        <img src={dataProduct.pictures[currentImage].secure_url} alt={dataProduct.title} />
                        <Pictures listPictures ={dataProduct.pictures} handleCurrentImage={handleCurrentImage}/>
                    </div>
                    
                        <div className={indexStyles.infoArt}>
                        <span className={indexStyles.soldQuantity}>{dataProduct.condition === 'new' ? 'Nuevo' : 'Antiguo'} - {dataProduct.sold_quantity} vendidos</span>
                        <span className={indexStyles.title}>{dataProduct.title}</span>
                        <span className={indexStyles.price}>${' '}{dataProduct.price}</span>
                        <button className={indexStyles.btnBuy}>Comprar</button>
                        {dataProduct.accepts_mercadopago === true? 
                        <figure className={indexStyles.imgMercadoPago}>
                            <img src={mercadoPago} alt="mercado_pago"></img>
                        </figure>: null}
                        
                    </div>
                </div>
                <div className={indexStyles.description}>
                    <span className={indexStyles.titleDescription}>Descripción del producto</span>
                    <span className={indexStyles.textDescription}>{dataProduct.description}</span>
                </div>
            </div>
        </Layout>
    ) 
}

view.propTypes = {
    dataProduct: PropTypes.shape(),
    loading: PropTypes.bool,
    error: PropTypes.string,
    currentImage: PropTypes.number,
    handleCurrentImage: PropTypes.func
}
