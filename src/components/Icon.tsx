import { icons } from '@constants/index';

type SizeKey = keyof typeof sizes;
type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  size?: SizeKey;
}

const sizes = {
  small: (base: number) => 0.5 * base,
  medium: (base: number) => base,
  large: (base: number) => 1.5 * base,
  'font-size': () => '1em',
} as const;

const Icon = ({ name, size = 'large' }: IconProps) => {
  const sizeFunction = sizes[size];
  const width = sizeFunction(24);  
  const iconPaths = icons[name];

  return (
    <i>
      <svg
        className="fill-terracotta"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width={width}
        fill="none"
      >
        {iconPaths.map((d) => (
          <path
            key={d}
            strokeWidth={0}
            d={d}
          />
        ))}
      </svg>
    </i>
  );
};

export default Icon;
