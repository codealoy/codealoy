import { LinkGrid as LinkGridComponent } from '../../components/LinkGrid';

export const LinkGrid = {
  render: LinkGridComponent,
  description: 'Link grid container',
};

export const LinkGridLink = {
  render: LinkGridComponent.Link,
  description: 'Link grid item',
  selfClosing: true,
  attributes: {
    title: { type: String },
    description: { type: String },
    icon: { type: String },
    href: { type: String },
  },
};
