import React from "react"
import { action } from "@storybook/addon-actions"
import darkBGC from "../../../../.storybook/addonParamater"
import Header from "./Header"

export default {
  title: "Organisms/Header",
  component: Header,
}

// action("clicked")
export const header = () => (
  <Header
    handleLoginClick={action("login click")}
    handleSignInClick={action("sign in click")}
  />
)

/* Header.story = {
  parameters: darkBGC,
} */
