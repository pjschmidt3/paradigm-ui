import type { Preview } from '@storybook/react-vite'
import './preview.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        light: {
          name: 'light',
          value: '#ffffff'
        },

        dark: {
          name: 'dark',
          value: '#1a1a1a'
        }
      }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },

  tags: ['autodocs'],

  initialGlobals: {
    backgrounds: {
      value: 'light'
    }
  }
}

export default preview
