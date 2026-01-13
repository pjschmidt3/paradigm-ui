import type { Meta, StoryObj } from '@storybook/react-vite'

import { CodeBlock } from './code-block'

const meta = {
  argTypes: {
    code: {
      control: 'text',
      description: 'The code to display'
    },
    language: {
      control: 'text',
      description: 'Language identifier for display badge'
    },
    showCopy: {
      control: 'boolean',
      description: 'Show/hide the copy button'
    },
    showLanguage: {
      control: 'boolean',
      description: 'Show/hide the language badge'
    }
  },
  component: CodeBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Components/CodeBlock'
} satisfies Meta<typeof CodeBlock>

export default meta
type Story = StoryObj<typeof meta>

const basicCode = `const greeting = 'Hello, World!'
console.log(greeting)`

export const Default: Story = {
  args: {
    code: basicCode
  }
}

const typescriptCode = `interface User {
  id: string
  name: string
  email: string
  createdAt: Date
}

function getUser(id: string): Promise<User> {
  return fetch(\`/api/users/\${id}\`)
    .then(res => res.json())
}

export { getUser, type User }`

export const TypeScript: Story = {
  args: {
    code: typescriptCode,
    language: 'typescript'
  }
}

export const WithoutCopy: Story = {
  args: {
    code: basicCode,
    showCopy: false
  },
  name: 'Without Copy Button'
}

export const WithoutLanguage: Story = {
  args: {
    code: basicCode,
    showLanguage: false
  },
  name: 'Without Language Badge'
}

const longCode = `import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { cn } from '@/lib/utils'

interface DataGridProps<T extends Record<string, unknown>> {
  data: T[]
  columns: Column<T>[]
  onRowClick?: (row: T, index: number) => void
  sortable?: boolean
  filterable?: boolean
  pagination?: boolean
  pageSize?: number
  className?: string
}

interface Column<T> {
  key: keyof T
  header: string
  width?: string | number
  sortable?: boolean
  render?: (value: T[keyof T], row: T, index: number) => React.ReactNode
}

export function DataGrid<T extends Record<string, unknown>>({
  data,
  columns,
  onRowClick,
  sortable = true,
  filterable = false,
  pagination = true,
  pageSize = 10,
  className
}: DataGridProps<T>) {
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
  const [currentPage, setCurrentPage] = useState(1)
  const [filter, setFilter] = useState('')
  const tableRef = useRef<HTMLTableElement>(null)

  const filteredData = useMemo(() => {
    if (!filter || !filterable) return data
    return data.filter(row =>
      Object.values(row).some(value =>
        String(value).toLowerCase().includes(filter.toLowerCase())
      )
    )
  }, [data, filter, filterable])

  const sortedData = useMemo(() => {
    if (!sortColumn || !sortable) return filteredData
    return [...filteredData].sort((a, b) => {
      const aVal = a[sortColumn]
      const bVal = b[sortColumn]
      const comparison = aVal < bVal ? -1 : aVal > bVal ? 1 : 0
      return sortDirection === 'asc' ? comparison : -comparison
    })
  }, [filteredData, sortColumn, sortDirection, sortable])

  const paginatedData = useMemo(() => {
    if (!pagination) return sortedData
    const start = (currentPage - 1) * pageSize
    return sortedData.slice(start, start + pageSize)
  }, [sortedData, currentPage, pageSize, pagination])

  const handleSort = useCallback((column: keyof T) => {
    if (!sortable) return
    if (sortColumn === column) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }, [sortColumn, sortable])

  return (
    <div className={cn('overflow-auto', className)}>
      <table ref={tableRef} className="w-full border-collapse">
        {/* Table implementation continues... */}
      </table>
    </div>
  )
}`

export const LongCode: Story = {
  args: {
    code: longCode,
    language: 'tsx'
  },
  name: 'Long Code (Overflow)',
  parameters: {
    layout: 'padded'
  }
}

const pythonCode = `def fibonacci(n: int) -> list[int]:
    """Generate Fibonacci sequence up to n terms."""
    if n <= 0:
        return []
    elif n == 1:
        return [0]

    sequence = [0, 1]
    while len(sequence) < n:
        sequence.append(sequence[-1] + sequence[-2])

    return sequence

# Example usage
result = fibonacci(10)
print(f"First 10 Fibonacci numbers: {result}")`

export const Python: Story = {
  args: {
    code: pythonCode,
    language: 'python'
  }
}

const jsonCode = `{
  "name": "paradigm-ui",
  "version": "0.2.0",
  "description": "A modern React component library",
  "dependencies": {
    "react": "^18.0.0",
    "tailwindcss": "^4.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "storybook": "^8.0.0"
  }
}`

export const JSON: Story = {
  args: {
    code: jsonCode,
    language: 'json'
  }
}

export const Minimal: Story = {
  args: {
    code: 'npm install paradigm-ui',
    language: 'bash',
    showCopy: true,
    showLanguage: false
  },
  name: 'Minimal (Install Command)'
}

export const Playground: Story = {
  args: {
    code: basicCode,
    language: 'tsx',
    showCopy: true,
    showLanguage: true
  }
}
