import React from "react"
import PropTypes from "prop-types"
import Button from "../../atoms/button/Button"
import Title from "../../atoms/title/Title"

const SignInSignUp = ({ handleLoginClick, handleSignInClick }) => (
  <>
    <div>
      <Button
        handleClick={handleLoginClick}
        label="Login"
        variant="btn--login"
      />
      <Button
        handleClick={handleSignInClick}
        label="Sign up"
        variant="btn--sign-up"
      />
    </div>
    <Title title="HOLIDAY HOLIDAY" variant="h1Subtitle" />
  </>
)

SignInSignUp.propTypes = {
  handleLoginClick: PropTypes.func.isRequired,
  handleSignInClick: PropTypes.func.isRequired,
}

export default SignInSignUp
