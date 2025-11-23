"use client"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { MetricCard } from "@/components/dashboard/metric-card"
import { TcvTargetChart } from "@/components/dashboard/tcv-target-chart"
import { OverallWinrateChart } from "@/components/dashboard/overall-winrate-chart"
import { WonLostChart } from "@/components/dashboard/won-lost-chart"
import { RevenueMixChart } from "@/components/dashboard/revenue-mix-chart"
import { ForecastWeightedChart } from "@/components/dashboard/forecast-weighted-chart"
import { Search, Bell, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Mock data for metric cards
const prospectsData = Array.from({ length: 20 }, (_, i) => ({ value: 700000 + Math.random() * 100000 }))
const wonData = Array.from({ length: 20 }, (_, i) => ({ value: 60000000 + Math.random() * 15000000 }))
const proposalData = Array.from({ length: 20 }, (_, i) => ({ value: 1600000 + Math.random() * 300000 }))
const qualifiedData = Array.from({ length: 20 }, (_, i) => ({ value: 600000 + Math.random() * 100000 }))

export default function Home() {
  return (
    <SidebarProvider defaultOpen>
      <AppSidebar />
      <SidebarInset>
        <div className="flex h-full flex-col">
          {/* Header */}
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
            <h1 className="text-lg font-semibold">Dashboard</h1>

            <div className="ml-auto flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  className="w-64 pl-9"
                />
              </div>
              <Button variant="ghost" className="gap-2">
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </Button>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto p-6">
            <div className="space-y-6">
              {/* Top Metrics Row */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  title="Prospects"
                  value="₱793,632"
                  subValue=".82"
                  trend="up"
                  trendText="+12.2% vs last month"
                  chartColor="#3b82f6"
                  chartData={prospectsData}
                  icon={
                    <svg
                      className="h-4 w-4 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <circle cx="12" cy="12" r="10" strokeWidth={2} />
                      <path strokeWidth={2} d="M12 6v6l4 2" />
                    </svg>
                  }
                />
                <MetricCard
                  title="Won"
                  value="₱72.82 M"
                  subValue=""
                  trend="up"
                  trendText="+8.5% vs last year"
                  chartColor="#22c55e"
                  chartData={wonData}
                  icon={
                    <svg
                      className="h-4 w-4 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }
                />
                <MetricCard
                  title="Proposal"
                  value="₱1,827,123"
                  subValue=".02"
                  trend="up"
                  trendText="+3.1% vs last month"
                  chartColor="#f97316"
                  chartData={proposalData}
                  icon={
                    <svg
                      className="h-4 w-4 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  }
                />
                <MetricCard
                  title="Qualified"
                  value="₱682,728"
                  subValue=".69"
                  trend="up"
                  trendText="+2% vs last month"
                  chartColor="#22c55e"
                  chartData={qualifiedData}
                  icon={
                    <svg
                      className="h-4 w-4 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  }
                />
              </div>

              {/* Second Row - Charts */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <TcvTargetChart />
                <OverallWinrateChart />
                <WonLostChart />
              </div>

              {/* Third Row - More Charts */}
              <div className="grid gap-4 md:grid-cols-2">
                <RevenueMixChart />
                <ForecastWeightedChart />
              </div>
            </div>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
