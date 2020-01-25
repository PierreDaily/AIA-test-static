import React from "react"
import PropTypes from "prop-types"
import Button from "../../atoms/button/Button"

const SignInSignUp = ({ handleLoginClick, handleSignInClick }) => (
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
)

SignInSignUp.propTypes = {
  handleLoginClick: PropTypes.func.isRequired,
  handleSignInClick: PropTypes.func.isRequired,
}

export default SignInSignUp
