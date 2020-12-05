import React from 'react';
import Layout from "../../components/layout";

import indexStyles from "./index.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Loading from "../../components/loading";

export default function view({ listArts, loading, breadCrumb }) {
  if(loading) return <Loading />

  return (
    <Layout>
      <div className={indexStyles.generalContainerSearchResult}>
        <div className={indexStyles.breadCrumbs}>
          Inicio { breadCrumb.map(item => (`> ${item.name}`)) }
        </div>
        <div className={indexStyles.listProducts}>
          {
            listArts.length > 0 ?
            listArts.map((product) => (
              <Link to={`/items/${product.id}`} key={`product_${product.id}`}>
              <div className={indexStyles.fieldProduct}>
                <img src={product.thumbnail} alt={product.title} />
                <div className={indexStyles.dataProduct}>
                  <span className={indexStyles.value}>${' '}{product.price}</span>
                  <p className={indexStyles}>{product.title}</p>
                </div>
                <div>
                  <span className={indexStyles.stateName}>{product.address.state_name}</span>
                </div>
              </div>
              </Link>
            )) : <div className={indexStyles.notFound}>Sin coincidencias, busca otro artículo</div>
          }
        </div>
      </div>
    </Layout>
  )
}

view.propTypes = {
    listArts: PropTypes.array,
    loading: PropTypes.bool
}
