import type { NextPage } from 'next'
import Hero from '../components/hero'

const Home: NextPage = () => {
  return (
    <>
      <Hero
        title="Your Daily"
        titleSpan="Podcast"
        subtitle="We cover all kinds of categories and a weekly special guest."
        buttonText="Subscribe"
      />
      <section className="bg-linen"></section>
    </>
  )
}

export default Home
