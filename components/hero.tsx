import React from 'react'
import Image from 'next/image'
import HeroShapeSwirl from '../public/heroshapeswirl.svg'
import HeroShapeStars from '../public/heroshapestars.svg'

interface HeroProps {
  className?: string
  title: string
  titleSpan: string
  subtitle?: string
  buttonText?: string
  buttonTextTwo?: string
}

const Hero = ({
  title,
  subtitle,
  buttonText,
  buttonTextTwo,
  titleSpan,
}: HeroProps) => {
  return (
    <section className="flex h-2/3 flex-col items-center justify-center bg-linen pb-40 pt-20 lg:h-1/2">
      <div className="hidden lg:absolute lg:-left-28 lg:block">
        <Image
          src={HeroShapeSwirl}
          alt="hero shape swirl"
          width={550}
          height={550}
        />
      </div>
      {title && (
        <h1 className="mb-5 text-center text-7xl font-bold lg:w-1/3">
          {title} <span className="text-vermillion">{titleSpan}</span>
        </h1>
      )}
      {subtitle && (
        <p className="mb-5 w-96 text-center text-lg font-medium text-gray">
          {subtitle}
        </p>
      )}
      {buttonText && (
        <button className="rounded-lg bg-black px-6 py-2 font-bold text-white shadow-subscribeBtn">
          {buttonText}
        </button>
      )}
      {buttonTextTwo && (
        <button className="rounded-lg bg-black px-6 py-2 font-bold text-white shadow-subscribeBtn">
          {buttonText}
        </button>
      )}
      <div className="right-0 hidden lg:absolute lg:block">
        <Image src={HeroShapeStars} alt="stars" width={400} height={350} />
      </div>
    </section>
  )
}

export default Hero
