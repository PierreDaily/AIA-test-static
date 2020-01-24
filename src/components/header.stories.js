import React from "react"
import { action } from "@storybook/addon-actions"
import Header from "./header"

export default {
  title: "Atoms/Header",
  component: Header,
}

export const Text = () => <Header siteTitle="test" />
