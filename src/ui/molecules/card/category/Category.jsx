import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./Category.scss"
import imgData from "../../../../images/card/category/sport.jpg"

const Category = ({ imgSource, url }) => (
  <Link
    className="card-category"
    to={url}
    style={{ backgroundImage: `url(${imgSource})` }}
  >
    .
  </Link>
)

Category.defaultProps = {
  imgSource: imgData,
  url: "/",
}
Category.propTypes = {
  imgSource: PropTypes.string,
  url: PropTypes.string,
}

export default Category
