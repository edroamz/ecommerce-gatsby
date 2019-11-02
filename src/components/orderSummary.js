import React from "react"
import Img from "gatsby-image"
import P from "./paragraph"
import PropTypes from "prop-types"
import Title from "./title"
import Grid from "./grid"

const OrderSummary = ({ cart, images, total }) => {
  return (
    <>
      <Title
        type="h3"
        className="orderSummary-title"
        text="Order Summary"
      ></Title>
      {cart &&
        cart.map((item, index) => {
          const image = images[item.image]

          return (
            <article key={index}>
              <Grid className="order-summary">
                <Img
                  className="order-summary__img"
                  fluid={image.childImageSharp.fluid}
                  alt={item.name}
                ></Img>
                <div className="order-summary__info">
                  <h4>{item.name}</h4>
                  <P>{item.description}</P>
                </div>
                <div className="order-summary__price">
                  <span>
                    {item.quantity} x ${item.price}
                  </span>
                </div>
                <div className="order-summary__total">
                  <span>${item.total}</span>
                </div>
              </Grid>
            </article>
          )
        })}
      <Grid className="order-amount">
        <h4 className="left">Subtotal</h4>
        <span className="subtotal right">${total}</span>
        <h4 className="left">Shipping</h4>
        <span className="shipping right">Free</span>
        <h4 className="total left">Total</h4>
        <span className="total right" style={{ textAlign: `right` }}>
          ${total}
        </span>
      </Grid>
    </>
  )
}

OrderSummary.propTypes = {
  cart: PropTypes.array.isRequired,
  images: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
}

OrderSummary.defaultProps = {
  cart: [],
  images: {},
  total: 0,
}

export default OrderSummary
