import React from "react"
import Basic from "./Basic"
import darkBGC from "../../../../../.storybook/addonParamater"

export default {
  title: "Molecules/Card",
  component: Basic,
}

export const basic = () => (
  <Basic
    content="Quisque libero liber, Quisque libero liber. Quisque libero liber. Quisque libero liber, Quisque libero liber. Quisque libero liber."
    title="sed leo enim, condimentum
"
    stepIndex={1}
  />
)

basic.story = {
  parameters: darkBGC,
}
