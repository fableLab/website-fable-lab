import type { Block } from 'payload'

export const ButtonLinkBlock: Block = {
    slug: 'buttonLinkBlock',
    interfaceName: 'ButtonLinkBlock',
    imageURL: '/blocks/button-link.png',
    labels: {
      singular: "Link button",
      plural: "Link buttons",
    },
    fields: [
        {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      required: true,
    },
    ],
};
