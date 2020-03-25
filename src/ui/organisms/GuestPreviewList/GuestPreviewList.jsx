import React from "react"
import PropTypes from "prop-types"
import Button from "../../atoms/button/Button"
import Title from "../../atoms/title/Title"
import GuestPreview from "../../molecules/guestPreview/GuestPreview"
import "./GuestPreviewList.scss"

const GuestPreviewList = ({ data, title }) => (
  <div className="guest-preview-list">
    <Title title={title} variant="h2" />
    <div className="guest-preview-list__content">
      {Object.keys(data).map(index => (
        <GuestPreview
          content={data[index].presentation}
          imgSource={data[index].avatar}
          key={index}
          fullName={data[index].fullName}
        />
      ))}
    </div>
    <Button
      label="See other partners"
      handleClick={() => null}
      variant="btn--action-white-bgc"
    />
  </div>
)

GuestPreviewList.propTypes = {
  data: PropTypes.shape({
    fullName: PropTypes.string,
    imgSource: PropTypes.string,
    presentation: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
}

export default GuestPreviewList
