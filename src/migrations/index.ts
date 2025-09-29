import * as migration_20250723_102731 from './20250723_102731';
import * as migration_20250729_111839_members from './20250729_111839_members';
import * as migration_20250911_110425_remove_required_title_from_framecard from './20250911_110425_remove_required_title_from_framecard';
import * as migration_20250917_123404_add_size_and_border_parameters_for_image from './20250917_123404_add_size_and_border_parameters_for_image';
import * as migration_20250917_145939_create_spacer from './20250917_145939_create_spacer';
import * as migration_20250918_101348_add_ticket_paper_for_projets from './20250918_101348_add_ticket_paper_for_projets';
import * as migration_20250923_080219_create_resources from './20250923_080219_create_resources';
import * as migration_20250925_132148_add_filters_for_resources from './20250925_132148_add_filters_for_resources';
import * as migration_20250925_143858_add_youtube_video_block from './20250925_143858_add_youtube_video_block';
import * as migration_20250929_075405_remove_drafts_in_ressources from './20250929_075405_remove_drafts_in_ressources';
import * as migration_20250929_081452_add_drafts_in_ressources from './20250929_081452_add_drafts_in_ressources';

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
    name: '20250917_145939_create_spacer',
  },
  {
    up: migration_20250918_101348_add_ticket_paper_for_projets.up,
    down: migration_20250918_101348_add_ticket_paper_for_projets.down,
    name: '20250918_101348_add_ticket_paper_for_projets',
  },
  {
    up: migration_20250923_080219_create_resources.up,
    down: migration_20250923_080219_create_resources.down,
    name: '20250923_080219_create_resources',
  },
  {
    up: migration_20250925_132148_add_filters_for_resources.up,
    down: migration_20250925_132148_add_filters_for_resources.down,
    name: '20250925_132148_add_filters_for_resources',
  },
  {
    up: migration_20250925_143858_add_youtube_video_block.up,
    down: migration_20250925_143858_add_youtube_video_block.down,
    name: '20250925_143858_add_youtube_video_block',
  },
  {
    up: migration_20250929_075405_remove_drafts_in_ressources.up,
    down: migration_20250929_075405_remove_drafts_in_ressources.down,
    name: '20250929_075405_remove_drafts_in_ressources',
  },
  {
    up: migration_20250929_081452_add_drafts_in_ressources.up,
    down: migration_20250929_081452_add_drafts_in_ressources.down,
    name: '20250929_081452_add_drafts_in_ressources'
  },
];
