import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'

export default function DocsPage() {
  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        Documentation
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg">
        Welcome to Paradigm UI documentation. Get started by exploring our components, hooks, and blocks.
      </Paragraph>
    </div>
  )
}
