"use client"

import { useState, ReactNode } from "react"
import { CodeBlock } from "./paradigm"

type TierBadge = "free" | "premium"

interface ComponentPreviewProps {
  title: string
  description?: string
  code: string
  children: ReactNode
  tier?: TierBadge
}

export function ComponentPreview({
  title,
  description,
  code,
  children,
  tier,
}: ComponentPreviewProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview")

  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="flex items-center gap-3">
          <h3 className="font-medium text-sm">{title}</h3>
          {tier && (
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                tier === "free"
                  ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                  : "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
              }`}
            >
              {tier === "free" ? "Free" : "Premium"}
            </span>
          )}
        </div>
        {description && (
          <p className="text-xs text-zinc-500 dark:text-zinc-400 hidden sm:block">
            {description}
          </p>
        )}
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
          Preview
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
        <CodeBlock code={code} />
      )}
    </div>
  )
}
