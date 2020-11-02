import React from "react"
import PropTypes from "prop-types"
import { useInView } from "react-intersection-observer"
import "./DisplayOnScroll.scss"

const DisplayOnScroll = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    delay: 0,
    triggerOnce: true,
  })
  if (React.Children.count(children) === 1)
    return (
      <>
        {React.cloneElement(children, {
          ...children.props,
          ref,
          className: `${(children.props && children.props.className) || ""} ${
            inView ? "block-animation--primary" : "block-animation--hidden"
          }`,
        })}
      </>
    )

  return (
    <div
      ref={ref}
      className={`${
        inView ? "block-animation--primary" : "block-animation--hidden"
      }`}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child, { ...child.props })
      )}
    </div>
  )
}

DisplayOnScroll.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export { DisplayOnScroll }
