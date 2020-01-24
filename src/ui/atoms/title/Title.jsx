import React from "react"
import PropTypes from "prop-types"
import "./Title.scss"

const Title = ({ title, variant }) => {
  switch (variant) {
    case "h1":
      return <h1 className="primaryTitle">{title}</h1>
    case "h1Subtitle":
      return <h1 className="primarySubtitle">{title}</h1>
    case "h2":
      return <h2 className="secondaryTitle">{title}</h2>
    case "h3":
      return <h3 className="tertiaryTitle">{title}</h3>
    default:
      return null
  }
}

Title.defaultProps = {
  variant: "h3",
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

export default Title
