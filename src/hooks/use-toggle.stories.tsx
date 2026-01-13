import type { Meta, StoryObj } from '@storybook/react-vite'

import { useToggle } from './use-toggle'

const meta = {
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Hooks/useToggle'
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function BasicToggleDemo() {
  const [isOn, { toggle, setTrue, setFalse, setValue }] = useToggle(false)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div
          className={`w-16 h-8 rounded-full cursor-pointer transition-colors ${
            isOn ? 'bg-green-500' : 'bg-gray-300'
          }`}
          onClick={toggle}
        >
          <div
            className={`w-6 h-6 mt-1 rounded-full bg-white shadow transition-transform ${
              isOn ? 'translate-x-9' : 'translate-x-1'
            }`}
          />
        </div>
        <span className="font-mono text-sm">{isOn ? 'ON' : 'OFF'}</span>
      </div>

      <div className="flex gap-2 flex-wrap">
        <button
          className="px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600"
          onClick={toggle}
        >
          toggle()
        </button>
        <button
          className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
          onClick={setTrue}
        >
          setTrue()
        </button>
        <button
          className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
          onClick={setFalse}
        >
          setFalse()
        </button>
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
          onClick={() => setValue(true)}
        >
          setValue(true)
        </button>
        <button
          className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
          onClick={() => setValue(false)}
        >
          setValue(false)
        </button>
      </div>
    </div>
  )
}

export const Default: Story = {
  render: () => <BasicToggleDemo />
}

function CheckboxDemo() {
  const [acceptTerms, { toggle: toggleTerms }] = useToggle(false)
  const [newsletter, { toggle: toggleNewsletter }] = useToggle(true)
  const [notifications, { toggle: toggleNotifications }] = useToggle(false)

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-gray-600 mb-2">
        Multiple toggles managing checkbox-like state:
      </p>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          checked={acceptTerms}
          className="w-4 h-4"
          onChange={toggleTerms}
          type="checkbox"
        />
        <span>Accept terms and conditions</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          checked={newsletter}
          className="w-4 h-4"
          onChange={toggleNewsletter}
          type="checkbox"
        />
        <span>Subscribe to newsletter</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          checked={notifications}
          className="w-4 h-4"
          onChange={toggleNotifications}
          type="checkbox"
        />
        <span>Enable notifications</span>
      </label>

      <div className="mt-4 p-3 bg-gray-100 rounded text-sm font-mono">
        <div>acceptTerms: {String(acceptTerms)}</div>
        <div>newsletter: {String(newsletter)}</div>
        <div>notifications: {String(notifications)}</div>
      </div>
    </div>
  )
}

export const MultipleCheckboxes: Story = {
  name: 'Multiple Checkboxes',
  render: () => <CheckboxDemo />
}

function InitialValueDemo() {
  const [isActive, { toggle }] = useToggle(true)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-gray-600">
        This toggle starts with initialValue=true
      </p>

      <div className="flex items-center gap-4">
        <button
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            isActive
              ? 'bg-green-500 text-white'
              : 'bg-gray-200 text-gray-600'
          }`}
          onClick={toggle}
        >
          {isActive ? 'Active' : 'Inactive'}
        </button>
      </div>
    </div>
  )
}

export const InitialValueTrue: Story = {
  name: 'Initial Value True',
  render: () => <InitialValueDemo />
}
