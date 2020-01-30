import React from "react"

import Header from "../ui/organisms/header/Header"
import BasicCardList from "../ui/organisms/BasicCardList/BasicCardList"
import mockCardListData from "../data/cardListData"
import "../scss/template/frontpage.scss"

const IndexPage = () => (
  <>
    <Header />
    <section className="front-page__section__card-list">
      <BasicCardList title="How it works" data={mockCardListData} />
    </section>
  </>
)

export default IndexPage
