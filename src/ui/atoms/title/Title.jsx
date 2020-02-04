import React from "react"
import PropTypes from "prop-types"
import "./Title.scss"

const Title = ({ title, variant }) => {
  switch (variant) {
    case "h1":
      return <h1 className="h1__front-page__big">{title}</h1>
    case "h1Subtitle":
      return <h1 className="h1__front-page__medium">{title}</h1>
    case "h2":
      return <h2 className="h2__front-page">{title}</h2>
    case "h3":
      return <h3 className="h3__front-page">{title}</h3>
    case "h4":
      return <h3 className="h4__front-page">{title}</h3>
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
