import React from "react";
import tagsStyles from "./tags.module.scss";
import PropTypes from "prop-types";

export default function Tags(props) {
  return (
    <section className={tagsStyles.tagsContainer}>
      {props?.listTags?.map((tag) => (
        <article className={tagsStyles.tagEvery}>{tag}</article>
      ))}
    </section>
  );
}

Tags.propTypes = {
  listTags: PropTypes.array,
};
