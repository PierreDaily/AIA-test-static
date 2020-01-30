import React from "react"
import PropTypes from "prop-types"
import SignInSignUp from "../../molecules/signInSignUp/SignInSignUp"
import Introduction from "../../molecules/introduction/Introduction"
import "./Header.scss"

const handleClick = () => console.log("click")

const Header = () => (
  <header className="header">
    <div className="header__top">
      <SignInSignUp
        handleLoginClick={handleClick}
        handleSignInClick={handleClick}
      />
    </div>
    <div className="header__middle">
      <Introduction />
    </div>
  </header>
)

export default Header
