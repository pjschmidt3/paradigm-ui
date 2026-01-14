"use client"

import { useRef, useState } from "react"
import {
  useDisclosure,
  useToggle,
  useMediaQuery,
  useClickOutside,
  Box,
  FlexRow,
  Button
} from "./paradigm"

// Interactive demo for useDisclosure hook
function DisclosureDemo() {
  const { isOpen, open, close, toggle } = useDisclosure()

  return (
    <div className="w-full max-w-md">
      <FlexRow gap="sm" className="mb-4">
        <Button variant="outlined" size="sm" onClick={open}>
          Open
        </Button>
        <Button variant="outlined" size="sm" onClick={close}>
          Close
        </Button>
        <Button variant="default" size="sm" onClick={toggle}>
          Toggle
        </Button>
      </FlexRow>
      {isOpen && (
        <Box className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            Panel is <span className="font-semibold text-emerald-600">open</span>!
            Use the buttons above to control this panel.
          </p>
        </Box>
      )}
      {!isOpen && (
        <Box className="p-4 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Panel is <span className="font-medium">closed</span>. Click Open or Toggle.
          </p>
        </Box>
      )}
    </div>
  )
}

// Interactive demo for useToggle hook
function ToggleDemo() {
  const [isDark, { toggle, setTrue, setFalse }] = useToggle(false)

  return (
    <div className="w-full max-w-md">
      <FlexRow gap="sm" className="mb-4">
        <Button variant="outlined" size="sm" onClick={setTrue}>
          Dark
        </Button>
        <Button variant="outlined" size="sm" onClick={setFalse}>
          Light
        </Button>
        <Button variant="default" size="sm" onClick={toggle}>
          Toggle
        </Button>
      </FlexRow>
      <Box
        className={`p-4 rounded-lg transition-colors ${
          isDark
            ? "bg-zinc-900 text-zinc-100"
            : "bg-white border border-zinc-200 text-zinc-900"
        }`}
      >
        <p className="text-sm">
          Theme: <span className="font-semibold">{isDark ? "Dark" : "Light"}</span>
        </p>
        <p className="text-xs mt-1 opacity-70">
          Boolean state with convenient actions
        </p>
      </Box>
    </div>
  )
}

// Interactive demo for useMediaQuery hook
function MediaQueryDemo() {
  const isMobile = useMediaQuery("(max-width: 767px)")
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)")
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)")

  return (
    <div className="w-full max-w-md">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span
            className={`size-3 rounded-full ${
              isMobile ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-600"
            }`}
          />
          <span className="text-sm">Mobile (&lt;768px)</span>
        </div>
        <div className="flex items-center gap-3">
          <span
            className={`size-3 rounded-full ${
              isTablet ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-600"
            }`}
          />
          <span className="text-sm">Tablet (768-1023px)</span>
        </div>
        <div className="flex items-center gap-3">
          <span
            className={`size-3 rounded-full ${
              isDesktop ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-600"
            }`}
          />
          <span className="text-sm">Desktop (1024px+)</span>
        </div>
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700">
          <span
            className={`size-3 rounded-full ${
              prefersDark ? "bg-violet-500" : "bg-zinc-300 dark:bg-zinc-600"
            }`}
          />
          <span className="text-sm">Prefers Dark Mode</span>
        </div>
      </div>
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-4">
        Resize your browser to see the indicators change
      </p>
    </div>
  )
}

// Interactive demo for useClickOutside hook
function ClickOutsideDemo() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useClickOutside(dropdownRef, () => setIsOpen(false), isOpen)

  return (
    <div className="w-full max-w-md">
      <div className="relative" ref={dropdownRef}>
        <Button variant="default" size="sm" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Dropdown Open" : "Open Dropdown"}
        </Button>
        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg z-10">
            <div className="py-1">
              <div className="px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 cursor-pointer">
                Option 1
              </div>
              <div className="px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 cursor-pointer">
                Option 2
              </div>
              <div className="px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 cursor-pointer">
                Option 3
              </div>
            </div>
          </div>
        )}
      </div>
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-4">
        Click outside the dropdown to close it
      </p>
    </div>
  )
}

interface HookPreviewProps {
  title: string
  description: string
  children: React.ReactNode
  code: string
}

