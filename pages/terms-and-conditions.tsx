import React from "react"
import css from "./terms.module.css"

const terms = () => {
  return (
    <div className={css.root}>
      <h2>Terms &amp; Conditions</h2>
      <div>
        <h3>Availability</h3>
        <ul>
          <li>
            When you place an order with Bear Bookshop, you are making an offer
            to buy goods. Once we have reviewed your order and checked the price
            and availability of goods we will email you to confirm that we
            accept your order.
          </li>
          <li>
            If Bear Bookshop has insufficient stock to deliver the goods you
            have ordered, or there is a price discrepancy, we will inform you by
            email at the address given in your order form and allow you the
            option to cancel your order or purchase at the revised price.
          </li>
          <li>
            Prices are as stated on the website and are subject to change at any
            time without notice.
          </li>
        </ul>
      </div>
      <div>
        <h3>Pricing and Currency</h3>
        <ul>
          <li>
            The total cost of your order reflects the price of the items ordered
            plus shipping fees for postage.
          </li>
          <li>
            All products are priced in pounds sterling (£) and prices include UK
            Value Added Tax where applicable. Bear Bookshop reserves the right
            to change prices at any time.
          </li>
        </ul>
      </div>
      <div>
        <h3>Payment</h3>
        <ul>
          <li>
            Upon receiving your order, all credit and debit card holders are
            subject to validation checks and authorisation by the card issuer.
            Items will not be dispatched until these checks are complete and
            payment received.
          </li>
          <li>
            If we are unable to authorise payment, your order will not be
            accepted and Bear Bookshop will not be liable for any delay or
            non-delivery.
          </li>
        </ul>
      </div>
      <div>
        <h3>Data Protection</h3>
        <ul>
          <li>
            Bear Bookshop will keep a record of your name, email and address
            details with the intention of sending your order. We will never make
            your personal details available to third-party companies for
            marketing purposes.
          </li>
          <li>
            We use a third-party service for payment processing called Stripe.
            We will not store or collect your payment card details. That
            information is provided directly to Stripe whose use of your
            personal information is governed by their Privacy Policy.
          </li>
          <li>
            Stripe’s Privacy Policy can be viewed here:
            <a href="https://stripe.com/en-gb/privacy" className="underline">
              {" "}
              Stripe Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Cookie Policy</h3>
        <ul>
          <li>
            Cookies are small text files located in web browser directories.
            They are used to help users navigate websites efficiently and
            perform certain functions. A cookie file is stored in your web
            browser and allows the website to recognise you and make your next
            visit easier.
          </li>
          <li>
            We use cookies to enable certain functions of the website, to
            provide analytics and to store your preferences
          </li>
          <li>
            If you wish to delete your cookies, please see the help pages for
            your internet browser.
          </li>
        </ul>
      </div>
      <div>
        <h3>Image Credits</h3>
        <p>
          Thank you to the following authors (source:{" "}
          <a href="https://unsplash.com/">Unsplash)</a>:
          <br />
          Picsea, Johnathan Borba, Catherine Hammond, Andrew Ebrahim, Eliott
          Reyna, Timothy Eberly, Element5 Digital
        </p>
      </div>
    </div>
  )
}

export default terms
