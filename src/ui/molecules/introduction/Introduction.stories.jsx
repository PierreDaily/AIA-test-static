import React from "react"
import darkBGC from "../../../../.storybook/addonParamater"
import Introduction from "./Introduction"

export default {
  title: "Molecules/Header/Introduction",
  component: Introduction,
}

export const Intro = () => <Introduction />

Intro.story = {
  parameters: darkBGC,
}
