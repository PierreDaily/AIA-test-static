import React from "react"
import { action } from "@storybook/addon-actions"
import darkBGC from "../../../../.storybook/addonParamater"
import Button from "./Button"

export default {
  title: "Atoms/Button",
  component: Button,
}

export const login = () => (
  <Button label="Login" handleClick={action("clicked")} variant="btn--login" />
)

export const signIn = () => (
  <Button
    label="Sign up"
    handleClick={action("clicked")}
    variant="btn--sign-up"
  />
)

export const redBackground = () => (
  <Button
    label="Find your holiday partner"
    handleClick={action("clicked")}
    variant="btn--action-red-bgc"
  />
)

export const whiteBackground = () => (
  <Button
    label="Find your holiday partner"
    handleClick={action("clicked")}
    variant="btn--action-white-bgc"
  />
)

export const redBackgroundFluid = () => (
  <Button
    label="Find your holiday partner"
    handleClick={action("clicked")}
    variant="btn--red-bgc-fluid"
  />
)

login.story = {
  parameters: darkBGC,
}

signIn.story = {
  parameters: darkBGC,
}
