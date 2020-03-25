import React from "react"
import PropTypes from "prop-types"
import Title from "../../atoms/title/Title"
import Typography from "../../atoms/text/typography/Typography"
import InterestForm from "../../molecules/form/interest/InterestForm"
import "./SearchPartners.scss"

const SearchPartners = ({ title, content }) => (
  <div className="search-partners-block">
    <Title title={title} variant="h2" />
    <Typography content={content} variant="typo--regular-dark-grey" />
    <InterestForm />
  </div>
)

SearchPartners.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
export default SearchPartners
