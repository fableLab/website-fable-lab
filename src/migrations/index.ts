import * as migration_20250723_102731 from './20250723_102731';
import * as migration_20250729_111839_members from './20250729_111839_members';
import * as migration_20250911_110425_remove_required_title_from_framecard from './20250911_110425_remove_required_title_from_framecard';
import * as migration_20250917_123404_add_size_and_border_parameters_for_image from './20250917_123404_add_size_and_border_parameters_for_image';
import * as migration_20250917_145939_create_spacer from './20250917_145939_create_spacer';

export const migrations = [
  {
    up: migration_20250723_102731.up,
    down: migration_20250723_102731.down,
    name: '20250723_102731',
  },
  {
    up: migration_20250729_111839_members.up,
    down: migration_20250729_111839_members.down,
    name: '20250729_111839_members',
  },
  {
    up: migration_20250911_110425_remove_required_title_from_framecard.up,
    down: migration_20250911_110425_remove_required_title_from_framecard.down,
    name: '20250911_110425_remove_required_title_from_framecard',
  },
  {
    up: migration_20250917_123404_add_size_and_border_parameters_for_image.up,
    down: migration_20250917_123404_add_size_and_border_parameters_for_image.down,
    name: '20250917_123404_add_size_and_border_parameters_for_image',
  },
  {
    up: migration_20250917_145939_create_spacer.up,
    down: migration_20250917_145939_create_spacer.down,
    name: '20250917_145939_create_spacer'
  },
];
