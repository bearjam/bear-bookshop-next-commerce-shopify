import React from 'react'
import css from './delivery.module.css'
import Link from 'next/link'

const delivery = () => {
  return (
    <div className={css.root}>
      <div>
        <h3>Delivery</h3>
        <ul>
          <li>
            Bear Bookshop currently delivers within the UK only via Royal Mail.
            Delivery is calculated at the checkout based on the weight and
            dimensions of your parcel.
          </li>
          <li>
            Shipping costs will be displayed during the checkout process before
            you submit your payment.
          </li>
          <li>
            Items are usually dispatched within 2-3 working days after an order
            has been placed. Please allow 5-7 days in total for the arrival of
            your parcel as delivery can take longer than expected in the current
            climate.
          </li>
          <li>
            If you have any questions about delivery options, please get in
            touch with jenny@bearbookshop.co.uk
          </li>
        </ul>
      </div>
      <div>
        <h3>Collection</h3>
        <ul>
          <li>
            Collection in store is free of charge. You can select this option
            during the checkout process, before you submit your payment.
          </li>

          <li>
            If you choose to collect your order, you will first receive a
            confirmation of your order, then we will email you to arrange a time
            slot for collection.
          </li>
          <li>
            One person or household group/bubble are allowed in the shop for
            collection at one time. Face coverings must be worn unless exempt.
          </li>
          <li>
            You will need to bring your order confirmation and ID to verify your
            order.
          </li>
          <li>
            Please see our{' '}
            <Link href="/visit">
              <a>visit page</a>
            </Link>{' '}
            for details on collecting your order safely during lockdown.
          </li>
        </ul>
      </div>
      <div>
        <h3>Returns</h3>
        <ul>
          <li>
            If you change your mind about your order you can exchange it within
            14 days for an item of the same value. Items must be unused and in
            original packaging.
          </li>

          <li>
            Let us know which new item you'd like instead so we can check
            availability and reserve it for you.
          </li>
          <li>
            Please return items to Bear Bookshop, 588 Bearwood Road, B66 4BW
          </li>
          <li>
            We recommend using recorded delivery and keeping your proof of
            postage receipt as we cannot take responsibility for items lost in
            the post.
          </li>
          <li>
            We will not be able to refund the postage or delivery charge for
            non-faulty items.
          </li>
          <li>
            Exchanged items will be dispatched once the original item has been
            received.
          </li>
        </ul>
      </div>
      <div>
        <h2>Faulty Goods</h2>
        <ul>
          <li>
            We hope that all our items are as you expect and are very sorry if
            you receive a faulty item. Please email jenny@bearbookshop.co.uk
            with details and, if possible, a photo of the issue.
          </li>
          <li>
            Follow the returns procedure to send the faulty item back to us.
            Once we have received the item, if it is found to be faulty, we will
            refund your postage.
          </li>
          <li>
            We can either exchange the item free of charge, or refund the
            original purchase cost including delivery.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default delivery
