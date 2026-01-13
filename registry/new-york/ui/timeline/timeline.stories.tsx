import type { Meta, StoryObj } from '@storybook/react-vite'

import { Briefcase, Check, GraduationCap, Rocket, Star } from 'lucide-react'

import { Timeline, TimelineItem } from './timeline'

const meta = {
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    },
    linePosition: {
      control: 'select',
      description: 'Line position for vertical orientation',
      options: ['left', 'center', 'right']
    },
    orientation: {
      control: 'select',
      description: 'Timeline orientation',
      options: ['vertical', 'horizontal']
    }
  },
  component: Timeline,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  title: 'Portfolio/Timeline'
} satisfies Meta<typeof Timeline>

export default meta
type Story = StoryObj<typeof meta>

const careerItems = [
  {
    date: 'Jan 2024 - Present',
    description: 'Leading frontend development for a fintech startup.',
    status: 'current' as const,
    title: 'Senior Frontend Developer'
  },
  {
    date: '2021 - 2023',
    description: 'Built and maintained multiple React applications.',
    status: 'completed' as const,
    title: 'Frontend Developer'
  },
  {
    date: '2019 - 2021',
    description: 'Started my journey in web development.',
    status: 'completed' as const,
    title: 'Junior Developer'
  },
  {
    date: '2015 - 2019',
    description: 'Bachelor of Science in Computer Science.',
    status: 'completed' as const,
    title: 'University'
  }
]

export const Default: Story = {
  args: {
    items: careerItems
  }
}

export const HorizontalTimeline: Story = {
  args: {
    items: [
      {
        date: 'Q1 2024',
        description: 'Project kickoff and planning',
        status: 'completed' as const,
        title: 'Phase 1'
      },
      {
        date: 'Q2 2024',
        description: 'Core development',
        status: 'current' as const,
        title: 'Phase 2'
      },
      {
        date: 'Q3 2024',
        description: 'Testing and QA',
        status: 'upcoming' as const,
        title: 'Phase 3'
      },
      {
        date: 'Q4 2024',
        description: 'Launch and deployment',
        status: 'upcoming' as const,
        title: 'Phase 4'
      }
    ],
    orientation: 'horizontal'
  },
  name: 'Horizontal Timeline'
}

export const WithIcons: Story = {
  args: {
    items: []
  },
  name: 'With Custom Icons',
  render: () => (
    <Timeline>
      <TimelineItem
        date="Jan 2024 - Present"
        description="Leading frontend development for a fintech startup."
        icon={<Star className="size-3" />}
        status="current"
        title="Senior Frontend Developer"
      />
      <TimelineItem
        date="2021 - 2023"
        description="Built and maintained multiple React applications."
        icon={<Briefcase className="size-3" />}
        status="completed"
        title="Frontend Developer"
      />
      <TimelineItem
        date="2019 - 2021"
        description="Started my journey in web development."
        icon={<Rocket className="size-3" />}
        status="completed"
        title="Junior Developer"
      />
      <TimelineItem
        date="2015 - 2019"
        description="Bachelor of Science in Computer Science."
        icon={<GraduationCap className="size-3" />}
        status="completed"
        title="University"
      />
    </Timeline>
  )
}

export const AlternatingLayout: Story = {
  args: {
    items: careerItems,
    linePosition: 'center'
  },
  name: 'Alternating (Center Line)'
}

export const RightAligned: Story = {
  args: {
    items: careerItems,
    linePosition: 'right'
  },
  name: 'Right Aligned'
}

export const CompanyHistory: Story = {
  args: {
    items: [
      {
        date: '2024',
        description: 'Reached 1 million active users worldwide.',
        status: 'current' as const,
        title: '1M Users'
      },
      {
        date: '2023',
        description: 'Raised $50M in Series B funding.',
        status: 'completed' as const,
        title: 'Series B'
      },
      {
        date: '2022',
        description: 'Launched mobile app on iOS and Android.',
        status: 'completed' as const,
        title: 'Mobile Launch'
      },
      {
        date: '2021',
        description: 'Raised $10M in Series A funding.',
        status: 'completed' as const,
        title: 'Series A'
      },
      {
        date: '2020',
        description: 'Company founded in San Francisco.',
        status: 'completed' as const,
        title: 'Founded'
      }
    ]
  },
  name: 'Company History'
}

export const ProjectMilestones: Story = {
  args: {
    items: []
  },
  name: 'Project Milestones',
  render: () => (
    <Timeline orientation="horizontal">
      <TimelineItem
        date="Week 1-2"
        icon={<Check className="size-3" />}
        status="completed"
        title="Research"
      />
      <TimelineItem
        date="Week 3-4"
        icon={<Check className="size-3" />}
        status="completed"
        title="Design"
      />
      <TimelineItem
        date="Week 5-8"
        status="current"
        title="Development"
      />
      <TimelineItem
        date="Week 9-10"
        status="upcoming"
        title="Testing"
      />
      <TimelineItem
        date="Week 11"
        status="upcoming"
        title="Launch"
      />
    </Timeline>
  )
}

export const MinimalTimeline: Story = {
  args: {
    items: [
      { status: 'completed' as const, title: 'Account Created' },
      { status: 'completed' as const, title: 'Profile Setup' },
      { status: 'current' as const, title: 'Verification' },
      { status: 'upcoming' as const, title: 'Complete' }
    ]
  },
  name: 'Minimal (No Dates)'
}

export const Playground: Story = {
  args: {
    items: careerItems,
    linePosition: 'left',
    orientation: 'vertical'
  }
}
