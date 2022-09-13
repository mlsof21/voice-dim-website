import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ menuLinks }) => (
  <header style={{ backgroundColor: "black", color: "white" }}>
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/">
          <StaticImage
            alt="voice dim logo"
            src={"../images/icon_large.png"}
            loading="eager"
            quality={100}
            width={80}
            style={{ padding: "5px", margin: "10px" }}
          />
        </Link>
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            verticalAlign: "center",
            height: "3rem",
          }}
        >
          Voice DIM
        </h1>
      </div>
      <ul style={{ display: "flex", textAlign: "right" }}>
        {menuLinks.map((link, index) => (
          <li
            key={link.name}
            style={{
              listStyleType: "none",
              padding: "1rem",
              marginTop: ".5rem",
              borderRight:
                index !== menuLinks.length - 1 ? "solid 1px white" : "",
            }}
          >
            {link.name.includes("Download") ? (
              <a
                href={link.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                  textDecoration: "none",
                }}
              >
                {link.name}
              </a>
            ) : (
              <Link
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                  textDecoration: "none",
                }}
                to={link.link}
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
