import React from "react";
import picturesStyles from './pictures.module.scss';
import PropTypes from "prop-types";

export default function Pictures ({listPictures, handleCurrentImage}) {
    return(
        <section className={picturesStyles.pictureContainer}>
            {listPictures.map((picture, index) => (
                <figure className={picturesStyles['pictureContainer-img']}>
                    <img onClick={() => handleCurrentImage(index)} src={picture.url} ></img>
                </figure>
            ))}
        </section>
    );
}

Pictures.propTypes= {
    listPictures: PropTypes.array,
    handleCurrentImage: PropTypes.func
};