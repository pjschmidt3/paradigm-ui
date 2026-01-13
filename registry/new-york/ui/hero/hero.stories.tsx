import type { Meta, StoryObj } from '@storybook/react-vite'

import { Hero } from './hero'

const meta = {
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the hero container'
    },
    description: {
      control: 'text',
      description: 'The description text displayed below the subheading'
    },
    descriptionClassName: {
      control: 'text',
      description: 'Additional CSS classes for the description'
    },
    heading: {
      control: 'text',
      description: 'The main heading text (h1)'
    },
    headingClassName: {
      control: 'text',
      description: 'Additional CSS classes for the heading'
    },
    subheading: {
      control: 'text',
      description: 'The subheading text (h2)'
    },
    subheadingClassName: {
      control: 'text',
      description: 'Additional CSS classes for the subheading'
    }
  },
  component: Hero,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  title: 'Components/Hero'
} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

// Default hero
export const Default: Story = {
  args: {
    description: 'Build beautiful, responsive interfaces with our component library.',
    heading: 'Welcome to Paradigm',
    subheading: 'A Modern React Component Library'
  }
}

// With all content
export const WithAllContent: Story = {
  args: {
    description:
      'Paradigm provides a comprehensive set of accessible, customizable React components built with Tailwind CSS. Start building your next project with confidence.',
    heading: 'Build Better UIs',
    socialLinks: {
      github: 'https://github.com/example',
      linkedIn: 'https://linkedin.com/company/example',
      x: 'https://x.com/example',
      youtube: 'https://youtube.com/@example'
    },
    subheading: 'The Component Library for Modern Web Apps'
  },
  name: 'With All Content'
}

// With social links
export const WithSocialLinks: Story = {
  args: {
    description: 'Connect with us on social media and join our community.',
    heading: 'Join Our Community',
    socialLinks: {
      discord: 'https://discord.gg/example',
      github: 'https://github.com/example',
      size: '3xl',
      x: 'https://x.com/example'
    },
    subheading: 'Be Part of Something Great'
  },
  name: 'With Social Links'
}

// Minimal hero
export const MinimalHero: Story = {
  args: {
    heading: 'Simple & Clean'
  },
  name: 'Minimal Hero'
}

// Heading only with subheading
export const HeadingAndSubheading: Story = {
  args: {
    heading: 'Get Started Today',
    subheading: 'Everything you need to build amazing products'
  },
  name: 'Heading and Subheading Only'
}

// Custom styling
export const CustomStyling: Story = {
  args: {
    className: 'bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white',
    description: 'Experience the power of customization with our flexible component system.',
    descriptionClassName: 'text-blue-100',
    heading: 'Fully Customizable',
    headingClassName: 'text-white',
    subheading: 'Style it your way',
    subheadingClassName: 'text-blue-200'
  },
  name: 'Custom Styling'
}

// Dark theme example
export const DarkTheme: Story = {
  args: {
    className: 'bg-gray-900 py-20',
    description: 'A sleek dark theme perfect for modern applications.',
    descriptionClassName: 'text-gray-400',
    heading: 'Dark Mode Ready',
    headingClassName: 'text-white',
    socialLinks: {
      github: 'https://github.com/example',
      size: '2xl',
      x: 'https://x.com/example'
    },
    subheading: 'Beautiful in any light',
    subheadingClassName: 'text-gray-300'
  },
  name: 'Dark Theme'
}

// Landing page style
export const LandingPage: Story = {
  args: {
    className: 'py-24',
    description:
      'Paradigm UI is a shadcn registry of reusable, highly composable React components. Includes low level utility components like Flexbox and Grid helpers as well as many commonly used cosmetic components.',
    heading: 'Paradigm UI',
    socialLinks: {
      github: 'https://github.com/paradigm-ui',
      size: '4xl'
    },
    subheading: 'Composable React Components for Modern Apps'
  },
  name: 'Landing Page Style'
}

// With all social platforms
export const AllSocialPlatforms: Story = {
  args: {
    description: 'Follow us everywhere!',
    heading: 'Stay Connected',
    socialLinks: {
      discord: 'https://discord.gg/example',
      facebook: 'https://facebook.com/example',
      github: 'https://github.com/example',
      instagram: 'https://instagram.com/example',
      linkedIn: 'https://linkedin.com/company/example',
      size: '2xl',
      twitter: 'https://twitter.com/example',
      x: 'https://x.com/example',
      youtube: 'https://youtube.com/@example'
    },
    subheading: 'Join our community across all platforms'
  },
  name: 'All Social Platforms'
}

// Interactive playground
export const Playground: Story = {
  args: {
    description: 'Customize this hero section using the controls below.',
    heading: 'Hero Playground',
    socialLinks: {
      github: 'https://github.com/example',
      size: '3xl',
      x: 'https://x.com/example'
    },
    subheading: 'Experiment with different configurations'
  },
  render: (args) => (
    <div className="py-12">
      <Hero {...args} />
    </div>
  )
}
