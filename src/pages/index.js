import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data.allDodgyShopsCsv.edges)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>黑店list</h1>
      <table>
          <thead>
            <tr>
              <th>黑店</th>
              <th>地區</th>
              <th>地址</th>
            </tr>
          </thead>
          <tbody>
            {data.allDodgyShopsCsv.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.name_zh}</td>
                <td>{node.sub_district_zh}</td>
                <td>{node.address_zh}</td>
              </tr>
            ))}
          </tbody>
        </table>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>

  )
}

export default IndexPage

export const IndexQuery = graphql`
  query {
    allDodgyShopsCsv {
      edges {
        node {
          name_zh
          sub_district_zh
          address_zh
          details
        }
      }
    }
  }
`