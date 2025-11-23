"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
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
    { stage: "Pipeline", value: 92 },
    { stage: "Qualified", value: 82 },
    { stage: "Proposal", value: 70 },
    { stage: "Negotiation", value: 45 },
    { stage: "Won", value: 60 },
]

const chartConfig = {
    value: {
        label: "Percentage",
        color: "hsl(var(--chart-1))",
    },
    label: {
        color: "hsl(var(--background))",
    },
} satisfies ChartConfig

export function ForecastWeightedChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Forecast Weighted</CardTitle>
                <CardDescription>Pipeline stage completion rates</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        layout="vertical"
                        margin={{
                            right: 40,
                        }}
                    >
                        <CartesianGrid horizontal={false} />
                        <YAxis
                            dataKey="stage"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            hide
                        />
                        <XAxis dataKey="value" type="number" hide />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Bar
                            dataKey="value"
                            layout="vertical"
                            fill="var(--color-value)"
                            radius={4}
                        >
                            <LabelList
                                dataKey="stage"
                                position="insideLeft"
                                offset={8}
                                className="fill-[--color-label]"
                                fontSize={12}
                            />
                            <LabelList
                                dataKey="value"
                                position="right"
                                offset={8}
                                className="fill-foreground"
                                fontSize={12}
                                formatter={(value: number) => `${value}%`}
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 leading-none font-medium">
                    Trending up by 2.7% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground leading-none">
                    Showing NOW statistics for the last 6 months
                </div>
            </CardFooter>
        </Card>
    )
}
