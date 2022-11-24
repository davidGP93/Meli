import React from "react";
import picturesStyles from './pictures.module.scss';
import PropTypes from "prop-types";

export default function Pictures (props) {
    return(
        <div className={picturesStyles.pictureContainer}>
            {props.listPictures.map((picture, index) => (
                <img onClick={() => props.handleCurrentImage(index)} src={picture.url}></img>
            ))}
        </div>
    );
}

Pictures.propTypes= {
    listPictures: PropTypes.array,
    handleCurrentImage: PropTypes.func
};