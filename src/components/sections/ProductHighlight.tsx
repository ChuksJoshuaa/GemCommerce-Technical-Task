import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import dogsEating from '../../assets/images/dogs-eating.gif'

export const ProductHighlight = () => {
  return (
    <section
      className="mt-5 pb-16 main-container"
      style={{ marginTop: "3rem" }}
    >
      <div className="px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 flex justify-center">
            <LazyLoadImage
              src={dogsEating}
              alt="Dogs enjoying their meal"
              effect="blur"
              className="w-full max-w-[570px] min-h-[470px] h-auto rounded-lg object-cover"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-[30px] md:text-[40px] font-semibold text-[#161723] leading-[120%] tracking-[0.25px] mb-6 w-[95%]">
              Improve overall gastrointestinal health for better nutrient
              absorption
            </h2>

            <p className="text-[#6B7280] text-base leading-relaxed w-[93%]">
              Through rigorous scientific studies and consultations with
              veterinarians, we have created a breakthrough formula exclusively
              tailored to combat the health challenges prevalent in dogs. A
              staggering 91% of our customers have reported significant
              improvements in their dogs' health after incorporating our product
              into their diet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
