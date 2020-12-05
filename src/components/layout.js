import React, { Fragment } from 'react'
import Header from "./header";

import layoutStyles from './layout.module.scss'

export default function layout({ children }) {
    return (
        <Fragment>
            <Header />
            <div className={layoutStyles.generalLayout}>
                {
                    children
                }
            </div>
        </Fragment>
    )
}
