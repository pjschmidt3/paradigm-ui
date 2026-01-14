'use client'

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarInset,
  SidebarTrigger
} from '@/components/paradigm'
import { DocsSidebar } from '@/components/docs-sidebar'

export default function DocsLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" className="top-16 h-[calc(100vh-4rem)]">
        <SidebarHeader className="border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2 px-2">
            <span className="font-semibold text-sm">Documentation</span>
            <span className="rounded-md bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 text-xs text-zinc-600 dark:text-zinc-400">
              v0.2.0
            </span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <DocsSidebar />
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="pt-16">
        <div className="flex h-12 items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 px-4 md:hidden">
          <SidebarTrigger />
          <span className="text-sm font-medium">Documentation</span>
        </div>
        <main className="flex-1 p-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
