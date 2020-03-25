import React from "react"
import PropTypes from "prop-types"
import "./InputText.scss"

const InputText = ({ name, placeholder }) => (
  <input
    className="input-text--fluid"
    name={name}
    type="text"
    placeholder={placeholder}
  />
)

InputText.defaultProps = {
  name: "default",
  placeholder: "",
}

InputText.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
}

export default InputText
