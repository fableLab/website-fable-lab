import { Block } from 'payload/types';

const ButtonLinkBlock: Block = {
    slug: 'buttonLinkBlock',
    interfaceName: 'ButtonLinkBlock',
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

export default ButtonLinkBlock;
