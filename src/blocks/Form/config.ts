import type { Block } from 'payload'

import {
    FixedToolbarFeature,
    HeadingFeature,
    InlineToolbarFeature,
    lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const FormBlock: Block = {
    slug: 'formBlock',
    interfaceName: 'FormBlock',
    labels: {
        singular: 'Formulaire',
        plural: 'Formulaires',
    },
    fields: [
        {
            name: 'form',
            type: 'relationship',
            relationTo: 'forms',
            required: true,
        },
        {
            name: 'enableIntro',
            type: 'checkbox',
            label: 'Activer le texte d\'introduction',
        },
        {
            name: 'introContent',
            type: 'richText',
            admin: {
                condition: (_, { enableIntro }) => Boolean(enableIntro),
            },
            editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                    return [
                        ...rootFeatures,
                        HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                        FixedToolbarFeature(),
                        InlineToolbarFeature(),
                    ]
                },
            }),
            label: 'Contenu d\'introduction',
        },
    ],
    graphQL: {
        singularName: 'FormBlock',
    },
}
