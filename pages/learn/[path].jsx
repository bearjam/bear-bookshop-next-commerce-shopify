import fetch from 'node-fetch'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'
import Image from 'next/image'
import css from './path.module.css'
import { ButtonLink } from '~/components/inputs'
import { squareProps } from '.'

export async function getStaticPaths() {
  return {
    paths: ['baby', 'toddler', 'ks1', 'ks2', 'ks3', 'ks4'].map((path) => ({
      params: { path },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const source = await fetch(
    `https://storage.googleapis.com/bear-bookshop-md-files/${params.path}.md`
  ).then((x) => x.text())
  const { content, data: frontMatter } = matter(source)
  const mdxSource = await renderToString(content)
  const ages = squareProps.find((x) => x.href === '/' + params.path).ages
  return {
    props: {
      source: mdxSource,
      frontMatter,
      searchLink: `/shop?p=1&tags=Ages+${encodeURIComponent(ages)}`,
    },
  }
}

const LearnAgeRangePage = ({ source, frontMatter, searchLink }) => {
  const content = hydrate(source)
  return (
    <div className={css.root}>
      <div className={css.image}>
        <Image
          src={frontMatter.image.url}
          alt=""
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className={css.text}>
        <h2>{frontMatter.title}</h2>
        <h3>{frontMatter.age}</h3>
        <h4>{frontMatter.subtitle}</h4>
        <div>{content}</div>
        <div className={css.shop}>
          <h3>Find books for your child</h3>
          <p>
            From Pop-up Books to Classic Novels, Bear Bookshop has got you
            covered.
          </p>
          <ButtonLink href={searchLink}>Shop books</ButtonLink>
        </div>
      </div>
    </div>
  )
}

export default LearnAgeRangePage
