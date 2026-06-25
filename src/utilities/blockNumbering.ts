type NumberedBlock = { blockType?: string; level?: string | null }

/**
 * The heading level a block actually renders as. Mirrors `TitleBlock`, whose
 * tag is driven by its `level` field (defaulting to h2), and `subTitleBlock`,
 * which is always an h3. Anything else is not a heading.
 */
function headingLevelOf(block: NumberedBlock): 'h2' | 'h3' | 'h4' | null {
  if (block.blockType === 'titleBlock') {
    return block.level === 'h3' || block.level === 'h4' ? block.level : 'h2'
  }
  if (block.blockType === 'subTitleBlock') return 'h3'
  return null
}

/**
 * Single source of truth for the heading numbering used across the doc-style
 * pages and their summaries. Numbering follows the heading *level* (not the
 * block type), so a titleBlock rendered as an h3 nests correctly:
 *
 * - h2 -> top-level section  "1", "2", "3"…
 * - h3 -> nested subsection  "1.1", "1.2"…
 * - h4 -> deeper subsection  "1.1.1"…
 *
 * Returns the per-block numbers (null for non-heading blocks) and `nextMajor`,
 * the number a top-level heading placed *after* these blocks should use. That
 * lets hard-coded sections (Partenaires, Les soutiens…) continue the same
 * sequence instead of carrying magic numbers.
 */
export function computeBlockNumbers(blocks: NumberedBlock[] | null | undefined): {
  numbers: (string | null)[]
  nextMajor: number
} {
  let major = 0
  let minor = 0
  let sub = 0

  const numbers = (blocks ?? []).map((block) => {
    switch (headingLevelOf(block)) {
      case 'h2':
        major++
        minor = 0
        sub = 0
        return `${major}`
      case 'h3':
        minor++
        sub = 0
        return `${major}.${minor}`
      case 'h4':
        sub++
        return `${major}.${minor}.${sub}`
      default:
        return null
    }
  })

  return { numbers, nextMajor: major + 1 }
}
