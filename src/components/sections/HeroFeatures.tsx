import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import applepayImg from "../../assets/images/applepay.png"
import frameImg from "../../assets/images/frame.png"
import googlepayImg from "../../assets/images/googlepay.png"
import mastercardImg from "../../assets/images/mastercard.png"
import paypalImg from "../../assets/images/paypal.png"
import visaImg from "../../assets/images/visa.png"
import { CheckedSvg } from "../../assets/svg"
import { FoodSvg } from '../../assets/svg/food'
import { FreshSvg } from '../../assets/svg/fresh'
import { IngrendientSvg } from '../../assets/svg/ingredient'
import { VetSvg } from '../../assets/svg/vet'
import { Button } from '../ui/Button'
import FeatureItem from './FeatureItem'

export const HeroFeatures = () => {
  const features = [
    {
      icon: <FoodSvg />,
      title: 'Real Food',
      description: 'Wholesome recipes for dogs with real meat and veggies.',
      position: 'left' as const
    },
    {
      icon: <FreshSvg />,
      title: 'Made Fresh',
      description: 'We prioritize maintaining the integrity of whole foods and nutrition.',
      position: 'right' as const
    },
    {
      icon: <IngrendientSvg />,
      title: 'Premium Ingredient',
      description: 'Elevating pet care with unmatched safety and quality.',
      position: 'left' as const
    },
    {
      icon: <VetSvg />,
      title: 'Vet Developed',
      description: 'We raise the bar for dog nutrition, surpassing industry expectations.',
      position: 'right' as const
    }
  ]

  return (
    <section className="mt-5 main-container">
      <div className="py-5">
        <h2
          className="text-[30px] md:text-[40px] font-semibold text-[#161723] text-center leading-[120%] tracking-[0.25px] mb-12"
          style={{ marginTop: "2rem" }}
        >
          What makes us different
          <br />
          makes them stronger
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-12">
          <div className="flex flex-col gap-12 mt-5 md:mt-0">
            <FeatureItem {...features[0]} />
            <FeatureItem {...features[2]} />
          </div>

          <div>
            <LazyLoadImage
              src={frameImg}
              alt="main frame and logo"
              effect="blur"
              className="h-auto rounded-lg object-cover"
            />
          </div>

          <div className="flex flex-col gap-12 ">
            <FeatureItem {...features[1]} />
            <FeatureItem {...features[3]} />
          </div>
        </div>

        <div
          className="flex flex-col items-center gap-4"
          style={{ marginTop: "1rem" }}
        >
          <Button
            className="w-full max-w-[462px] text-xs md:text-sm"
            variant="primary"
          >
            Get your dog's healthy meal today!
          </Button>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-2 text-xs text-[#6B7280]">
              <CheckedSvg />
              <span className="font-normal">30-day money back guarantee</span>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <LazyLoadImage
                src={paypalImg}
                alt="PayPal"
                effect="blur"
                className="h-[24px] opacity-100 cursor-pointer"
              />
              <LazyLoadImage
                src={visaImg}
                alt="Visa"
                effect="blur"
                className="h-[24px] opacity-100 cursor-pointer"
              />
              <LazyLoadImage
                src={mastercardImg}
                alt="Mastercard"
                effect="blur"
                className="h-[24px] opacity-100 cursor-pointer"
              />
              <LazyLoadImage
                src={applepayImg}
                alt="Apple Pay"
                effect="blur"
                className="h-[24px] opacity-100 cursor-pointer"
              />
              <LazyLoadImage
                src={googlepayImg}
                alt="Google Pay"
                effect="blur"
                className="h-[24px] opacity-100 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
