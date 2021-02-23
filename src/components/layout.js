/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

  React.useEffect(() => {
    var youbora = require('youboralib')
    require('youbora-adapter-html5')
    var plugin = new youbora.Plugin({ accountCode: 'powerce', 'username': 'czpta' })
    plugin.setOptions({
        'content.isLive': false,
        'content.title': 'trailer.mp4'
    }) // Set metadata options, see below.
    plugin.setAdapter(new youbora.adapters.Html5('player')) // Attach adapter
  }, []);

  

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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, See source code on
          {` `}
          <a href="https://github.com/czpta/npaw-gatsby-starter">Github</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
