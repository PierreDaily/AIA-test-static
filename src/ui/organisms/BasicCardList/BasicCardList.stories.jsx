import React from "react"
import BasicCardList from "./BasicCardList"
import mockCardListData from "../../../data/cardListData"

export default {
  title: "Organisms/BasicCardList",
  component: BasicCardList,
}

export const howItWorks = () => (
  <div>
    <BasicCardList data={mockCardListData} title="How it works" />
  </div>
)
