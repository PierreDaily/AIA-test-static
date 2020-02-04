import React from "react"
import Footer from "./Footer"
import mockCompanyLinkList from "../../../data/linkList/company"
import mockPartnersLinkList from "../../../data/linkList/partners"

export default {
  title: "Organisms",
  component: Footer,
}

export const footer = () => (
  <Footer
    companyLinkList={mockCompanyLinkList}
    partnersLinkList={mockPartnersLinkList}
  />
)
