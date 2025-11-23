"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
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
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { month: "Jan", lost: 45, won: 52 },
    { month: "Feb", lost: 38, won: 48 },
    { month: "Mar", lost: 42, won: 55 },
    { month: "Apr", lost: 35, won: 58 },
    { month: "May", lost: 40, won: 52 },
    { month: "Jun", lost: 38, won: 50 },
    { month: "Jul", lost: 43, won: 48 },
    { month: "Aug", lost: 37, won: 54 },
    { month: "Sep", lost: 40, won: 52 },
    { month: "Oct", lost: 36, won: 49 },
    { month: "Nov", lost: 42, won: 55 },
    { month: "Dec", lost: 38, won: 60 },
]

const chartConfig = {
    lost: {
        label: "Lost",
        color: "hsl(var(--chart-2))",
    },
    won: {
        label: "Won",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export function WonLostChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Won vs. Lost</CardTitle>
                <CardDescription>Monthly deal outcomes</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar dataKey="lost" fill="var(--color-lost)" radius={4} />
                        <Bar dataKey="won" fill="var(--color-won)" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 leading-none font-medium text-muted-foreground">
                    Comparing won vs lost deals monthly
                </div>
            </CardFooter>
        </Card>
    )
}
