import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm Alexis. I'm a Web Developer, I currently learn English and one of my favorite hobbies is build projects. You can contact me on <a href='https://twitter.com/alexisflowersf'>Twitter</a></p>
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href='https://nextjs.org/learn'>Next.js tutorial</a>
        </p>
      </section>
    </Layout>
  )
}
