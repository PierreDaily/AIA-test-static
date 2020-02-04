import React from "react"
import InputText from "../../../atoms/input/text/InputText"
import Button from "../../../atoms/button/Button"
import "./InterestForm.scss"

const InterestForm = () => (
  <form action="#" className="form__interest">
    <InputText name="interests" placeholder="Enter your interests" />
    <Button
      handleClick={() => null}
      label="Search partners"
      variant="btn__red-bgc__fluid"
    />
  </form>
)

export default InterestForm
