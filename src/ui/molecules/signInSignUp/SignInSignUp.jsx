import React from "react"
import PropTypes from "prop-types"
import Button from "../../atoms/button/Button"
import Title from "../../atoms/title/Title"

const SignInSignUp = ({ handleLoginClick, handleSignInClick }) => (
  <React.Fragment>
    <div>
      <Button
        handleClick={handleLoginClick}
        label="Login"
        variant="noBGCNoBorder"
      />
      <Button
        handleClick={handleSignInClick}
        label="Sign up"
        variant="noBGCWithBorder"
      />
    </div>
    <Title title="HOLIDAY HOLIDAY" variant="h1Subtitle" />
  </React.Fragment>
)

SignInSignUp.propTypes = {
  handleLoginClick: PropTypes.func.isRequired,
  handleSignInClick: PropTypes.func.isRequired,
}

export default SignInSignUp