import { IconBaseProps } from "react-icons";
import { TbTrashFilled } from "react-icons/tb";
const iconMap = {
  delete: TbTrashFilled,
};

interface IconProps extends IconBaseProps {
  type: keyof typeof iconMap;
}

export function Icon({ type, ...rest }: IconProps) {
  const IconComponent = iconMap[type];
  return <IconComponent {...rest} />;
}
