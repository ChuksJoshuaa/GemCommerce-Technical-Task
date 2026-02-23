import type { FeatureItemProps } from "../../types";

const FeatureItem = ({ icon, title, description, position }: FeatureItemProps) => {
  const alignmentClass = position === 'left' ? 'text-left' : 'text-left'

  return (
    <div className={`flex flex-col gap-2 ${alignmentClass}`}>
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="text-[#161723] text-sm md:text-[19px] font-semibold">{title}</h3>
      </div>
      <p className="text-[#424153] text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default FeatureItem