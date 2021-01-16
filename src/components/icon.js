import React from 'react';
import { icons } from 'icons';

const sizes = {
  small: (base) => 0.5 * base,
  medium: (base) => base,
  large: (base) => 1.5 * base,
  "font-size": () => "1em"
};

const Icon = ({ name, size = 'large' }) => {
  return (
    <i className={`icon-svg icon-svg--${name}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width={sizes[size](24)}
        fill="none"
      >
        {icons[name].map((d) => (
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
