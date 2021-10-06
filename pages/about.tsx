import SvgFacebook from '~/components/icons/Facebook'
import SvgInstagram from '~/components/icons/Instagram'
import SvgTwitter from '~/components/icons/Twitter'
import { ButtonLink } from '~/components/inputs'
import Image from 'next/image'
import css from './about.module.css'

const About = () => {
  return (
    <div className={css.root}>
      <h2>Our story</h2>
      <div className={css['jenny-portrait']}>
        <Image
          src="/jenny-portrait.jpg"
          alt="Jenny"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <p>
        Bear Bookshop began as a dream… a long held fantasy of owning a bookshop
        and surrounding myself with books all day long! After having three
        children of my own and living in Bearwood for 7 years, I decided to make
        it a reality. Bear Bookshop aims to be a place that develops and
        encourages a child’s enjoyment of reading, love of learning and sense of
        wonder. More than just a bookshop, we want to be a community resource, a
        place where your children can listen to stories and find books and
        resources to nurture their interests and help them to learn about the
        world around them.
      </p>
      <p>
        After spending 15 years working as a teacher, I know how much parents
        want to support their children’s learning and encourage their success.
        As a mother, I know how much parents want their children to feel that
        learning is a pleasure rather than a chore. At Bear Bookshop, we want to
        help children and parents experience the joy of reading and learning. To
        encourage our children to experience more adventures and less screens.
      </p>
      <p>
        More confidence and less worry. More stories. More curiosity. More play.
        More resilience. More imagination. And more joy.
      </p>

      <h2>Get in touch</h2>
      <div className={css.contact}>
        <p>
          My inbox is always open if you have any questions.
          <br />
          <br /> Authors, illustrators and publishers are welcome to send me an
          email about stocking your books.
        </p>
        <div>
          <p>
            You can reach me at: <span>jenny@bearbookshop.co.uk</span> <br />
            <br />
            Or say hello on social media:
          </p>
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
      {/* <h6>
        If you’re in Bearwood, give us a wave from the window! We can't wait to
        welcome you to in for a chat, until then you can order books online and
        collect in store.
      </h6> */}
      <ButtonLink href="/visit">Visit us</ButtonLink>
    </div>
  )
}

export default About
