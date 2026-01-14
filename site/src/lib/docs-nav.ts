export type NavItem = {
  title: string
  href: string
  items?: NavItem[]
}

export type NavSection = {
  title: string
  items: NavItem[]
}

export const docsNav: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Installation', href: '/docs/installation' }
    ]
  },
  {
    title: 'Components',
    items: [
      { title: 'Layout', href: '/docs/components/layout' },
      { title: 'Typography', href: '/docs/components/typography' },
      { title: 'Cards', href: '/docs/components/cards' }
    ]
  },
  {
    title: 'Hooks',
    items: [
      { title: 'useDisclosure', href: '/docs/hooks/use-disclosure' },
      { title: 'useToggle', href: '/docs/hooks/use-toggle' },
      { title: 'useMediaQuery', href: '/docs/hooks/use-media-query' },
      { title: 'useClickOutside', href: '/docs/hooks/use-click-outside' }
    ]
  },
  {
    title: 'Blocks',
    items: [
      { title: 'Overview', href: '/docs/blocks' },
      { title: 'Marketing', href: '/docs/blocks/marketing' }
    ]
  }
]
