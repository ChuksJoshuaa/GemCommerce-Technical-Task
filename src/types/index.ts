export interface Feature {
  icon: string
  title: string
  description: string
}

export interface Statistic {
  percentage: string
  description: string
}

export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary'
}

export interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  position: "left" | "right";
}