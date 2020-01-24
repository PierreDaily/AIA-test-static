import React from "react"
import PropTypes from "prop-types"
import "./Button.scss"

const Button = ({ handleClick, label, variant }) => (
  <button type="button" onClick={handleClick} className={variant}>
    {label}
  </button>
)

Button.defaultProps = {
  variant: "redBackground",
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

export default Button
