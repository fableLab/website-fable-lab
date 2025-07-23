import * as migration_20250723_102731 from './20250723_102731';

export const migrations = [
  {
    up: migration_20250723_102731.up,
    down: migration_20250723_102731.down,
    name: '20250723_102731'
  },
];
