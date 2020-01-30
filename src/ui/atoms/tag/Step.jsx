import React from "react"
import PropTypes from "prop-types"
import "./Step.scss"

const Step = ({ content }) => <span className="step__red">{content}</span>

Step.propTypes = {
  content: PropTypes.string.isRequired,
}

export default Step
