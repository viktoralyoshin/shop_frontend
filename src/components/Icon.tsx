import { icons, LucideProps } from 'lucide-react';

export interface IIcon extends LucideProps {
  name: keyof typeof icons
}

const Icon = ({ name, ...props }: IIcon) => {
  const LucideIcon = icons[name];

  return <LucideIcon {...props} />
};

export default Icon;
