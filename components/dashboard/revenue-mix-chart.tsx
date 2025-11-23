"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"
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
    { category: "cloud", value: 34.6, fill: "var(--color-cloud)" },
    { category: "professional", value: 25, fill: "var(--color-professional)" },
    { category: "support", value: 24, fill: "var(--color-support)" },
]

const chartConfig = {
    value: {
        label: "Revenue",
    },
    cloud: {
        label: "Cloud Consumption",
        color: "hsl(var(--chart-1))",
    },
    professional: {
        label: "Professional Support",
        color: "hsl(var(--chart-2))",
    },
    support: {
        label: "Support Services",
        color: "hsl(var(--chart-3))",
    },
} satisfies ChartConfig

export function RevenueMixChart() {
    const totalRevenue = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.value, 0)
    }, [])

    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Revenue Mix</CardTitle>
                <CardDescription>Revenue breakdown by category</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="value"
                            nameKey="category"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    ₱{totalRevenue.toFixed(1)} M
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Total
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex flex-wrap gap-4">
                    {chartData.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div
                                className="h-3 w-3 rounded-full"
                                style={{ backgroundColor: `hsl(var(--chart-${index + 1}))` }}
                            />
                            <span className="text-muted-foreground text-xs">
                                {chartConfig[item.category as keyof typeof chartConfig].label}
                            </span>
                        </div>
                    ))}
                </div>
            </CardFooter>
        </Card>
    )
}
