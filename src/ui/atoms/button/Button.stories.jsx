import React from "react"
import { action } from "@storybook/addon-actions"
import Button from "./Button"

export default {
  title: "Atoms/Button",
  component: Button,
}

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
