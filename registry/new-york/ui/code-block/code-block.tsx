'use client'

import { useState } from 'react'

import { cn } from '@/src/lib/utils'

export interface CodeBlockProps {
  /**
   * The code to display
   */
  code: string
  /**
   * Language identifier for display badge
   * @default "tsx"
   */
  language?: string
  /**
   * Additional CSS classes for the container
   */
  className?: string
  /**
   * Show/hide the language badge
   * @default true
   */
  showLanguage?: boolean
  /**
   * Show/hide the copy button
   * @default true
   */
  showCopy?: boolean
}

/**
 * CodeBlock - A syntax-highlighted code display component with copy functionality
 *
 * @example
 * // Basic usage
 * <CodeBlock code={`const x = 1`} />
 *
 * @example
 * // With language
 * <CodeBlock code={myCode} language="typescript" />
 *
 * @example
 * // Without copy button
 * <CodeBlock code={myCode} showCopy={false} />
 */
export function CodeBlock({
  code,
  language = 'tsx',
  className,
  showLanguage = true,
  showCopy = true
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn('relative group', className)}>
      {/* Language badge */}
      {showLanguage && (
        <div className="absolute top-3 left-3 text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase">
          {language}
        </div>
      )}

      {/* Copy button */}
      {showCopy && (
        <button
          onClick={handleCopy}
          type="button"
          className="absolute top-3 right-3 px-2 py-1 text-xs rounded bg-zinc-700 hover:bg-zinc-600 text-zinc-300 transition-colors opacity-0 group-hover:opacity-100"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      )}

      {/* Code block */}
      <pre className="bg-zinc-900 dark:bg-zinc-950 rounded-lg p-4 pt-10 overflow-x-auto">
        <code className="text-sm text-zinc-100 font-mono whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  )
}
