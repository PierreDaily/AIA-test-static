import React from "react"
import { action } from "@storybook/addon-actions"
import darkBGC from "../../../../.storybook/addonParamater"
import SignInSignUp from "./SignInSignUp"

export default {
  title: "Molecules/Header/SignInSignUp",
  component: SignInSignUp,
}

// action("clicked")
export const LoginAndSignIn = () => (
  <SignInSignUp
    handleLoginClick={action("login click")}
    handleSignInClick={action("sign in click")}
  />
)

LoginAndSignIn.story = {
  parameters: darkBGC,
}
