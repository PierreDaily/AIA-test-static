import React from "react"
import Typography from "./Typography"
import darkBGC from "../../../../../.storybook/addonParamater"

export default {
  title: "Atoms/Text/Typography",
  component: Typography,
}

export const bigWhite = () => (
  <Typography content="share your holiday dream" variant="bigWhite" />
)
export const smallGreyLight = () => (
  <Typography content="How it works" variant="smallGreyLight" />
)
export const smallGreyDark = () => (
  <Typography content="Sed-leo-enim-condim" variant="smallGreyDark" />
)

bigWhite.story = {
  parameters: darkBGC,
}
