import type { Meta, StoryObj } from '@storybook/react-vite'

import { Blockquote } from './blockquote'

const meta = {
  argTypes: {
    cite: {
      control: 'text',
      description: 'Optional attribution/citation'
    },
    variant: {
      control: 'select',
      description: 'Visual style variant',
      options: ['default', 'bordered', 'filled']
    }
  },
  component: Blockquote,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Components/Blockquote'
} satisfies Meta<typeof Blockquote>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children:
      'The only way to do great work is to love what you do. If you haven\'t found it yet, keep looking. Don\'t settle.'
  }
}

export const WithCitation: Story = {
  args: {
    children:
      'The only way to do great work is to love what you do. If you haven\'t found it yet, keep looking. Don\'t settle.',
    cite: 'Steve Jobs'
  }
}

export const Bordered: Story = {
  args: {
    children:
      'In the middle of difficulty lies opportunity.',
    cite: 'Albert Einstein',
    variant: 'bordered'
  }
}

export const Filled: Story = {
  args: {
    children:
      'Be yourself; everyone else is already taken.',
    cite: 'Oscar Wilde',
    variant: 'filled'
  }
}

export const LongQuote: Story = {
  args: {
    children:
      'It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming.',
    cite: 'Theodore Roosevelt',
    variant: 'bordered'
  },
  name: 'Long Quote'
}

export const WithParagraphs: Story = {
  args: {
    children: (
      <>
        <p>First paragraph of the quote with important context.</p>
        <p>Second paragraph continuing the thought and expanding on the idea.</p>
      </>
    ),
    cite: 'Anonymous Author',
    variant: 'default'
  },
  name: 'With Multiple Paragraphs'
}

export const VariantComparison: Story = {
  args: {
    children: ''
  },
  name: 'Variant Comparison',
  render: () => (
    <div className="flex max-w-xl flex-col gap-6">
      <Blockquote
        cite="Default Style"
        variant="default">
        This is the default blockquote style with a left border accent and italic text.
      </Blockquote>
      <Blockquote
        cite="Bordered Style"
        variant="bordered">
        This is the bordered blockquote style with a full border and subtle background.
      </Blockquote>
      <Blockquote
        cite="Filled Style"
        variant="filled">
        This is the filled blockquote style with a solid muted background.
      </Blockquote>
    </div>
  )
}

export const Playground: Story = {
  args: {
    children: 'Edit this quote in the controls panel.',
    cite: 'You',
    variant: 'default'
  }
}
