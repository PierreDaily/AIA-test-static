import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./Category.scss"

const Category = ({ category, url }) => (
  <Link className="card-category" to={url}>
    <picture>
      <source
        media="(min-width: 1440px)"
        srcSet={`/img/${category}/${category}-1440.jpg`}
      />
      <source
        media="(min-width: 768px)"
        srcSet={`/img/${category}/${category}-768.jpg`}
      />
      <img src={`/img/${category}/${category}.jpg`} alt="category" />
    </picture>
  </Link>
)

Category.defaultProps = {
  category: "sport",
  url: "/",
}
Category.propTypes = {
  category: PropTypes.string,
  url: PropTypes.string,
}

export default Category
