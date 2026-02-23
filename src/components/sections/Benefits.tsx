import kibbleBackground from '../../assets/images/kibble-background.jpg'

export const Benefits = () => {
  return (
    <section
      className="mt-5 pb-16 main-container"
      style={{ marginTop: "1rem" }}
    >
      <div className="py-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-[30px] md:text-[40px] font-semibold text-[#161723] leading-[120%] tracking-[0.25px] mb-6 w-[95%]">
              Prebiotics nourish the beneficial gut bacteria, supporting
              digestive health
            </h2>

            <p className="text-[#6B7280] text-base leading-relaxed w-[93%]">
              Our dog food formula contains carefully selected prebiotics that
              work in harmony with the gut microbiota, providing the necessary
              nutrients for the growth and maintenance of beneficial bacteria,
              ultimately supporting digestive health.
            </p>
          </div>

          <div className="flex-1">
            <img
              src={kibbleBackground}
              alt="Premium dog food kibble"
              className="w-full max-w-[570px] min-h-[470px] h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
