import React from 'react';
import { cn } from '@/utilities/ui'

type SpacerBlockProps = {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
};

const sizes: Record<string, string> = {
  'xs': 'h-6',
  'sm': 'h-10',
  'md': 'h-16',
  'lg': 'h-32',
  'xl': 'h-64'
};

export const SpacerBlock: React.FC<SpacerBlockProps> = ({
  size
}) => {
  return (
    <div className={cn(size && sizes[size])}>
    </div>
  );
};
