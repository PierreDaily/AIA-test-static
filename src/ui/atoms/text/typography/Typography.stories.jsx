import React from "react"
import Typography from "./Typography"
import darkBGC from "../../../../../.storybook/addonParamater"

export default {
  title: "Atoms/Text/Typography",
  component: Typography,
}

export const designedBy = () => (
  <Typography content="Designed By" variant="typo__designed-by" />
)

export const regularWhiteLight = () => (
  <Typography content="How it works" variant="typo__regular__white-light" />
)

export const regularDarkGrey = () => (
  <Typography content="How it works" variant="typo__regular__dark-grey" />
)

export const smallBlack = () => (
  <Typography content="How it works" variant="typo__small__black" />
)

export const smallGreyLight = () => (
  <Typography content="How it works" variant="typo__small__grey-light" />
)
export const smallGreyDark = () => (
  <Typography content="Sed-leo-enim-condim" variant="typo__small__grey-dark" />
)

regularWhiteLight.story = {
  parameters: darkBGC,
}
