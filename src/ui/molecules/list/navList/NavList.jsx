import React from "react"
import PropTypes from "prop-types"
import LinkElement from "../../../atoms/link/listElement/ListElement"
import Typography from "../../../atoms/text/typography/Typography"
import "./NavList.scss"

const NavList = ({ linkList, title }) => (
  <div className="navlist">
    <Typography content={title} variant="typo--small-black" />
    <ul className="nav-list__ul">
      {linkList.map(linkObj => (
        <li>
          <LinkElement content={linkObj.title} url={linkObj.url} />
        </li>
      ))}
    </ul>
  </div>
)

NavList.propTypes = {
  linkList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  title: PropTypes.string.isRequired,
}
export default NavList
