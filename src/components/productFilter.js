import React from "react"
import styled from "styled-components"
import Section from "./section"
import Grid from "./grid"
import Flex from "./flex"
import P from "./paragraph"
import { ArrowDown, ArrowUp } from "./svg"
import PropTypes from "prop-types"
import useFilterState from "../hooks/useFilterState"

const FilterSvg = styled.span`
  height: 18px;
  margin-left: 0.2em;

  & svg {
    height: 100%;
    vertical-align: baseline !important;
  }
`

const Slider = styled.input`
  margin-top: 0.25em;
  padding: 0.2em 0;
  cursor: pointer;
`

const ProductFilter = ({ products, filterByPrice }) => {
  const {
    maxPrice,
    minPrice,
    price,
    filterIsShowing,
    toggle,
    handleChange,
  } = useFilterState(products, filterByPrice)

  return (
    <Section className="filter">
      <Grid>
        <Flex className="filter" onClick={toggle}>
          <P style={{ margin: 0, fontSize: "0.92em" }}>
            Price{" "}
            <span
              style={{
                fontWeight: 800,
                fontSize: "1.25em",
                marginLeft: "5px",
              }}
            >
              ${price}
            </span>
          </P>
          <FilterSvg>{filterIsShowing ? ArrowUp : ArrowDown}</FilterSvg>
        </Flex>
      </Grid>
      <Grid className={filterIsShowing ? "filter-range show" : "filter-range"}>
        <Slider
          className="slider"
          type="range"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={handleChange}
        />
        <span className="min">${minPrice}</span>
        <span className="max">${maxPrice}</span>
      </Grid>
    </Section>
  )
}

ProductFilter.propTypes = {
  products: PropTypes.array.isRequired,
  filterByPrice: PropTypes.func.isRequired,
}

ProductFilter.defaultProps = {
  products: [],
  filterByPrice: {},
}

export default ProductFilter
