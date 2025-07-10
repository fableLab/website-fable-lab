import { Block } from 'playload/types';

export const DividerBlock: Block = {
    slug: 'dividerBlock',
    fields: [
        {
            name: 'color',
            type: 'select',
            label: 'Color',
            options: [
                { label: 'Jaune', value: 'yellow' },
                { label: 'Violet', value: 'violet' },
                { label: 'Bleu', value: 'blue' },
                { label: 'Orange', value: 'orange' },
                { label: 'Prune', value: 'prune' },
            ],
            defaultValue: 'prune',
        },
    ],
};
