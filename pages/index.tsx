import type { NextPage } from 'next'
import Image from 'next/image'
import Hero from '../components/hero'
import Cover from '../public/cover.png'
import Cover1 from '../public/cover-1.png'
import Cover2 from '../public/cover-2.png'
import Cover3 from '../public/cover-3.png'
import Cover4 from '../public/cover-4.png'
import GooglePodcast from '../public/googlepodcast.svg'
import Spotify from '../public/spotify.svg'
import Youtube from '../public/youtube.svg'

const Home: NextPage = () => {
  return (
    <>
      <Hero
        title="Your Daily"
        titleSpan="Podcast"
        subtitle="We cover all kinds of categories and a weekly special guest."
        buttonText="Subscribe"
      />
      <section className=" bg-linen lg:py-20">
        <div className="mx-auto flex w-80 flex-col pb-10 lg:m-0 lg:w-full lg:flex-row lg:justify-between lg:pb-40">
          <div className="hidden lg:block">
            <Image src={Cover} alt="cover" width={100} height={300} />
          </div>
          <div className="mb-5 lg:mb-0 lg:ml-5">
            <Image src={Cover1} alt="cover" width={400} height={300} />
          </div>
          <div className="mb-5 lg:mb-0 lg:ml-5">
            <Image src={Cover2} alt="cover" width={400} height={300} />
          </div>
          <div className="mb-5 lg:mb-0 lg:ml-5">
            <Image src={Cover3} alt="cover" width={400} height={300} />
          </div>
          <div className="hidden lg:ml-5 lg:block">
            <Image src={Cover4} alt="cover" width={100} height={300} />
          </div>
        </div>
        <div className="mx-10 flex flex-col justify-between border-y border-black lg:mx-40 lg:flex-row lg:items-center">
          <p className="pt-5 text-center font-bold lg:pt-0">Supported by: </p>
          <Image src={Spotify} alt="cover" width={200} height={100} />
          <Image src={GooglePodcast} alt="cover" width={200} height={100} />
          <Image src={Youtube} alt="cover" width={200} height={100} />
        </div>
      </section>
    </>
  )
}

export default Home
