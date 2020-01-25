import React from "react"
import PropTypes from "prop-types"
import "./Typography.scss"

const Typography = ({ content, variant }) => (
  <p className={variant}>{content}</p>
)

Typography.defaultProps = {
  variant: "default",
}

Typography.propTypes = {
  content: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

export default Typography
