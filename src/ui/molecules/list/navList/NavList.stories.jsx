import React from "react"
import NavList from "./NavList"
import mockCompanyLinkList from "../../../../data/linkList/company"

export default {
  title: "Molecules/List",
  component: NavList,
}

export const navList = () => (
  <NavList linkList={mockCompanyLinkList} title="Company" />
)
