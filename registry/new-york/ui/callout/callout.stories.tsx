import type { Meta, StoryObj } from '@storybook/react-vite'

import { Callout } from './callout'

const meta = {
  argTypes: {
    title: {
      control: 'text',
      description: 'Optional title heading'
    },
    variant: {
      control: 'select',
      description: 'Semantic variant',
      options: ['info', 'warning', 'success', 'error', 'note']
    }
  },
  component: Callout,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Components/Callout'
} satisfies Meta<typeof Callout>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    children: 'This feature is currently in beta. Some functionality may change.',
    title: 'Information',
    variant: 'info'
  }
}

export const Warning: Story = {
  args: {
    children:
      'This action cannot be undone. Please make sure you have a backup before proceeding.',
    title: 'Warning',
    variant: 'warning'
  }
}

export const Success: Story = {
  args: {
    children: 'Your changes have been saved successfully.',
    title: 'Success',
    variant: 'success'
  }
}

export const Error: Story = {
  args: {
    children:
      'There was an error processing your request. Please try again later.',
    title: 'Error',
    variant: 'error'
  }
}

export const Note: Story = {
  args: {
    children:
      'Remember to update your dependencies regularly to get the latest features and security patches.',
    title: 'Note',
    variant: 'note'
  }
}

export const WithoutTitle: Story = {
  args: {
    children: 'This is a simple callout without a title.',
    variant: 'info'
  },
  name: 'Without Title'
}

export const LongContent: Story = {
  args: {
    children: (
      <>
        <p>
          This is a callout with longer content that spans multiple paragraphs.
          It demonstrates how the component handles more complex content.
        </p>
        <p className="mt-2">
          You can include multiple paragraphs, lists, or other elements within
          the callout body.
        </p>
      </>
    ),
    title: 'Detailed Information',
    variant: 'info'
  },
  name: 'Long Content'
}

export const WithList: Story = {
  args: {
    children: (
      <ul className="mt-1 list-inside list-disc space-y-1">
        <li>First important point</li>
        <li>Second important point</li>
        <li>Third important point</li>
      </ul>
    ),
    title: 'Key Points',
    variant: 'note'
  },
  name: 'With List'
}

export const VariantComparison: Story = {
  args: {
    children: ''
  },
  name: 'Variant Comparison',
  render: () => (
    <div className="flex max-w-md flex-col gap-4">
      <Callout
        title="Info"
        variant="info">
        Informational message with blue styling.
      </Callout>
      <Callout
        title="Warning"
        variant="warning">
        Warning message with amber/yellow styling.
      </Callout>
      <Callout
        title="Success"
        variant="success">
        Success message with green styling.
      </Callout>
      <Callout
        title="Error"
        variant="error">
        Error message with red styling.
      </Callout>
      <Callout
        title="Note"
        variant="note">
        Note message with gray styling.
      </Callout>
    </div>
  )
}

export const DarkModePreview: Story = {
  args: {
    children: ''
  },
  name: 'Dark Mode Preview',
  parameters: {
    backgrounds: { default: 'dark' }
  },
  render: () => (
    <div className="dark flex max-w-md flex-col gap-4">
      <Callout
        title="Info"
        variant="info">
        Informational message in dark mode.
      </Callout>
      <Callout
        title="Warning"
        variant="warning">
        Warning message in dark mode.
      </Callout>
      <Callout
        title="Success"
        variant="success">
        Success message in dark mode.
      </Callout>
    </div>
  )
}

export const Playground: Story = {
  args: {
    children: 'Customize this callout using the controls panel.',
    title: 'Playground',
    variant: 'info'
  }
}
