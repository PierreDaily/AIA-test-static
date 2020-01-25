import React from "react"
import { action } from "@storybook/addon-actions"
import darkBGC from "../../../../.storybook/addonParamater"
import Button from "./Button"

export default {
  title: "Atoms/Button",
  component: Button,
}

export const noBGCNoBorder = () => (
  <Button
    label="Login"
    handleClick={action("clicked")}
    variant="noBGCNoBorder"
  />
)

export const noBGCWithBorder = () => (
  <Button
    label="Sign up"
    handleClick={action("clicked")}
    variant="noBGCWithBorder"
  />
)

export const redBackground = () => (
  <Button label="Find your holiday partner" handleClick={action("clicked")} />
)

export const whiteBackground = () => (
  <Button
    label="Find your holiday partner"
    handleClick={action("clicked")}
    variant="whiteBackground"
  />
)

noBGCNoBorder.story = {
  parameters: darkBGC,
}

noBGCWithBorder.story = {
  parameters: darkBGC,
}
