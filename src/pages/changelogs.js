import Markdown from "marked-react"
import * as React from "react"
import { useEffect, useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Changelogs = () => {
  const [changelogs, setChangelogs] = useState()
  useEffect(() => {
    const fetchChangelog = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/mlsof21/voice-dim/master/CHANGELOG.md"
      )
      const body = await response.text()

      setChangelogs(body)
    }
    fetchChangelog()
  }, [changelogs, setChangelogs])

  return (
    <Layout>
      <Markdown value={changelogs} />
    </Layout>
  )
}

export const Head = () => <Seo title="Changelogs" />

export default Changelogs
