import Icon from '../components/Icon';
import { social, type IconNameType } from '../constants';

const Social = () => {
  const socialLinks = social.links;
  const socialIcons = social.icons;
  const platformKeys = Object.keys(socialLinks) as (keyof typeof socialLinks)[];

  return (
    <div>
      <ul className="flex items-center gap-1">
        {platformKeys.map((platform) => (
          <li key={socialLinks[platform]}>
            <a
              href={socialLinks[platform]}
              target="_blank"
              rel="noopener noreferrer"
              title={platform}
            >
              <Icon name={socialIcons[platform] as IconNameType} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;