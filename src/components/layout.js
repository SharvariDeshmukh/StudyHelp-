/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


import "./layout.css"
import "./bootstrap.min.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer className="footer">
          © {new Date().getFullYear()},Designed by  
          {` `}
          <a target="_blank" href="https://linkedin.com/in/sharvari-deshmukh-27136b169">Sharvari Deshmukh</a>
{` `}
          <a target="_blank" href="https://forms.gle/Pgu94HwDsDX845FA6">---|Contact Us</a>

        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
