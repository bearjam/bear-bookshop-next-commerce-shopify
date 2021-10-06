import Svg25Percent from '~/components/icons/25percent'
import SvgFun from '~/components/icons/Fun'
import SvgHero from '~/components/icons/Hero'
import SvgWellbeing from '~/components/icons/Wellbeing'
import Square, { SquareProps } from '~/components/Square'
import css from './index.module.css'

export const squareProps: SquareProps[] = [
  {
    ages: '0-2',
    title: 'Reading with your baby',
    href: '/baby',
  },
  {
    ages: '2-4',
    title: 'Reading with your toddler',
    href: '/toddler',
  },
  {
    ages: '5-8',
    title: 'Linked to KS1 curriculum',
    href: '/ks1',
  },
  {
    ages: '8-11',
    title: 'Linked to KS2 curriculum',
    href: '/ks2',
  },
  {
    ages: '11-14',
    title: 'Linked to KS3 curriculum',
    href: '/ks3',
  },
  {
    ages: '14+',
    title: 'Linked to KS4-5 curriculum',
    href: '/ks4',
  },
]

const Learn = () => {
  return (
    <div className={css.root}>
      <div className={css.four}>
        <div>
          <Svg25Percent />
          <p>
            Children and young people’s enjoyment of reading is in decline, and
            only around a quarter read every day.
          </p>
        </div>
        <div>
          <SvgWellbeing />
          <p>
            Reading for pleasure is one of the most accessible ways to improve
            health, well-being and future success.
          </p>
        </div>
        <div>
          <SvgFun />
          <p>
            These activities are linked to early learning and national
            curriculum goals but are designed to feel like play rather than
            work.
          </p>
        </div>
        <div>
          <SvgHero />
          <p>
            Inspire your child to read through their interests. Non-fiction,
            graphic novels and magazines can be just as effective as books!
          </p>
        </div>
      </div>
      <div className={css.support}>
        <h2>Supporting Your Child’s Learning Through Reading</h2>
        <p>
          Helping your children to reach academic goals through recreational
          reading is really easy. On these pages are some age specific
          strategies that you can use when reading to your little ones, or can
          use to encourage older children to develop their skills as readers and
          learners.
        </p>
      </div>
      <div className={css.squares}>
        {squareProps.map((props) => (
          <Square key={props.ages} {...props} />
        ))}
      </div>
    </div>
  )
}

export default Learn
