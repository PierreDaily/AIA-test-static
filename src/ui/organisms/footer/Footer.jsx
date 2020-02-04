import React from "react"
import PropTypes from "prop-types"
import "./Footer.scss"
import Title from "../../atoms/title/Title"
import Typography from "../../atoms/text/typography/Typography"
import NavList from "../../molecules/list/navList/NavList"

const Footer = ({ companyLinkList, partnersLinkList }) => (
  <footer className="footer">
    <Title title="holiday holiday" variant="h4" />
    <NavList linkList={companyLinkList} title="Company" />
    <NavList linkList={partnersLinkList} title="Partners" />
    <div>
      <Typography content="designed by" variant="typo__designed-by" />
      <Typography content="non-grid" variant="typo__signature" />
    </div>
  </footer>
)

Footer.propTypes = {
  companyLinkList: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  partnersLinkList: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
}

export default Footer
