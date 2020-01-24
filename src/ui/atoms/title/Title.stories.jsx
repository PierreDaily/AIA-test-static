import React from "react"
import { action } from "@storybook/addon-actions"
import Title from "./Title"

export default {
  title: "Atoms/Title",
  component: Title,
}

export const h1 = () => <Title title="share your holiday dream" variant="h1" />
export const h2 = () => <Title title="How it works" variant="h2" />
export const h3 = () => <Title title="Sed-leo-enim-condim" variant="h3" />
