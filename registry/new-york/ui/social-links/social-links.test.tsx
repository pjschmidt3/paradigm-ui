import { render, screen } from '@testing-library/react'
import { ComponentType } from 'react'

import { SocialLinks, SocialLink } from './social-links'

// Mock motion/react to avoid animation issues in tests
jest.mock('motion/react', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  Variants: {},
}))

describe('SocialLinks component', () => {
  describe('Basic rendering', () => {
    it('should render container div with flex classes', () => {
      const { container } = render(<SocialLinks />)
      const div = container.firstChild as HTMLElement
      expect(div).toHaveClass('flex', 'flex-col', 'justify-center')
    })

    it('should render empty container when no URLs provided', () => {
      const { container } = render(<SocialLinks />)
      const links = container.querySelectorAll('a')
      expect(links).toHaveLength(0)
    })
  })

  describe('Conditional platform rendering', () => {
    it('should only render Facebook icon when facebook URL provided', () => {
      render(<SocialLinks facebook="https://facebook.com/test" />)
      expect(screen.getByLabelText('Facebook Page')).toBeInTheDocument()
      expect(screen.queryByLabelText('Youtube Account')).not.toBeInTheDocument()
    })

    it('should only render YouTube icon when youtube URL provided', () => {
      render(<SocialLinks youtube="https://youtube.com/test" />)
      expect(screen.getByLabelText('Youtube Account')).toBeInTheDocument()
      expect(screen.queryByLabelText('Facebook Page')).not.toBeInTheDocument()
    })

    it('should only render Instagram icon when instagram URL provided', () => {
      render(<SocialLinks instagram="https://instagram.com/test" />)
      expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
      expect(screen.queryByLabelText('Facebook Page')).not.toBeInTheDocument()
    })

    it('should only render GitHub icon when github URL provided', () => {
      render(<SocialLinks github="https://github.com/test" />)
      expect(screen.getByLabelText('Github')).toBeInTheDocument()
      expect(screen.queryByLabelText('Facebook Page')).not.toBeInTheDocument()
    })

    it('should only render LinkedIn icon when linkedIn URL provided', () => {
      render(<SocialLinks linkedIn="https://linkedin.com/in/test" />)
      expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
      expect(screen.queryByLabelText('Facebook Page')).not.toBeInTheDocument()
    })

    it('should only render Twitter icon when twitter URL provided', () => {
      render(<SocialLinks twitter="https://twitter.com/test" />)
      expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
      expect(screen.queryByLabelText('Facebook Page')).not.toBeInTheDocument()
    })

    it('should only render X icon when x URL provided', () => {
      render(<SocialLinks x="https://x.com/test" />)
      expect(screen.getByLabelText('X.com')).toBeInTheDocument()
      expect(screen.queryByLabelText('Facebook Page')).not.toBeInTheDocument()
    })

    it('should only render Discord icon when discord URL provided', () => {
      render(<SocialLinks discord="https://discord.gg/test" />)
      expect(screen.getByLabelText('Discord')).toBeInTheDocument()
      expect(screen.queryByLabelText('Facebook Page')).not.toBeInTheDocument()
    })

    it('should render multiple icons when multiple URLs provided', () => {
      render(
        <SocialLinks
          facebook="https://facebook.com/test"
          github="https://github.com/test"
          twitter="https://twitter.com/test"
        />
      )
      expect(screen.getByLabelText('Facebook Page')).toBeInTheDocument()
      expect(screen.getByLabelText('Github')).toBeInTheDocument()
      expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    })

    it('should render all 8 platform icons when all URLs provided', () => {
      render(
        <SocialLinks
          discord="https://discord.gg/test"
          facebook="https://facebook.com/test"
          github="https://github.com/test"
          instagram="https://instagram.com/test"
          linkedIn="https://linkedin.com/in/test"
          twitter="https://twitter.com/test"
          x="https://x.com/test"
          youtube="https://youtube.com/test"
        />
      )
      expect(screen.getByLabelText('Facebook Page')).toBeInTheDocument()
      expect(screen.getByLabelText('Youtube Account')).toBeInTheDocument()
      expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
      expect(screen.getByLabelText('Github')).toBeInTheDocument()
      expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
      expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
      expect(screen.getByLabelText('X.com')).toBeInTheDocument()
      expect(screen.getByLabelText('Discord')).toBeInTheDocument()
    })
  })

  describe('Size prop', () => {
    it('should apply default lg size to icons', () => {
      const { container } = render(
        <SocialLinks facebook="https://facebook.com/test" />
      )
      const icon = container.querySelector('svg')
      expect(icon).toHaveClass('text-lg')
    })

    it('should apply custom size to icons', () => {
      const { container } = render(
        <SocialLinks
          facebook="https://facebook.com/test"
          size="xl"
        />
      )
      const icon = container.querySelector('svg')
      expect(icon).toHaveClass('text-xl')
    })

    it('should apply 2xl size to icons', () => {
      const { container } = render(
        <SocialLinks
          facebook="https://facebook.com/test"
          size="2xl"
        />
      )
      const icon = container.querySelector('svg')
      expect(icon).toHaveClass('text-2xl')
    })
  })

  describe('Custom className', () => {
    it('should merge custom className with container classes', () => {
      const { container } = render(<SocialLinks className="custom-class" />)
      const div = container.firstChild as HTMLElement
      expect(div).toHaveClass('custom-class')
      expect(div).toHaveClass('flex') // Default class should still be present
    })
  })

  describe('Custom link component', () => {
    it('should accept as prop for custom Link component', () => {
      const CustomLink: ComponentType<{ href?: string }> = ({
        href,
        children,
        ...props
      }) => (
        <a
          data-testid="custom-link"
          href={href}
          {...props}>
          {children}
        </a>
      )

      render(
        <SocialLinks
          as={CustomLink}
          facebook="https://facebook.com/test"
        />
      )
      expect(screen.getByTestId('custom-link')).toBeInTheDocument()
    })

    it('should use default anchor tag when no as prop provided', () => {
      const { container } = render(
        <SocialLinks facebook="https://facebook.com/test" />
      )
      const link = container.querySelector('a')
      expect(link).toBeInTheDocument()
    })
  })

  describe('Link href attributes', () => {
    it('should set correct href for each platform', () => {
      const { container } = render(
        <SocialLinks
          discord="https://discord.gg/test"
          facebook="https://facebook.com/test"
          github="https://github.com/test"
          instagram="https://instagram.com/test"
          linkedIn="https://linkedin.com/in/test"
          twitter="https://twitter.com/test"
          x="https://x.com/test"
          youtube="https://youtube.com/test"
        />
      )

      const links = container.querySelectorAll('a')
      const hrefs = Array.from(links).map((link) => link.getAttribute('href'))

      expect(hrefs).toContain('https://facebook.com/test')
      expect(hrefs).toContain('https://youtube.com/test')
      expect(hrefs).toContain('https://instagram.com/test')
      expect(hrefs).toContain('https://github.com/test')
      expect(hrefs).toContain('https://linkedin.com/in/test')
      expect(hrefs).toContain('https://twitter.com/test')
      expect(hrefs).toContain('https://x.com/test')
      expect(hrefs).toContain('https://discord.gg/test')
    })
  })

  describe('Accessibility', () => {
    it('should have appropriate aria-label for Facebook link', () => {
      render(<SocialLinks facebook="https://facebook.com/test" />)
      expect(screen.getByLabelText('Facebook Page')).toBeInTheDocument()
    })

    it('should have appropriate aria-label for YouTube link', () => {
      render(<SocialLinks youtube="https://youtube.com/test" />)
      expect(screen.getByLabelText('Youtube Account')).toBeInTheDocument()
    })

    it('should have appropriate aria-label for Instagram link', () => {
      render(<SocialLinks instagram="https://instagram.com/test" />)
      expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    })

    it('should have appropriate aria-label for GitHub link', () => {
      render(<SocialLinks github="https://github.com/test" />)
      expect(screen.getByLabelText('Github')).toBeInTheDocument()
    })

    it('should have appropriate aria-label for LinkedIn link', () => {
      render(<SocialLinks linkedIn="https://linkedin.com/in/test" />)
      expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    })

    it('should have appropriate aria-label for Twitter link', () => {
      render(<SocialLinks twitter="https://twitter.com/test" />)
      expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    })

    it('should have appropriate aria-label for X link', () => {
      render(<SocialLinks x="https://x.com/test" />)
      expect(screen.getByLabelText('X.com')).toBeInTheDocument()
    })

    it('should have appropriate aria-label for Discord link', () => {
      render(<SocialLinks discord="https://discord.gg/test" />)
      expect(screen.getByLabelText('Discord')).toBeInTheDocument()
    })
  })
})

describe('SocialLink component', () => {
  it('should render correct icon for each type', () => {
    const { container } = render(
      <SocialLink
        type="facebook"
        url="https://facebook.com/test"
      />
    )
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('should set href attribute on link', () => {
    const { container } = render(
      <SocialLink
        type="github"
        url="https://github.com/test"
      />
    )
    const link = container.querySelector('a')
    expect(link).toHaveAttribute('href', 'https://github.com/test')
  })

  it('should apply size class to icon', () => {
    const { container } = render(
      <SocialLink
        size="xl"
        type="twitter"
        url="https://twitter.com/test"
      />
    )
    const icon = container.querySelector('svg')
    expect(icon).toHaveClass('text-xl')
  })

  it('should use custom link component when as prop provided', () => {
    const CustomLink: ComponentType<{ href?: string }> = ({
      href,
      children,
    }) => (
      <a
        data-testid="custom-social-link"
        href={href}>
        {children}
      </a>
    )

    render(
      <SocialLink
        as={CustomLink}
        type="instagram"
        url="https://instagram.com/test"
      />
    )
    expect(screen.getByTestId('custom-social-link')).toBeInTheDocument()
  })
})
