import type { Meta, StoryObj } from '@storybook/react-vite'

import { SocialLinks } from './social-links'

const meta = {
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the container'
    },
    discord: {
      control: 'text',
      description: 'Discord URL'
    },
    facebook: {
      control: 'text',
      description: 'Facebook URL'
    },
    github: {
      control: 'text',
      description: 'GitHub URL'
    },
    instagram: {
      control: 'text',
      description: 'Instagram URL'
    },
    linkedIn: {
      control: 'text',
      description: 'LinkedIn URL'
    },
    size: {
      control: 'select',
      description: 'Size of the social icons',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl']
    },
    twitter: {
      control: 'text',
      description: 'Twitter URL'
    },
    x: {
      control: 'text',
      description: 'X (formerly Twitter) URL'
    },
    youtube: {
      control: 'text',
      description: 'YouTube URL'
    }
  },
  component: SocialLinks,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Components/SocialLinks'
} satisfies Meta<typeof SocialLinks>

export default meta
type Story = StoryObj<typeof meta>

// All platforms
export const AllPlatforms: Story = {
  args: {
    discord: 'https://discord.gg/example',
    facebook: 'https://facebook.com/example',
    github: 'https://github.com/example',
    instagram: 'https://instagram.com/example',
    linkedIn: 'https://linkedin.com/in/example',
    size: 'xl',
    twitter: 'https://twitter.com/example',
    x: 'https://x.com/example',
    youtube: 'https://youtube.com/@example'
  },
  name: 'All Platforms'
}

// Single platform
export const SinglePlatform: Story = {
  args: {
    github: 'https://github.com/example',
    size: 'xl'
  },
  name: 'Single Platform (GitHub)'
}

// Common combination
export const CommonCombination: Story = {
  args: {
    github: 'https://github.com/example',
    linkedIn: 'https://linkedin.com/in/example',
    size: 'xl',
    x: 'https://x.com/example'
  },
  name: 'Common Combination'
}

// Different sizes
export const SizeExtraSmall: Story = {
  args: {
    github: 'https://github.com/example',
    linkedIn: 'https://linkedin.com/in/example',
    size: 'xs',
    x: 'https://x.com/example'
  },
  name: 'Size: Extra Small'
}

export const SizeSmall: Story = {
  args: {
    github: 'https://github.com/example',
    linkedIn: 'https://linkedin.com/in/example',
    size: 'sm',
    x: 'https://x.com/example'
  },
  name: 'Size: Small'
}

export const SizeMedium: Story = {
  args: {
    github: 'https://github.com/example',
    linkedIn: 'https://linkedin.com/in/example',
    size: 'md',
    x: 'https://x.com/example'
  },
  name: 'Size: Medium'
}

export const SizeLarge: Story = {
  args: {
    github: 'https://github.com/example',
    linkedIn: 'https://linkedin.com/in/example',
    size: 'lg',
    x: 'https://x.com/example'
  },
  name: 'Size: Large'
}

export const SizeExtraLarge: Story = {
  args: {
    github: 'https://github.com/example',
    linkedIn: 'https://linkedin.com/in/example',
    size: 'xl',
    x: 'https://x.com/example'
  },
  name: 'Size: Extra Large'
}

export const Size2XL: Story = {
  args: {
    github: 'https://github.com/example',
    linkedIn: 'https://linkedin.com/in/example',
    size: '2xl',
    x: 'https://x.com/example'
  },
  name: 'Size: 2XL'
}

export const Size3XL: Story = {
  args: {
    github: 'https://github.com/example',
    linkedIn: 'https://linkedin.com/in/example',
    size: '3xl',
    x: 'https://x.com/example'
  },
  name: 'Size: 3XL'
}

export const Size4XL: Story = {
  args: {
    github: 'https://github.com/example',
    linkedIn: 'https://linkedin.com/in/example',
    size: '4xl',
    x: 'https://x.com/example'
  },
  name: 'Size: 4XL'
}

export const Size5XL: Story = {
  args: {
    github: 'https://github.com/example',
    linkedIn: 'https://linkedin.com/in/example',
    size: '5xl',
    x: 'https://x.com/example'
  },
  name: 'Size: 5XL'
}

export const Size6XL: Story = {
  args: {
    github: 'https://github.com/example',
    linkedIn: 'https://linkedin.com/in/example',
    size: '6xl',
    x: 'https://x.com/example'
  },
  name: 'Size: 6XL'
}

// With custom className
export const WithCustomClassName: Story = {
  args: {
    className: 'bg-gray-100 p-4 rounded-lg',
    github: 'https://github.com/example',
    linkedIn: 'https://linkedin.com/in/example',
    size: 'xl',
    x: 'https://x.com/example'
  },
  name: 'With Custom ClassName'
}

// Size comparison
export const SizeComparison: Story = {
  name: 'Size Comparison',
  render: () => (
    <div className="flex flex-col items-start gap-8">
      <div>
        <p className="mb-2 text-sm text-gray-500">Extra Small (xs)</p>
        <SocialLinks
          github="https://github.com/example"
          linkedIn="https://linkedin.com/in/example"
          size="xs"
          x="https://x.com/example"
        />
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-500">Medium (md)</p>
        <SocialLinks
          github="https://github.com/example"
          linkedIn="https://linkedin.com/in/example"
          size="md"
          x="https://x.com/example"
        />
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-500">Extra Large (xl)</p>
        <SocialLinks
          github="https://github.com/example"
          linkedIn="https://linkedin.com/in/example"
          size="xl"
          x="https://x.com/example"
        />
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-500">3XL</p>
        <SocialLinks
          github="https://github.com/example"
          linkedIn="https://linkedin.com/in/example"
          size="3xl"
          x="https://x.com/example"
        />
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-500">6XL</p>
        <SocialLinks
          github="https://github.com/example"
          linkedIn="https://linkedin.com/in/example"
          size="6xl"
          x="https://x.com/example"
        />
      </div>
    </div>
  )
}

// Interactive playground
export const Playground: Story = {
  args: {
    discord: '',
    facebook: '',
    github: 'https://github.com/example',
    instagram: '',
    linkedIn: 'https://linkedin.com/in/example',
    size: 'xl',
    twitter: '',
    x: 'https://x.com/example',
    youtube: ''
  },
  render: (args) => <SocialLinks {...args} />
}
