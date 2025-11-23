"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { month: "Jan", winrate: 45 },
    { month: "Feb", winrate: 52 },
    { month: "Mar", winrate: 48 },
    { month: "Apr", winrate: 55 },
    { month: "May", winrate: 60 },
    { month: "Jun", winrate: 58 },
    { month: "Jul", winrate: 62 },
    { month: "Aug", winrate: 65.8 },
]

const chartConfig = {
    winrate: {
        label: "Win Rate",
        color: "hsl(var(--chart-4))",
    },
} satisfies ChartConfig

export function OverallWinrateChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Overall Winrate</CardTitle>
                <CardDescription>"Closed Won" vs "Lost Opportunities"</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="mb-4">
                    <div className="text-5xl font-bold">65.8%</div>
                </div>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Area
                            dataKey="winrate"
                            type="monotone"
                            fill="var(--color-winrate)"
                            fillOpacity={0.4}
                            stroke="var(--color-winrate)"
                            strokeWidth={2}
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 leading-none font-medium text-muted-foreground">
                            Current win rate trending upward
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
