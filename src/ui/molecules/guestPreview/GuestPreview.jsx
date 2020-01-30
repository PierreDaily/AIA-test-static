import React from "react"
import PropTypes from "prop-types"
import Avatar from "../../atoms/img/avatar/Avatar"
import Typography from "../../atoms/text/typography/Typography"
import "./GuestPreview.scss"

const GuestPreview = ({ content, fullName, imgSource }) => (
  <div className="guest-preview">
    <Avatar imgSource={imgSource} />
    <Typography content={fullName} variant="typo__small__black" />
    <Typography content={content} variant="typo__small__grey-dark" />
  </div>
)

GuestPreview.defaultProps = {
  content: null,
  fullName: null,
  imgSource: null,
}

GuestPreview.propTypes = {
  content: PropTypes.string,
  fullName: PropTypes.string,
  imgSource: PropTypes.string,
}

export default GuestPreview
