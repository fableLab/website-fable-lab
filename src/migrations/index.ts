import * as migration_20250723_102731 from './20250723_102731';
import * as migration_20250729_111839_members from './20250729_111839_members';
import * as migration_20250911_110425_remove_required_title_from_framecard from './20250911_110425_remove_required_title_from_framecard';

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
    name: '20250911_110425_remove_required_title_from_framecard'
  },
];
