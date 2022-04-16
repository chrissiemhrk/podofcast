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
import Scribble from '../public/scribble.svg'
import ScribbleBlack from '../public/scribbleBlack.svg'
import ManThinking from '../public/manthinking.svg'
import LightBuld from '../public/lightbuld.svg'
import Avatar from '../public/avatar.png'
import Testimony from '../public/testimonyjob.svg'
import Swirl from '../public/swirl.svg'
import Star from '../public/star.svg'

const Home: NextPage = () => {
  return (
    <>
      <Hero
        title="Your Daily"
        titleSpan="Podcast"
        subtitle="We cover all kinds of categories and a weekly special guest."
        buttonText="Subscribe"
      />
      <section className="bg-linen py-20 lg:py-24">
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
      <div className="relative flex justify-center">
        <div className="absolute -top-12">
          <Image src={Scribble} alt="scribble" width={100} height={100} />
        </div>
      </div>
      <section className="my-20 lg:px-40">
        <h2 className="mx-auto mt-20 mb-24 text-center text-5xl font-bold lg:w-1/2">
          Talk. Listen. Get inspired by every minute of it.
        </h2>
        <div className="mx-auto mb-24 flex flex-col items-center justify-between lg:flex-row">
          <div className="flex flex-col items-center justify-center lg:w-1/3">
            <div className="mx-auto">
              <Image src={ManThinking} width={300} height={300} />
            </div>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center lg:w-1/3">
            <div className="mx-auto">
              <Image src={LightBuld} width={300} height={300} />
            </div>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center bg-linen py-10">
          <div className="absolute -left-20 hidden lg:block">
            <Image src={Swirl} width={150} height={150} />
          </div>
          <div className="absolute -right-16 -top-16  hidden lg:block">
            <Image src={Star} width={150} height={150} />
          </div>
          <p className="text-8xl font-bold text-vermillion">“</p>
          <p className="text-center text-3xl font-bold lg:w-1/2">
            One of the best daily podcasts that covers every topic on Spotify.
          </p>
          <div className="mt-6 flex flex-col items-center lg:flex-row">
            <Image src={Avatar} alt="avatar" width={40} height={40} />
            <p className="mr-2">John Smith,</p>
            <Image src={Testimony} width={300} height={40} />
          </div>
        </div>
      </section>
      <div className="relative flex justify-center">
        <div className="absolute -top-12">
          <Image src={ScribbleBlack} alt="scribble" width={100} height={100} />
        </div>
      </div>
      <section className="bg-aliceBlue">
        <h2>What our listeners say</h2>
      </section>
    </>
  )
}

export default Home
