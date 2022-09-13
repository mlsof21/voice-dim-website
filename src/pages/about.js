import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <h1>About Me</h1>
    <p>Just a guy that enjoys doing fun projects like this one.</p>
  </Layout>
)

export const Head = () => <Seo title="About" />

export default About
