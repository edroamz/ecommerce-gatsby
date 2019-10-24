import React, { useContext } from "react"
import { GlobalDispatchContext } from "../context/GlobalContextProvider"
import Grid from "./grid"
import { CardElement, injectStripe } from "react-stripe-elements"
import styled from "styled-components"
import Title from "./title"
import P from "./paragraph"

const Button = styled.button`
  &.pay {
    display: inline-block;
    cursor: pointer;
    background: rgb(187, 120, 120);
    color: #fff;
    padding: 0.75em 1.2em;
    border-radius: 2px;
    width: 100%;
    margin: 2em auto 0 auto;
    text-align: center;
    border: none;

    &:hover {
      background: rgb(146, 93, 93);
    }
  }
`

const Checkout = ({ total, idempotencyKey, stripe }) => {
  const dispatch = useContext(GlobalDispatchContext)

  async function submit(ev) {
    ev.preventDefault()

    const displayError = document.getElementById("card-errors")
    const email = document.getElementById("email")

    let { token, error } = await stripe.createToken({
      name: "User",
    })
    // console.log(token, error)

    if (error) {
      displayError.textContent = error.message
    } else {
      displayError.textContent = ""

      try {
        let response = await fetch("/.netlify/functions/index", {
          method: "POST",
          body: JSON.stringify({
            stripeToken: token.id,
            stripeAmt: total * 100,
            stripeIdempotency: idempotencyKey,
            stripeEmail: email.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })

        console.log(response)

        if (response.ok) {
          // this.setState({ complete: true })
          console.log("Purchase Complete!")

          dispatch({ type: "PURCHASE_SUCCESSFUL" })
        }
      } catch (error) {
        console.log(error.message)
        return
      }
    }
  }

  return (
    <>
      <Grid className="payment-details">
        <div className="details">
          <Title
            type="h3"
            className="payment-title"
            text="Payment Information"
          ></Title>
          <P>Please enter your payment details below</P>
          <label className="email-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="email-input"
            placeholder="name@example.com"
          />
          <label className="creditCard-label" htmlFor="creditCard">
            Credit Card
          </label>
          <CardElement
            className="creditCard-input"
            onChange={event => {
              const displayError = document.getElementById("card-errors")
              if (event.error) {
                displayError.textContent = event.error.message
              } else {
                displayError.textContent = ""
              }
            }}
          />
          <div id="card-errors" role="alert" className="card-errors"></div>
          <Button className="pay" onClick={submit}>
            Pay with credit card
          </Button>
        </div>
      </Grid>
    </>
  )
}

export default injectStripe(Checkout)
