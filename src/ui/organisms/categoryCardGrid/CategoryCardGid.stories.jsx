import React from "react"
import CategoryCardGrid from "./CategoryCardGrid"
import mockData from "../../../data/categoryList"

export default {
  title: "Organisms/CardList",
  component: CategoryCardGrid,
}

export const category = () => (
  <div>
    <CategoryCardGrid data={mockData} title="Discover holiday activity ideas" />
  </div>
)
