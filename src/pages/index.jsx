import React from "react"
import { Link } from "gatsby"
import "normalize.css"
import "../scss/font.scss"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from "../ui/atoms/button/Button"
import Title from "../ui/atoms/title/Title"

const IndexPage = () => (
  <Layout>
    <Title title="dffsf" variant="h1" />
    <Button label="Click Me" handleClick={() => console.log("test")} />
    <SEO title="AIA UI TEST" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
