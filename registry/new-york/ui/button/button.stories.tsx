import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from './button'

// Example icons (using SVG)
const CheckIcon = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const PlusIcon = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <line
      x1="12"
      x2="12"
      y1="5"
      y2="19"
    />
    <line
      x1="5"
      x2="19"
      y1="12"
      y2="12"
    />
  </svg>
)

const ArrowRightIcon = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <line
      x1="5"
      x2="19"
      y1="12"
      y2="12"
    />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const DownloadIcon = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line
      x1="12"
      x2="12"
      y1="15"
      y2="3"
    />
  </svg>
)

const meta = {
  argTypes: {
    bg: {
      control: 'text',
      description: 'Background color (e.g., "primary", "secondary", "#ff0000")'
    },
    color: {
      control: 'text',
      description: 'Text color (e.g., "primary", "secondary", "#ffffff")'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in a loading state'
    },
    size: {
      control: 'select',
      description: 'Size of the button',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']
    },
    type: {
      control: 'select',
      description: 'HTML button type',
      options: ['button', 'submit', 'reset']
    },
    variant: {
      control: 'select',
      description: 'Visual style variant of the button',
      options: ['default', 'outlined', 'link', 'ghost', 'destructive']
    }
  },
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Components/Button'
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Basic variants
export const Default: Story = {
  args: {
    children: 'Button'
  }
}

export const Outlined: Story = {
  args: {
    children: 'Outlined Button',
    variant: 'outlined'
  }
}

export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link'
  }
}

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost'
  }
}

export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive'
  }
}

// Sizes
export const ExtraSmall: Story = {
  args: {
    children: 'Extra Small',
    size: 'xs'
  },
  name: 'Size: Extra Small'
}

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm'
  },
  name: 'Size: Small'
}

export const Medium: Story = {
  args: {
    children: 'Medium',
    size: 'md'
  },
  name: 'Size: Medium (Default)'
}

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg'
  },
  name: 'Size: Large'
}

export const ExtraLarge: Story = {
  args: {
    children: 'Extra Large',
    size: 'xl'
  },
  name: 'Size: Extra Large'
}

export const TwoXL: Story = {
  args: {
    children: '2XL Button',
    size: '2xl'
  },
  name: 'Size: 2XL'
}

export const ThreeXL: Story = {
  args: {
    children: '3XL Button',
    size: '3xl'
  },
  name: 'Size: 3XL'
}

export const FourXL: Story = {
  args: {
    children: '4XL Button',
    size: '4xl'
  },
  name: 'Size: 4XL'
}

// With icons
export const WithIconStart: Story = {
  args: {
    children: 'Confirm',
    iconStart: <CheckIcon />
  }
}

export const WithIconEnd: Story = {
  args: {
    children: 'Next',
    iconEnd: <ArrowRightIcon />
  }
}

export const WithBothIcons: Story = {
  args: {
    children: 'Add Item',
    iconEnd: <ArrowRightIcon />,
    iconStart: <PlusIcon />
  }
}

export const IconOnly: Story = {
  args: {
    'aria-label': 'Download',
    iconStart: <DownloadIcon />,
    size: 'md'
  }
}

// States
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true
  }
}

export const Loading: Story = {
  args: {
    children: 'Loading...',
    loading: true
  }
}

export const LoadingWithIcon: Story = {
  args: {
    children: 'Saving...',
    iconEnd: <ArrowRightIcon />,
    loading: true
  }
}

// Custom colors
export const CustomColorsPrimary: Story = {
  args: {
    bg: 'primary',
    children: 'Primary Colors',
    color: 'primary-foreground'
  },
  name: 'Custom Colors: Primary'
}

export const CustomColorsSecondary: Story = {
  args: {
    bg: 'secondary',
    children: 'Secondary Colors',
    color: 'secondary-foreground'
  },
  name: 'Custom Colors: Secondary'
}

export const CustomColorsHex: Story = {
  args: {
    bg: '#10b981',
    children: 'Custom Hex Colors',
    color: '#ffffff'
  },
  name: 'Custom Colors: Hex Values'
}

export const CustomColorsOutlined: Story = {
  args: {
    bg: 'transparent',
    children: 'Accent Outline',
    color: 'accent',
    variant: 'outlined'
  },
  name: 'Custom Colors: Outlined'
}

// Button types
export const SubmitButton: Story = {
  args: {
    children: 'Submit Form',
    type: 'submit'
  },
  render: (args) => (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        alert('Form submitted!')
      }}>
      <div className="flex flex-col gap-4">
        <input
          className="rounded border px-3 py-2"
          placeholder="Enter some text"
          type="text"
        />
        <Button {...args} />
      </div>
    </form>
  )
}

export const ResetButton: Story = {
  args: {
    children: 'Reset',
    type: 'reset',
    variant: 'outlined'
  }
}

// Complex examples
export const ButtonGroup: Story = {
  name: 'Button Group Example',
  render: () => (
    <div className="flex gap-2">
      <Button variant="outlined">Cancel</Button>
      <Button>Save</Button>
      <Button iconEnd={<ArrowRightIcon />}>Save & Continue</Button>
    </div>
  )
}

export const ActionButtons: Story = {
  name: 'Action Buttons Example',
  render: () => (
    <div className="flex flex-col gap-3">
      <Button
        iconStart={<PlusIcon />}
        size="lg">
        Create New
      </Button>
      <Button
        iconStart={<DownloadIcon />}
        size="lg"
        variant="outlined">
        Download
      </Button>
      <Button
        size="lg"
        variant="destructive">
        Delete All
      </Button>
    </div>
  )
}

export const SizeComparison: Story = {
  name: 'Size Comparison',
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
      <Button size="2xl">2XL</Button>
      <Button size="3xl">3XL</Button>
      <Button size="4xl">4XL</Button>
    </div>
  )
}

export const VariantComparison: Story = {
  name: 'Variant Comparison',
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Button variant="default">Default</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
      <div className="flex gap-2">
        <Button
          disabled
          variant="default">
          Default
        </Button>
        <Button
          disabled
          variant="outlined">
          Outlined
        </Button>
        <Button
          disabled
          variant="ghost">
          Ghost
        </Button>
        <Button
          disabled
          variant="link">
          Link
        </Button>
        <Button
          disabled
          variant="destructive">
          Destructive
        </Button>
      </div>
    </div>
  )
}

// Interactive playground
export const Playground: Story = {
  args: {
    children: 'Button',
    size: 'md',
    variant: 'default'
  },
  render: (args) => <Button {...args} />
}
