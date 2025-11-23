"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Eye, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Area, AreaChart, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

interface MetricCardProps {
    title: string
    value: string
    subValue: string
    trend: "up" | "down"
    trendText: string
    chartColor: string
    chartData: Array<{ value: number }>
    icon?: React.ReactNode
}

export function MetricCard({
    title,
    value,
    subValue,
    trend,
    trendText,
    chartColor,
    chartData,
    icon,
}: MetricCardProps) {
    const chartConfig = {
        value: {
            label: title,
            color: chartColor,
        },
    } satisfies ChartConfig

    return (
        <Card className="overflow-hidden transition-all hover:shadow-lg">
            <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                        {icon}
                        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
                    </div>
                    <Button variant="ghost" size="icon" className="h-6 w-6 -mt-1">
                        <MoreVertical className="h-4 w-4 text-muted-foreground" />
                    </Button>
                </div>

                {/* Value */}
                <div className="space-y-1 mb-4">
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold tracking-tight">{value}</span>
                        <span className="text-lg font-medium text-muted-foreground">{subValue}</span>
                        <Eye className="h-4 w-4 text-muted-foreground ml-auto" />
                    </div>

                    {/* Trend */}
                    <div className="flex items-center gap-1 text-xs">
                        {trend === "up" ? (
                            <TrendingUp className="h-3 w-3 text-green-500" />
                        ) : (
                            <TrendingDown className="h-3 w-3 text-red-500" />
                        )}
                        <span className={trend === "up" ? "text-green-500" : "text-red-500"}>
                            {trendText}
                        </span>
                    </div>
                </div>

                {/* Chart */}
                <div className="h-20">
                    <ChartContainer config={chartConfig} className="h-full w-full">
                        <AreaChart data={chartData} margin={{ left: 0, right: 0, top: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor={chartColor} stopOpacity={0.3} />
                                    <stop offset="100%" stopColor={chartColor} stopOpacity={0.05} />
                                </linearGradient>
                            </defs>
                            <XAxis hide />
                            <YAxis hide />
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke={chartColor}
                                strokeWidth={2}
                                fill={`url(#gradient-${title})`}
                            />
                        </AreaChart>
                    </ChartContainer>
                </div>
            </CardContent>
        </Card>
    )
}
