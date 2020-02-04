import React from "react"
import PropTypes from "prop-types"
import Category from "../../molecules/card/category/Category"
import Title from "../../atoms/title/Title"
import "./CategoryCardGrid.scss"

const CategoryCardGrid = ({ data, title }) => (
  <div className="category">
    <Title variant="h2" title={title} />
    <div className="category-card-grid">
      {data.map(categoryTitle => (
        <Category category={categoryTitle} key={categoryTitle} />
      ))}
    </div>
  </div>
)

CategoryCardGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
}
export default CategoryCardGrid
