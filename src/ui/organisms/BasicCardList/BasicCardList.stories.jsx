import React from "react"
import BasicCardList from "./BasicCardList"
import mockCardListData from "../../../data/cardListData"

export default {
  title: "Organisms/CardList",
  component: BasicCardList,
}

export const basic = () => (
  <div>
    <BasicCardList data={mockCardListData} title="How it works" />
  </div>
)
