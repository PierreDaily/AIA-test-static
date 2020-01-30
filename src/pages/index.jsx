import React from "react"

import Header from "../ui/organisms/header/Header"
import BasicCardList from "../ui/organisms/BasicCardList/BasicCardList"
import mockCardListData from "../data/cardListData"
import "../scss/template/frontpage.scss"
import GuestPreviewList from "../ui/organisms/GuestPreviewList/GuestPreviewList"
import mockGuestList from "../data/guestListData"

const IndexPage = () => (
  <>
    <Header />
    <section className="front-page__section">
      <BasicCardList title="How it works" data={mockCardListData} />
    </section>
    <section className="front-page__section">
      <GuestPreviewList
        data={mockGuestList}
        title="Meet a partner for your best holiday"
      />
    </section>
  </>
)

export default IndexPage
