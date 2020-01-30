import React from "react"
import PropTypes from "prop-types"
import Title from "../../atoms/title/Title"
import Card from "../../molecules/card/Basic/Basic"
import "./BasicCardList.scss"

const BasicCardList = ({ title, data }) => (
  <div className="basic-card-list">
    <Title variant="h2" title={title} />
    <div className="basic-card-list__content">
      {Object.keys(data).map(stepIndex => (
        <Card
          content={data[stepIndex].content}
          imgSource={data[stepIndex].imgSource}
          key={stepIndex}
          stepIndex={Number(stepIndex)}
          title={data[stepIndex].title}
        />
      ))}
    </div>
  </div>
)

BasicCardList.defaultProps = {
  title: null,
}
BasicCardList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.shape({
    content: PropTypes.string.isRequired,
    imgSource: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default BasicCardList
