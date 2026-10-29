import * as migration_20250723_102731 from './20250723_102731';
import * as migration_20250729_111839_members from './20250729_111839_members';
import * as migration_20250911_110425_remove_required_title_from_framecard from './20250911_110425_remove_required_title_from_framecard';
import * as migration_20250917_123404_add_size_and_border_parameters_for_image from './20250917_123404_add_size_and_border_parameters_for_image';
import * as migration_20250917_145939_create_spacer from './20250917_145939_create_spacer';
import * as migration_20250918_101348_add_ticket_paper_for_projets from './20250918_101348_add_ticket_paper_for_projets';
import * as migration_20250923_080219_create_resources from './20250923_080219_create_resources';
import * as migration_20250925_132148_add_filters_for_resources from './20250925_132148_add_filters_for_resources';
import * as migration_20250925_143858_add_youtube_video_block from './20250925_143858_add_youtube_video_block';
import * as migration_20250930_085047_create_grid_block from './20250930_085047_create_grid_block';
import * as migration_20250930_090656_create_button_download_cloud from './20250930_090656_create_button_download_cloud';
import * as migration_20250930_100639_edit_title_with_multiple_levels from './20250930_100639_edit_title_with_multiple_levels';
import * as migration_20251001_065939_create_align_component from './20251001_065939_create_align_component';
import * as migration_20251001_133448_add_border_color_for_image_paragraph from './20251001_133448_add_border_color_for_image_paragraph';
import * as migration_20251002_105238_add_search from './20251002_105238_add_search';
import * as migration_20260122_155022_add_form_builder from './20260122_155022_add_form_builder';
import * as migration_20260527_124923_add_labs_lang_sub_site from './20260527_124923_add_labs_lang_sub_site';
import * as migration_20261029_164123_upgrade_payload_3_92_1 from './20261029_164123_upgrade_payload_3_92_1';
import * as migration_20261029_170806_add_mcp_plugin from './20261029_170806_add_mcp_plugin';

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
    up: migration_20250930_085047_create_grid_block.up,
    down: migration_20250930_085047_create_grid_block.down,
    name: '20250930_085047_create_grid_block',
  },
  {
    up: migration_20250930_090656_create_button_download_cloud.up,
    down: migration_20250930_090656_create_button_download_cloud.down,
    name: '20250930_090656_create_button_download_cloud',
  },
  {
    up: migration_20250930_100639_edit_title_with_multiple_levels.up,
    down: migration_20250930_100639_edit_title_with_multiple_levels.down,
    name: '20250930_100639_edit_title_with_multiple_levels',
  },
  {
    up: migration_20251001_065939_create_align_component.up,
    down: migration_20251001_065939_create_align_component.down,
    name: '20251001_065939_create_align_component',
  },
  {
    up: migration_20251001_133448_add_border_color_for_image_paragraph.up,
    down: migration_20251001_133448_add_border_color_for_image_paragraph.down,
    name: '20251001_133448_add_border_color_for_image_paragraph',
  },
  {
    up: migration_20251002_105238_add_search.up,
    down: migration_20251002_105238_add_search.down,
    name: '20251002_105238_add_search',
  },
  {
    up: migration_20260122_155022_add_form_builder.up,
    down: migration_20260122_155022_add_form_builder.down,
    name: '20260122_155022_add_form_builder',
  },
  {
    up: migration_20260527_124923_add_labs_lang_sub_site.up,
    down: migration_20260527_124923_add_labs_lang_sub_site.down,
    name: '20260527_124923_add_labs_lang_sub_site',
  },
  {
    up: migration_20261029_164123_upgrade_payload_3_92_1.up,
    down: migration_20261029_164123_upgrade_payload_3_92_1.down,
    name: '20261029_164123_upgrade_payload_3_92_1',
  },
  {
    up: migration_20261029_170806_add_mcp_plugin.up,
    down: migration_20261029_170806_add_mcp_plugin.down,
    name: '20261029_170806_add_mcp_plugin'
  },
];
