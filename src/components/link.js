import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { viewport } from "./breakpoints"

const GatsbyLink = styled(Link)`
  margin: 0;
  padding: 0;
  text-decoration: none;
  background: transparent;
  color: inherit;
  font-weight: 700;
  outline: none;

  &.nav {
    letter-spacing: -0.8px;
    font-size: 0.95em;

    @media ${viewport[4]} {
      font-size: 0.9em;
    }

    @media ${viewport[7]} {
      font-size: 0.8;
    }

    @media ${viewport[9]} {
      font-size: 0.9em;
    }
  }
`

const AnchorLink = styled.a`
  margin: 0;
  padding: 0;
  text-decoration: none;
  background: transparent;
  color: inherit;
  font-weight: 700;
  outline: none;
`

const LinkUp = ({ className, type, url, target, ariaLabel, children }) => {
  if (type.toLowerCase() === "internal") {
    return (
      <GatsbyLink className={className} to={url} aria-label={ariaLabel}>
        {children}
      </GatsbyLink>
    )
  } else if (type.toLowerCase() === "external") {
    return (
      <AnchorLink
        className={className}
        href={url}
        target={target}
        aria-label={ariaLabel}
        rel="noreferrer noopener nofollow"
      >
        {children}
      </AnchorLink>
    )
  } else {
    return <></>
  }
}

LinkUp.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string.isRequired,
}

LinkUp.defaultProps = {
  target: `_blank`,
}

export default LinkUp