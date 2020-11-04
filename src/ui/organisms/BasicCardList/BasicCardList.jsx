import React from "react"
import PropTypes from "prop-types"
import Title from "../../atoms/title/Title"
import Card from "../../molecules/card/Basic/Basic"
import "./BasicCardList.scss"

const BasicCardList = ({ title, data }) => (
  <div className="basic-card-list">
    <Title variant="h2" title={title} />
    <div className="basic-card-list__content">
      {data.map(card => (
        <Card
          content={card.content}
          imgSource={card.imgSource}
          key={card.step}
          stepIndex={card.step}
          title={card.title}
        />
      ))}
    </div>
  </div>
)

BasicCardList.defaultProps = {
  title: "",
}
BasicCardList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      imgSource: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      step: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default BasicCardList