function HookPreview({ title, description, children, code }: HookPreviewProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview")

  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="flex items-center gap-3">
          <h3 className="font-medium text-sm font-mono">{title}</h3>
          <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
            Free
          </span>
        </div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 hidden sm:block">
          {description}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-zinc-200 dark:border-zinc-800">
        <button
          onClick={() => setActiveTab("preview")}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "preview"
              ? "text-zinc-900 dark:text-zinc-100 border-b-2 border-zinc-900 dark:border-zinc-100"
              : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
          }`}
        >
          Demo
        </button>
        <button
          onClick={() => setActiveTab("code")}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "code"
              ? "text-zinc-900 dark:text-zinc-100 border-b-2 border-zinc-900 dark:border-zinc-100"
              : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
          }`}
        >
          Code
        </button>
      </div>

      {/* Content */}
      {activeTab === "preview" ? (
        <div className="p-6 flex items-center justify-center min-h-[200px] bg-white dark:bg-zinc-950">
          {children}
        </div>
      ) : (
        <div className="bg-zinc-900 p-4 overflow-x-auto">
          <pre className="text-sm text-zinc-300 font-mono whitespace-pre-wrap">
            {code}
          </pre>
        </div>
      )}
    </div>
  )
}

export function HooksSection() {
  return (
    <section id="hooks" className="py-24 md:py-32 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">React Hooks</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
            7 production-ready React hooks for common UI patterns. All hooks are fully typed,
            tested, and free to use. From state management to DOM interactions.
          </p>
        </div>

        {/* Hook Previews */}
        <div className="space-y-8">
          {/* useDisclosure */}
          <HookPreview
            title="useDisclosure"
            description="Manage open/close state with callbacks"
            code={`import { useDisclosure } from "@paradigm/hooks"

const { isOpen, open, close, toggle } = useDisclosure({
  defaultOpen: false,
  onOpen: () => console.log("Opened"),
  onClose: () => console.log("Closed")
})

return (
  <div>
    <button onClick={toggle}>Toggle Panel</button>
    {isOpen && <Panel />}
  </div>
)`}
          >
            <DisclosureDemo />
          </HookPreview>

          {/* useToggle */}
          <HookPreview
            title="useToggle"
            description="Boolean state with convenient actions"
            code={`import { useToggle } from "@paradigm/hooks"

const [isDark, { toggle, setTrue, setFalse }] = useToggle(false)

return (
  <div className={isDark ? "dark" : "light"}>
    <button onClick={setTrue}>Enable Dark</button>
    <button onClick={setFalse}>Enable Light</button>
    <button onClick={toggle}>Toggle Theme</button>
  </div>
)`}
          >
            <ToggleDemo />
          </HookPreview>

          {/* useMediaQuery */}
          <HookPreview
            title="useMediaQuery"
            description="Reactive CSS media query matching"
            code={`import { useMediaQuery } from "@paradigm/hooks"

const isMobile = useMediaQuery("(max-width: 767px)")
const prefersDark = useMediaQuery("(prefers-color-scheme: dark)")

return (
  <div>
    {isMobile ? <MobileNav /> : <DesktopNav />}
    <p>Dark mode: {prefersDark ? "yes" : "no"}</p>
  </div>
)`}
          >
            <MediaQueryDemo />
          </HookPreview>

          {/* useClickOutside */}
          <HookPreview
            title="useClickOutside"
            description="Detect clicks outside an element"
            code={`import { useRef } from "react"
import { useClickOutside } from "@paradigm/hooks"

const ref = useRef<HTMLDivElement>(null)
const [isOpen, setIsOpen] = useState(false)

useClickOutside(ref, () => setIsOpen(false), isOpen)

return (
  <div ref={ref}>
    <button onClick={() => setIsOpen(true)}>Open</button>
    {isOpen && <Dropdown />}
  </div>
)`}
          >
            <ClickOutsideDemo />
          </HookPreview>
        </div>

        {/* More hooks note */}
        <div className="mt-8 p-4 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              + 3 more hooks:
            </span>{" "}
            <code className="font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
              useIsMobile
            </code>{" "}
            <code className="font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
              useScrollLock
            </code>{" "}
            <code className="font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
              useFocusTrap
            </code>{" "}
            for mobile detection, modal scroll management, and accessibility.
          </p>
        </div>
      </div>
    </section>
  )
}
