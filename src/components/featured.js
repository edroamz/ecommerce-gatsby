import React from "react"
import Section from "./section"
import Wrapper from "./wrapper"
import Grid from "./grid"
import Flex from "./flex"
import Card from "./card"
import Title from "./title"
import P from "./paragraph"
import items from "../content/products.json"
import useImages from "../hooks/useImages"
import { ArrowRight } from "./svg"
import Heading from "./heading"

const Featured = () => {
  let featuredProducts = items.filter(product => product.featured === true)
  const images = useImages()

  return (
    <Section className="featured">
      <Wrapper>
        <Title
          type="h3"
          className="featured"
          text="Featured Products"
          placement="center"
        ></Title>
        <Grid className="featured">
          {featuredProducts.map(item => {
            const image = images[item.image]

            return <Card key={item.id} item={item} imageGraphQL={image}></Card>
          })}
        </Grid>
        <Grid>
          <Flex className="featured">
            <P className="featured">Discover more</P>
            <span>{ArrowRight}</span>
          </Flex>
        </Grid>
      </Wrapper>
    </Section>
  )
}

export default Featured
