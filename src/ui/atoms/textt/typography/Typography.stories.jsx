import React from "react"
import Typography from "./Typography"
import darkBGC from "../../../../../.storybook/addonParamater"

export default {
  title: "Atoms/Text/Typography",
  component: Typography,
}

export const regularWhiteLight = () => (
  <Typography content="How it works" variant="regularWhiteLight" />
)

export const smallGreyLight = () => (
  <Typography content="How it works" variant="smallGreyLight" />
)
export const smallGreyDark = () => (
  <Typography content="Sed-leo-enim-condim" variant="smallGreyDark" />
)

regularWhiteLight.story = {
  parameters: darkBGC,
}
