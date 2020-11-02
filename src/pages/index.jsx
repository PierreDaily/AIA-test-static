import React from "react"
import Header from "../ui/organisms/header/Header"
import BasicCardList from "../ui/organisms/BasicCardList/BasicCardList"
import CategoryCardGrid from "../ui/organisms/categoryCardGrid/CategoryCardGrid"
import Footer from "../ui/organisms/footer/Footer"
import mockCardListData from "../data/cardListData"
import mockCategoryList from "../data/categoryList"
import mockCompanyLinkList from "../data/linkList/company"
import mockGuestList from "../data/guestListData"
import mockPartnersLinkList from "../data/linkList/partners"
import "../scss/template/frontpage.scss"
import GuestPreviewList from "../ui/organisms/GuestPreviewList/GuestPreviewList"
import SearchPartners from "../ui/organisms/searchPartners/SearchPartners"
import { DisplayOnScroll } from "../components/DisplayOnScroll"

const IndexPage = () => {

  return (
    <>
        <Header />
      <DisplayOnScroll>
        <section className="front-page__section">
          <BasicCardList title="How it works" data={mockCardListData} />
        </section>
      </DisplayOnScroll>
      <DisplayOnScroll>
        <section className="front-page__section">
          <GuestPreviewList
            data={mockGuestList}
            title="Meet a partner for your best holiday"
          />
        </section>
      </DisplayOnScroll>

      <DisplayOnScroll>
        <section className="front-page__section">
          <CategoryCardGrid
            data={mockCategoryList}
            title="Discover holiday activity ideas"
          />
        </section>
      </DisplayOnScroll>
      <DisplayOnScroll>
        <section className="front-page__section__search-partners">
          <SearchPartners
            content="Hi! What are your holiday interests ?"
            title="Crate your holiday activity"
          />
        </section>
      </DisplayOnScroll>
      <section className="front-page__section">
        <Footer
          companyLinkList={mockCompanyLinkList}
          partnersLinkList={mockPartnersLinkList}
        />
      </section>
    </>
  )
}

export default IndexPage
