import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/style.css"
import Quote from '../components/quote'

const IndexPage = ({data : { allContentfulQuotes }}) => (
  <Layout>
    <Quote quote={allContentfulQuotes.edges} />
  </Layout>
)

export default IndexPage
export const query = graphql`
{
  allContentfulQuotes {
    edges {
      node {
        author
        quote {
          quote
        }
      }
    }
  }
}
`