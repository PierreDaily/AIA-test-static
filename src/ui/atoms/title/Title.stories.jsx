import React from "react"
import darkBGC from "../../../../.storybook/addonParamater"
import Title from "./Title"

export default {
  title: "Atoms/Text/Title",
  component: Title,
}

export const h1 = () => <Title title="share your holiday dream" variant="h1" />
export const h1Subtitle = () => (
  <Title title="holiday holiday" variant="h1Subtitle" />
)
export const h2 = () => <Title title="How it works" variant="h2" />
export const h3 = () => <Title title="Sed-leo-enim-condim" variant="h3" />

h1.story = {
  parameters: darkBGC,
}

h1Subtitle.story = {
  parameters: darkBGC,
}

h3.story = {
  parameters: darkBGC,
}
