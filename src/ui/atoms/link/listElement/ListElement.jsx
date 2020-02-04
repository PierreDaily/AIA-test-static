import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./ListElement.scss"

const ListElement = ({ content, color, url }) => (
  <Link className="link__list-element" to={url} style={{ color }}>
    {content}
  </Link>
)

ListElement.defaultProps = {
  color: "",
  url: "/",
}

ListElement.propTypes = {
  color: PropTypes.string,
  content: PropTypes.string.isRequired,
  url: PropTypes.string,
}

export default ListElement
