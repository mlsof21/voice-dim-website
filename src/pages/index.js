import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <span> This site is still a work in progress </span>
      <h1 style={{ marginBottom: "10px" }}>Features</h1>
      <span>
        Use Voice DIM to interact with DIM without ever leaving your game! Using
        a simple shortcut (defaulted to <code>Ctrl+Shift+0</code>), say what you
        need to happen in DIM (<code>Transfer Gjallarhorn</code>), and you'll
        have it ready for DPS!
      </span>
    </div>
    <ul>
      <li>Move weapons around</li>
      <ul>
        <li>Store weapons in the vault</li>
        <li>Equip a weapon on your current character</li>
        <li>Transfer a weapon</li>
      </ul>
      <li>Equip a loadout</li>
      <li>Equip max power</li>
      <li>Collect postmaster</li>
      <li>Start/Stop farming mode</li>
      <li>Set your own custom commands</li>
    </ul>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
