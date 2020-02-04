import React from "react"

import Header from "../ui/organisms/header/Header"
import BasicCardList from "../ui/organisms/BasicCardList/BasicCardList"
import CategoryCardGrid from "../ui/organisms/categoryCardGrid/CategoryCardGrid"
import mockCardListData from "../data/cardListData"
import mockCategoryList from "../data/categoryList"
import mockGuestList from "../data/guestListData"
import "../scss/template/frontpage.scss"
import GuestPreviewList from "../ui/organisms/GuestPreviewList/GuestPreviewList"
import SearchPartners from "../ui/organisms/searchPartners/SearchPartners"

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
    <section className="front-page__section">
      <CategoryCardGrid
        data={mockCategoryList}
        title="Discover holiday activity ideas"
      />
    </section>
    <section className="front-page___section__search-partners">
      <SearchPartners
        content="Hi! What are your holiday interests ?"
        title="Crate your holiday activity"
      />
    </section>
  </>
)

export default IndexPage
