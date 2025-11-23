"use client"

import * as React from "react"
import {
  FileText,
  TrendingUp,
  Building2,
  Contact,
  ListTodo,
  LayoutDashboard,
  BarChart3,
  LineChart,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Pipeline Pro data
const data = {
  user: {
    name: "John",
    email: "jn@zagada@.resto.com.ph",
    avatar: "",
  },
  teams: [
    {
      name: "Pipeline Pro",
      logo: () => (
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-purple-600">
          <div className="h-4 w-4 rounded-sm bg-white/90" />
        </div>
      ),
      plan: "To-Cloud",
    },
  ],
  navMain: [
    {
      title: "Pipeline Core",
      url: "#",
      icon: LayoutDashboard,
      items: [
        {
          title: "Leads",
          url: "/leads",
          icon: FileText,
        },
        {
          title: "Opportunities",
          url: "/opportunities",
          icon: TrendingUp,
        },
        {
          title: "Accounts",
          url: "/accounts",
          icon: Building2,
        },
        {
          title: "Contacts",
          url: "/contacts",
          icon: Contact,
        },
      ],
    },
    {
      title: "Productivity & Execution",
      url: "#",
      icon: ListTodo,
      items: [
        {
          title: "Tasks",
          url: "/tasks",
          icon: ListTodo,
        },
        {
          title: "Dashboard",
          url: "/",
          icon: LayoutDashboard,
          isActive: true,
        },
      ],
    },
    {
      title: "Intelligence & Strategy",
      url: "#",
      icon: BarChart3,
      items: [
        {
          title: "Reports",
          url: "/reports",
          icon: BarChart3,
        },
        {
          title: "Forecast",
          url: "/forecast",
          icon: LineChart,
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
