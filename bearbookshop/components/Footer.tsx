import { Button } from './inputs'
import css from './Footer.module.css'
import SvgFacebook from './icons/Facebook'
import SvgInstagram from './icons/Instagram'
import SvgTwitter from './icons/Twitter'
import SvgCurve from './SvgCurve'
import clsx from 'clsx'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={css.root}>
      <div className={css.wave}>
        <SvgCurve />
      </div>
      <main>
        <div className={css.social}>
          <div>
            <h3>Join our mailing list</h3>
            <p>
              Stay updated with Bear Bookshop news, events and special offers.
            </p>
            <a href=" https://bearbookshop.us2.list-manage.com/subscribe/post?u=292674b9d78c14070cd82312e&id=5764299c9e">
              <Button>Subscribe</Button>
            </a>
          </div>
          <div>
            <h3>Say hello!</h3>
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
          </div>
        </div>
        <div className={css.info}>
          <div>
            <h3>Find us</h3>
            <p>
              Bear Bookshop is on Bearwood high street near Tamu Cafe and Why
              Not Coffee, just round the corner from Lightwoods Park.
            </p>
            <p>
              <span>588 Bearwood Road, B66 4BW</span>
            </p>
          </div>
          <div>
            <h3>Opening times</h3>
            <p>
              {/* Open for collection in store only */}
              <br />
              9.30am - 5.00pm on Monday - Saturday
              <br />
              Closed on Sunday
            </p>
          </div>
        </div>
        <hr />
        <div className={css.nav}>
          <div>
            <h4>Contact</h4>
            <p>
              <span>Tel:</span> 0121 794 1959
              <br />
              <span>Email:</span> jenny@bearbookshop.co.uk
            </p>
          </div>
          <div>
            <h4>About</h4>
            <div>
              <a href="/about">Our story</a>
              <a href="/delivery-and-returns">Delivery &amp; Returns</a>
              <a href="/terms-and-conditions">Terms &amp; Conditions</a>
            </div>
          </div>
          <div>
            <h4>My account</h4>
            <div>
              <Link href="/basket">
                <a>My basket</a>
              </Link>
            </div>
          </div>
        </div>
        <div className={css.copyright}>
          <a href="https://bearjam.dev">Bearjam Web Development, 2020</a>
        </div>
        <div className={clsx(css.copyright, 'mt-0')}>
          <a href="https://nikkicooper.co.uk">Photography by Nikki Cooper</a>
        </div>
      </main>
    </div>
  )
}

export default Footer
