import React from "react"
import Typography from "./Typography"
import darkBGC from "../../../../../.storybook/addonParamater"

export default {
  title: "Atoms/Text/Typography",
  component: Typography,
}

export const designedBy = () => (
  <Typography content="Designed By" variant="typo--designed-by" />
)

export const regularWhiteLight = () => (
  <Typography content="How it works" variant="typo--regular-white-light" />
)

export const regularDarkGrey = () => (
  <Typography content="How it works" variant="typo--regular-dark-grey" />
)

export const smallBlack = () => (
  <Typography content="How it works" variant="typo--small-black" />
)

export const signature = () => (
  <Typography content="non-grid" variant="typo--signature" />
)

export const smallGreyLight = () => (
  <Typography content="How it works" variant="typo--small-grey-light" />
)
export const smallGreyDark = () => (
  <Typography content="Sed-leo-enim-condim" variant="typo--small-grey-dark" />
)

regularWhiteLight.story = {
  parameters: darkBGC,
}
