import React from "react"
import Title from "../../atoms/title/Title"
import Button from "../../atoms/button/Button"
import Typography from "../../atoms/text/typography/Typography"
import "./Introduction.scss"

const Introduction = () => (
  <div className="introduction">
    <Title title="share your holiday dream" variant="h1" />
    <Typography
      content="And find the perfect partner to fullfill it"
      variant="typo--regular-white-light"
    />
    <Button
      label="Find your holiday partner"
      handleClick={() => null}
      variant="btn--action-red-bgc"
    />
  </div>
)

export default Introduction
