import React from "react"
import PropTypes from "prop-types"
import "./Basic.scss"
import Step from "../../../atoms/tag/Step"
import Title from "../../../atoms/title/Title"
import Typography from "../../../atoms/text/typography/Typography"
import imgData from "../../../../images/card/basic/step-1-image.jpg"

const Basic = ({ content, imgSource, stepIndex, title }) => (
  <div className="card-basic" style={{ backgroundImage: `url(${imgSource})` }}>
    <Step content={`step ${stepIndex}`} />
    <Title variant="h3" title={title} />
    <Typography content={content} variant="typo__small__grey-light" />
  </div>
)

Basic.defaultProps = {
  imgSource: imgData,
}

Basic.propTypes = {
  content: PropTypes.string.isRequired,
  imgSource: PropTypes.string,
  title: PropTypes.string.isRequired,
  stepIndex: PropTypes.number.isRequired,
}

export default Basic
