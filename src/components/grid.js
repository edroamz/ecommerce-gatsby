import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { viewport } from "./breakpoints"

const Grid = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;

  &.header {
    grid-template-columns: max-content 1em max-content 1fr 1.5em;
    grid-template-areas: "title . nav . svg";

    @media ${viewport[7]} {
      grid-template-columns: max-content 2.5em max-content 1fr 1.5em;
    }

    & .header {
      grid-area: title;
    }

    & nav {
      grid-area: nav;
    }

    & .header-cart {
      grid-area: svg;
      position: relative;

      &.badge:after {
        content: "";
        position: absolute;
        top: -4px;
        right: -6px;
        height: 10px;
        width: 10px;
        background: tomato;
        border-radius: 100%;
      }
    }
  }

  &.category {
    align-items: stretch;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5em;
    grid-template-areas: "women men";
    margin-bottom: 1em;

    @media ${viewport[9]} {
      grid-gap: 1em;
    }

    & .women {
      grid-area: women;
    }

    & .men {
      grid-area: men;
    }
  }

  &.featured {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.75em;

    @media ${viewport[7]} {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media ${viewport[9]} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 1em;
    }
  }

  &.card {
    height: 100%;
    justify-content: stretch;
    background: #fff;
    border: 1px solid #ddd;
    text-align: center;
    transition: all 0.15s;
    border-radius: 4px;
    padding: 0.5em;

    &:hover {
      transform: translate(1px, -2%);
    }
  }

  &.shoemaking {
    grid-template-columns: 1.2fr 1fr;
    grid-column-gap: 2em;

    @media ${viewport[7]} {
      grid-column-gap: 4em;
      grid-template-columns: 1.7fr 1fr;
    }

    @media ${viewport[12]} {
      grid-column-gap: 5.5em;
    }

    & .text {
      justify-self: end;
      text-align: right;
    }
  }

  &.footer {
    align-items: start;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "newsletter newsletter"
      "store orders"
      "social .";
    grid-row-gap: 3em;
    grid-column-gap: 1em;

    @media ${viewport[7]} {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas:
        "newsletter newsletter newsletter"
        "store orders social";
    }

    @media ${viewport[9]} {
      grid-column-gap: 3em;
      grid-template-columns: 1.7fr 1fr 1fr 0.7fr;
      grid-template-areas: "newsletter store orders social";
    }

    & .newsletter {
      grid-area: newsletter;
    }

    & .store {
      grid-area: store;
    }

    & .order {
      grid-area: orders;
    }

    & .social {
      grid-area: social;
    }
  }

  &.payment {
    grid-template-columns: 1fr max-content 1fr;
    grid-template-areas: ". svg .";

    & .payment-svg {
      grid-area: svg;
      height: 38px;

      @media ${viewport[7]} {
        height: 44px;
      }

      @media ${viewport[12]} {
        height: 48px;
      }

      & span {
        &:not(:first-child) {
          margin-left: 10px;
        }

        & svg {
          width: 38px;
          height: 38px;

          @media ${viewport[7]} {
            width: 44px;
            height: 44px;
          }

          @media ${viewport[12]} {
            width: 48px;
            height: 48px;
          }
        }
      }
    }
  }

  /* &.cartProcess {
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    align-items: stretch;
    background-color: rgb(245, 245, 245);
  } */

  &.cartInfo,
  &.error {
    text-align: center;
  }

  &.checkout {
    grid-template-columns: 1fr;
    grid-row-gap: 1.5em;
    grid-template-areas:
      "summary"
      "payment";

    & .payment {
      grid-area: payment;
      border-radius: 8px;
      border: 1px solid #ddd;
      padding: 2em 1.25em;

      @media ${viewport[7]} {
        align-self: start;
        padding-top: 2em;
        padding: 2em;
        border: 0;
      }
    }

    & .summary {
      grid-area: summary;
      border-radius: 8px;
      /* box-shadow: 1px 2px 7px 1px #e5e5e5; */
      /* box-shadow: -2px 1px 12px 1px #e5e5e5; */
      border: 1px solid #ddd;
      padding: 2em 1.25em;

      @media ${viewport[7]} {
        align-self: start;
      }

      @media ${viewport[9]} {
        padding: 2em;
      }
    }

    @media ${viewport[7]} {
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "payment summary";
      grid-column-gap: 1em;
    }

    @media ${viewport[9]} {
      grid-template-columns: 1.5fr 1fr;
      grid-column-gap: 0;
    }

    @media ${viewport[12]} {
      grid-template-columns: 2fr 1fr;
      grid-template-areas: "payment summary";
    }
  }

  &.order-summary {
    margin-top: 1em;
    grid-template-columns: max-content 2fr 1fr 1fr;
    grid-column-gap: 1em;
    grid-template-areas: "img info price total";

    & .order-summary__img {
      grid-area: img;
      width: 60px;

      @media ${viewport[12]} {
        width: 80px;
      }
    }

    & .order-summary__info {
      grid-area: info;
      align-self: baseline;

      & h4 {
        margin-bottom: 0.25em;
      }

      & span {
        font-size: 0.8em;
        line-height: 1.4;
      }
    }

    & .order-summary__price {
      grid-area: price;
      align-self: center;
      font-size: 0.85em;
      text-align: right;
    }

    & .order-summary__total {
      grid-area: total;
      align-self: center;
      color: rgb(187, 120, 120);
      font-weight: 700;
      font-size: 0.85em;
      text-align: right;
    }
  }

  &.order-amount {
    padding-top: 3em;
    grid-template-columns: 1fr 1fr;

    @media ${viewport[7]} {
      padding-top: 1.5em;
    }

    & .left {
      justify-self: start;
      margin-bottom: 0.35em;
      font-size: 0.9em;
    }

    & .right {
      justify-self: end;
      margin-bottom: 0.35em;
      font-size: 0.9em;
    }

    & .subtotal,
    & .shipping {
      color: rgb(187, 120, 120);
      font-weight: 700;
    }

    & .shipping {
      font-size: 0.85em;
    }

    & .total {
      justify-self: stretch;
      align-self: start;
      font-size: 1.25em;
      margin-top: 0.35em;
      padding-top: 1em;
      border-top: 1px solid #ddd;
      color: rgb(146, 93, 93);
      font-weight: 900;

      @media ${viewport[7]} {
        margin-top: 0.5em;
        padding-top: 1.5em;
      }
    }
  }

  &.payment-details {
    grid-template-columns: 1fr;

    & .details {
      align-self: start;
      justify-self: center;
      width: 100%;

      @media ${viewport[9]} {
        width: 80%;
        max-width: 600px;
      }

      @media ${viewport[12]} {
        width: 60%;
      }

      & .email-label {
        font-weight: 700;
        display: block;
        margin-bottom: 0.5em;
      }

      & .email-input {
        font-size: 0.9em;
        outline: none;
      }

      & .email-input,
      & .creditCard-input {
        width: 100%;
        padding: 0.65rem 1rem;
        /* border: 1px solid #ddd; */
        border: none;
        margin: 0.5em 0;
        /* box-shadow: 1px 1px 2px 1px #ccc; */
        border: 1px solid #aaa;
      }

      & .creditCard-label {
        font-weight: 700;
        display: block;
        margin-bottom: 0.5em;
        margin-top: 2.25em;
      }

      & .creditCard-note {
        font-size: 0.7em;
        line-height: 1.25;
        margin-top: 0.75em;
        margin-bottom: 0.75em;
        display: block;
        letter-spacing: 0.2px;
        color: #888;
      }
    }
  }

  &.product {
    grid-template-columns: 1.2fr 1fr;
    grid-template-areas:
      "image info"
      "details details"
      "reviews reviews";
    grid-row-gap: 3em;
    grid-column-gap: 0.5em;

    @media ${viewport[4]} {
      grid-template-columns: 1fr 1fr;
    }

    @media ${viewport[7]} {
      grid-template-columns: 1fr 1.2fr;
      grid-column-gap: 2.75em;
      grid-row-gap: 1em;
    }

    @media ${viewport[12]} {
      grid-template-columns: 1fr 1.55fr;
      grid-column-gap: 5em;
      grid-row-gap: 0;
      grid-template-areas:
        "image info"
        ". details"
        "reviews reviews";
    }

    & .product-image {
      grid-area: image;
    }

    & .product-info {
      grid-area: info;
      align-self: start;
    }

    & .product-details {
      grid-area: details;
      border-top: 1px solid #ddd;
      padding-top: 2em;

      @media ${viewport[7]} {
        padding-top: 2.2em;
      }
    }

    & .product-reviews {
      grid-area: reviews;
    }
  }

  &.productContainer {
    grid-template-columns: 1fr;
    grid-template-areas:
      "filter"
      "products";
    align-items: start;
    grid-gap: 1em;

    & .filter {
      grid-area: filter;

      & .filter-range {
        width: 300px;
        margin: 0.35em auto 1em auto;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas:
          "slider slider slider"
          "min . max";
        grid-row-gap: 0.35em;
        visibility: hidden;
        height: 0;
        opacity: 0;
        transition: all 0.1s;

        &.show {
          visibility: visible;
          height: initial;
          opacity: 1;
        }

        & .slider {
          grid-area: slider;
        }

        & .min {
          grid-area: min;
        }

        & .max {
          grid-area: max;
          justify-self: end;
        }
      }
    }

    & .products {
      grid-area: products;

      & .productList {
        display: grid;
        align-items: stretch;
        grid-gap: 0.75em;
        grid-template-columns: 1fr 1fr;

        @media ${viewport[7]} {
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 1em 0.5em;
        }

        @media ${viewport[9]} {
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-gap: 1.5em;
        }
      }
    }
  }
`

const GridContainer = ({ className, children }) => {
  return <Grid className={className}>{children}</Grid>
}

Grid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default GridContainer
