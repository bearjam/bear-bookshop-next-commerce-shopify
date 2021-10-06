import SvgFacebook from '~/components/icons/Facebook'
import SvgInstagram from '~/components/icons/Instagram'
import SvgTwitter from '~/components/icons/Twitter'
import { ButtonAnchor, ButtonLink } from '~/components/inputs'
import Link from 'next/link'
import Image from 'next/image'
import css from './visit.module.css'

const Visit = () => {
  return (
    <>
      <div className={css.root}>
        <div className="relative" style={{ height: '32rem' }}>
          <Image
            src="/jenny-open.jpg"
            alt="jenny open"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h2>Visit us</h2>
        <p>
          Bear Bookshop is a light and bright space that welcomes families to
          feel at home. More than just a bookshop, we are a place where your
          children can hear stories and discover books that nurture their
          interests. Learn more about <Link href="/about">our story</Link>.
          {/* <br />
          <br />
          <span>Note: </span>
          In line with government guidance, Bear Bookshop is currently open for
          collection in store only. You can order{" "}
          <Link href="/shop">books</Link> online for delivery or collection. */}
        </p>
        <div className={css.find}>
          <div>
            <h2>Find us</h2>
            <p>
              Bear Bookshop is on Bearwood high street near Tamu Cafe and Why
              Not Coffee, just round the corner from Lightwoods Park.
              <br />
              <br />
              <span>588 Bearwood Road, B66 4BW</span>
            </p>
          </div>
          <div>
            <h2>Opening Hours</h2>
            <p>
              <span>
                9.30am - 5.00pm on Monday - Saturday <br />
                Closed on Sunday
              </span>
            </p>
          </div>
        </div>
        <figure className={css.map}>
          <a href="https://goo.gl/maps/ZX4wGsFZ68Tx3upT7">
            <Image
              src="/map.png"
              alt="Map of Bear Bookshop's location on Bearwood Road"
              width={736}
              height={256}
            />
          </a>
        </figure>
        <h2>Events</h2>
        <p>
          Bear Bookshop is home to a programme of regular events that allow you
          to escape into the magic of stories with your children.
        </p>
        <p>
          <b>Join us for book reading every day Monday to Saturday</b>:
        </p>
        <ul>
          <li>
            <b>10.30am for babies and toddlers</b>
          </li>
          <li>
            <b>3.45pm for ages 5-11</b>
          </li>
        </ul>
        <p>Interested in holding an event with Bear Bookshop?</p>
        <p>
          <b>Get in touch with jenny@bearbookshop.co.uk</b>
        </p>
        <p>
          We share the latest events on social media and newsletter. Join us to
          stay updated!
        </p>
        <div className={css.button}>
          <ButtonAnchor href=" https://bearbookshop.us2.list-manage.com/subscribe/post?u=292674b9d78c14070cd82312e&id=5764299c9e">
            Join Mailing List
          </ButtonAnchor>
        </div>
        <div className={css.icons}>
          <a href="https://facebook.com/bearbookshop">
            <SvgFacebook />
          </a>
          <a href="https://instagram.com/bearbookshop">
            <SvgInstagram />
          </a>
          <a href="https://twitter.com/bookshop_bear">
            <SvgTwitter />
          </a>
        </div>
        <h2>Covid-19</h2>
        <p>
          {/* Bear Bookshop is currently closed to the public. You can still order
          books online for UK delivery or you can collect your order from the
          shop in a pre-arranged time slot. See our{" "}
          <Link href="/delivery-and-returns">Delivery &amp; Returns</Link> page
          for more details.
          <br />
          <br /> */}
          Your safety is our top priority and we have put safety measures in
          place to ensure Bear Bookshop aligns with government standards.
        </p>
        <ul>
          {/* <li>
            One person or household group/bubble is allowed inside at one time
          </li> */}
          <li>Face coverings must be worn unless exempt</li>
          <li>Hand sanitiser and contactless payment is available</li>
          <li>We ask that you do not enter the shop if you have symptoms</li>
        </ul>
        <p>
          <span>Keep the magic of stories going during lockdown.</span>
        </p>
        <div className={css.button}>
          <ButtonLink href="/shop">Shop all books</ButtonLink>
        </div>
      </div>
    </>
  )
}

export default Visit
