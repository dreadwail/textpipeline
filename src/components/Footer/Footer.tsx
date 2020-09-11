import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import ListItemLink, { ListItemLinkProps } from 'components/ListItemLink';
import React from 'react';
import { ossPath } from 'routes';

interface FooterProps {
  [key: string]: ListItemLinkProps[];
}

const footer: FooterProps = {
  'Social Media': [
    { icon: TwitterIcon, text: 'Twitter', href: 'https://twitter.com/textpipeline', isExternal: true },
    { icon: GitHubIcon, text: 'GitHub', href: 'https://github.com/textpipeline', isExternal: true },
  ],
  Resources: [
    { text: 'About', href: '#', isExternal: false },
    { text: 'Open Source', href: ossPath, isExternal: false },
    { text: 'Stats', href: '#', isExternal: false },
    { text: 'FAQ', href: '#', isExternal: false },
    { text: 'Privacy Policy', href: '#', isExternal: false },
    { text: 'Terms of Use', href: '#', isExternal: false },
  ],
};

const sectionHeadings = Object.keys(footer);

const Footer: React.FC = () => (
  <footer>
    {sectionHeadings.map((sectionHeading, index) => (
      <React.Fragment key={sectionHeading}>
        <Box key={sectionHeading} mb={1}>
          <List dense component="nav" subheader={<ListSubheader>{sectionHeading}</ListSubheader>}>
            {footer[sectionHeading].map(({ icon, text, href, isExternal }) => (
              <ListItemLink
                key={`${sectionHeading}-${text}`}
                icon={icon}
                text={text}
                href={href}
                isExternal={isExternal}
              />
            ))}
          </List>
        </Box>
        {index !== sectionHeadings.length - 1 && <Divider />}
      </React.Fragment>
    ))}
  </footer>
);

export default Footer;
