import type { Meta, StoryObj } from '@storybook/react-vite'

import { TestimonialCard } from './testimonial-card'

const meta = {
  argTypes: {
    author: {
      control: 'text',
      description: 'Author name'
    },
    avatar: {
      control: 'text',
      description: 'Optional avatar URL'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    },
    quote: {
      control: 'text',
      description: 'The testimonial quote text'
    },
    rating: {
      control: { max: 5, min: 1, step: 1, type: 'number' },
      description: 'Optional rating from 1-5'
    },
    role: {
      control: 'text',
      description: "Author's role or title"
    }
  },
  component: TestimonialCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Cards/TestimonialCard'
} satisfies Meta<typeof TestimonialCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    author: 'Sarah Johnson',
    quote: 'This product has completely transformed how our team works. Highly recommended!'
  }
}

export const WithRating: Story = {
  args: {
    author: 'Michael Chen',
    quote: 'Incredible experience from start to finish. The attention to detail is remarkable.',
    rating: 5
  },
  name: 'With Rating'
}

export const WithAvatar: Story = {
  args: {
    author: 'Emily Davis',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    quote: 'The best investment we have made this year. Customer support is outstanding.'
  },
  name: 'With Avatar'
}

export const WithRole: Story = {
  args: {
    author: 'David Wilson',
    quote: 'A game-changer for our business operations.',
    role: 'CTO at TechCorp'
  },
  name: 'With Role'
}

export const FullTestimonial: Story = {
  args: {
    author: 'Amanda Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    quote: 'We have been using this service for over a year now and it has exceeded all our expectations. The team is responsive, the product is reliable, and the results speak for themselves.',
    rating: 5,
    role: 'VP of Marketing at StartupXYZ'
  },
  name: 'Full Testimonial'
}

export const Rating4Stars: Story = {
  args: {
    author: 'Robert Kim',
    quote: 'Great product with room for minor improvements. Overall very satisfied.',
    rating: 4
  },
  name: '4 Star Rating'
}

export const Rating3Stars: Story = {
  args: {
    author: 'Lisa Thompson',
    quote: 'Decent product that gets the job done. Some features could be better.',
    rating: 3
  },
  name: '3 Star Rating'
}

export const TestimonialGrid: Story = {
  args: {
    author: 'Sarah Johnson',
    quote: 'This product has completely transformed how our team works.'
  },
  name: 'Testimonial Grid',
  render: () => (
    <div className="grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
      <TestimonialCard
        author="Sarah Johnson"
        avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
        quote="This product has completely transformed how our team works. Highly recommended!"
        rating={5}
        role="Product Manager"
      />
      <TestimonialCard
        author="Michael Chen"
        avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        quote="Incredible experience from start to finish. The attention to detail is remarkable."
        rating={5}
        role="Engineering Lead"
      />
      <TestimonialCard
        author="Emily Davis"
        avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
        quote="The best investment we have made this year."
        rating={4}
        role="CEO"
      />
      <TestimonialCard
        author="David Wilson"
        quote="A game-changer for our business operations."
        rating={5}
        role="Operations Director"
      />
    </div>
  )
}

export const Playground: Story = {
  args: {
    author: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    quote: 'This is an amazing product that I highly recommend to everyone!',
    rating: 5,
    role: 'Software Engineer'
  }
}
