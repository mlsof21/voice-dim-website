import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <h1>About</h1>
    <p>
      AsDevilsRun (the main Voice DIM QA) and I (Sherret, the dev) are avid
      Destiny players. Devils is the ideas man while I try to develop them. I
      have written countless scripts to help some of these ideas come to
      fruition.
    </p>
  </Layout>
)

export const Head = () => <Seo title="About" />

export default About
