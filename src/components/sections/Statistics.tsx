import dogWithProduct from '../../assets/images/dog-with-product.png'
import { Button } from '../ui/Button'

interface StatItemProps {
  percentage: string
  description: string
}

const StatItem = ({ percentage, description }: StatItemProps) => {
  return (
    <div className="flex gap-2 items-start">
      <span className="text-[#EE6F4B] text-[32px] font-bold leading-none min-w-[80px]">
        {percentage}
      </span>
      <p className="text-[#6B7280] text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export const Statistics = () => {
  const stats = [
    {
      percentage: '97%',
      description: 'Dogs choose our dog food over leading brands because of the real functional ingredients and delicious flavors.'
    },
    {
      percentage: '84%',
      description: 'Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.'
    },
    {
      percentage: '92%',
      description: "Our dog food's high protein and fat digestibility contribute to ideal stool quality."
    }
  ]

  return (
    <section className="mt-5 pb-16 main-container">
      <div className="py-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          <div className="flex-1 px-10">
            <h2
              className="text-[25px] md:text-[40px] font-semibold text-[#161723] leading-[120%] tracking-[0.25px] mb-6 pt-8 pb-4"
            >
              Nutrition is the foundation for longer, healthier lives in dogs.
            </h2>

            <p className="text-[#6B7280] text-sm md:text-base leading-relaxed mb-8">
              Invest in your dog's future with our scientifically formulated
              superfood-powered supplements. Give them the nutrition they
              deserve and watch them thrive with vitality, energy, and the joy
              of a longer, healthier life.
            </p>

            <div className="mb-8">
              <h3
                className="text-[#161723] text-lg font-semibold my-4"
              >
                Key Points:
              </h3>
              <div className="flex flex-col gap-6">
                {stats.map((stat, index) => (
                  <StatItem key={index} {...stat} />
                ))}
              </div>
            </div>
            <div className="mt-8">
              <Button className="w-full max-w-[462px] text-xs md:text-sm" variant="primary">
                Give your furry friend the gift of wholesome nutrition
              </Button>
            </div>
          </div>

          <div
            className="flex-1 flex justify-center"
          >
            <img
              src={dogWithProduct}
              alt="Happy dog with premium dog food"
              className="w-full max-w-[500px] min-h-[470px] h-auto rounded-lg object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
