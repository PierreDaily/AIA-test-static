import React from "react"
import PropTypes from "prop-types"
import "./Avatar.scss"

const Avatar = ({ imgSource }) => (
  <img className="img-avatar--small" alt="avatar" src={imgSource} />
)

Avatar.propTypes = {
  imgSource: PropTypes.string.isRequired,
}
export default Avatar
