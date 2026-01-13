import type { Meta, StoryObj } from '@storybook/react-vite'

import { useMediaQuery } from './use-media-query'

const meta = {
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Hooks/useMediaQuery'
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function ResponsiveIndicatorDemo() {
  const isMobile = useMediaQuery('(max-width: 639px)')
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)')
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const isLargeDesktop = useMediaQuery('(min-width: 1280px)')

  return (
    <div className="flex flex-col gap-4 min-w-[300px]">
      <p className="text-sm text-gray-600 mb-2">
        Resize your browser window to see the indicators change:
      </p>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div
            className={`w-4 h-4 rounded-full ${
              isMobile ? 'bg-green-500' : 'bg-gray-300'
            }`}
          />
          <span className={isMobile ? 'font-semibold' : 'text-gray-500'}>
            Mobile (&lt;640px)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div
            className={`w-4 h-4 rounded-full ${
              isTablet ? 'bg-green-500' : 'bg-gray-300'
            }`}
          />
          <span className={isTablet ? 'font-semibold' : 'text-gray-500'}>
            Tablet (640px - 1023px)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div
            className={`w-4 h-4 rounded-full ${
              isDesktop ? 'bg-green-500' : 'bg-gray-300'
            }`}
          />
          <span className={isDesktop ? 'font-semibold' : 'text-gray-500'}>
            Desktop (&gt;=1024px)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div
            className={`w-4 h-4 rounded-full ${
              isLargeDesktop ? 'bg-green-500' : 'bg-gray-300'
            }`}
          />
          <span className={isLargeDesktop ? 'font-semibold' : 'text-gray-500'}>
            Large Desktop (&gt;=1280px)
          </span>
        </div>
      </div>

      <div className="mt-4 p-4 bg-gray-100 rounded">
        <p className="font-semibold">
          Current: {' '}
          {isMobile && 'Mobile'}
          {isTablet && 'Tablet'}
          {isDesktop && !isLargeDesktop && 'Desktop'}
          {isLargeDesktop && 'Large Desktop'}
        </p>
      </div>
    </div>
  )
}

export const Default: Story = {
  name: 'Responsive Indicator',
  render: () => <ResponsiveIndicatorDemo />
}

function PreferenceQueriesDemo() {
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const prefersHighContrast = useMediaQuery('(prefers-contrast: high)')

  return (
    <div className="flex flex-col gap-4 min-w-[300px]">
      <p className="text-sm text-gray-600 mb-2">
        Detects user system preferences:
      </p>

      <div className="space-y-3">
        <div className="p-3 rounded border">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{prefersDark ? '🌙' : '☀️'}</span>
            <div>
              <p className="font-semibold">Color Scheme</p>
              <p className="text-sm text-gray-500">
                {prefersDark ? 'Dark mode preferred' : 'Light mode preferred'}
              </p>
            </div>
          </div>
        </div>

        <div className="p-3 rounded border">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{prefersReducedMotion ? '🚫' : '✨'}</span>
            <div>
              <p className="font-semibold">Motion</p>
              <p className="text-sm text-gray-500">
                {prefersReducedMotion ? 'Reduced motion preferred' : 'Full animations allowed'}
              </p>
            </div>
          </div>
        </div>

        <div className="p-3 rounded border">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{prefersHighContrast ? '⬛' : '🔘'}</span>
            <div>
              <p className="font-semibold">Contrast</p>
              <p className="text-sm text-gray-500">
                {prefersHighContrast ? 'High contrast preferred' : 'Normal contrast'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const SystemPreferences: Story = {
  name: 'System Preferences',
  render: () => <PreferenceQueriesDemo />
}

function ConditionalRenderingDemo() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <div className="min-w-[300px]">
      <p className="text-sm text-gray-600 mb-4">
        Different content rendered based on screen size:
      </p>

      {isMobile ? (
        <div className="p-4 bg-blue-100 border border-blue-300 rounded">
          <h3 className="font-bold text-blue-800">Mobile View</h3>
          <p className="text-sm text-blue-600 mt-2">
            Simplified content for smaller screens.
            Try resizing to see the desktop version.
          </p>
        </div>
      ) : (
        <div className="p-4 bg-green-100 border border-green-300 rounded">
          <h3 className="font-bold text-green-800">Desktop View</h3>
          <p className="text-sm text-green-600 mt-2">
            Full-featured content for larger screens.
            This view has more details and options.
          </p>
          <div className="mt-3 flex gap-2">
            <button className="px-3 py-1 bg-green-500 text-white rounded text-sm">
              Action 1
            </button>
            <button className="px-3 py-1 bg-green-500 text-white rounded text-sm">
              Action 2
            </button>
            <button className="px-3 py-1 bg-green-500 text-white rounded text-sm">
              Action 3
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export const ConditionalRendering: Story = {
  name: 'Conditional Rendering',
  render: () => <ConditionalRenderingDemo />
}
