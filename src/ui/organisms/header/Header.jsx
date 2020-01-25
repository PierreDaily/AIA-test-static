import React from "react"
import PropTypes from "prop-types"
import SignInSignUp from "../../molecules/signInSignUp/SignInSignUp"
import Introduction from "../../molecules/introduction/Introduction"
import Title from "../../atoms/title/Title"
import "./Header.scss"

const Header = () => (
  <header className="header">
    <div className="header__top">
      <SignInSignUp />
    </div>
    <div className="header__middle">
      <Introduction />
    </div>
  </header>
)

export default Header
