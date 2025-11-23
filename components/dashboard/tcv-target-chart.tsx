"use client"

import { TrendingUp } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"
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

const chartData = [{ target: 127.32, completed: 83.6, ongoing: 23.72, pending: 20 }]

const chartConfig = {
    completed: {
        label: "Completed",
        color: "hsl(var(--chart-1))",
    },
    ongoing: {
        label: "Ongoing",
        color: "hsl(var(--chart-2))",
    },
    pending: {
        label: "Pending",
        color: "hsl(var(--chart-3))",
    },
} satisfies ChartConfig

export function TcvTargetChart() {
    const totalValue = chartData[0].completed + chartData[0].ongoing + chartData[0].pending
    const completionPercentage = Math.round((chartData[0].completed / chartData[0].target) * 100)

    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Total TCV vs. Target</CardTitle>
                <CardDescription className="text-xl font-bold">₱127.32 M</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 items-center pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square w-full max-w-[250px]"
                >
                    <RadialBarChart
                        data={chartData}
                        endAngle={180}
                        innerRadius={80}
                        outerRadius={130}
                    >
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) - 16}
                                                    className="fill-foreground text-4xl font-bold"
                                                >
                                                    {completionPercentage}%
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 4}
                                                    className="fill-muted-foreground text-sm"
                                                >
                                                    Completion
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                        <RadialBar
                            dataKey="completed"
                            stackId="a"
                            cornerRadius={5}
                            fill="var(--color-completed)"
                            className="stroke-transparent stroke-2"
                        />
                        <RadialBar
                            dataKey="ongoing"
                            fill="var(--color-ongoing)"
                            stackId="a"
                            cornerRadius={5}
                            className="stroke-transparent stroke-2"
                        />
                        <RadialBar
                            dataKey="pending"
                            fill="var(--color-pending)"
                            stackId="a"
                            cornerRadius={5}
                            className="stroke-transparent stroke-2"
                        />
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-1))]" />
                        <span className="text-muted-foreground">Completed</span>
                        <span className="font-semibold">₱{chartData[0].completed} M</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-2))]" />
                        <span className="text-muted-foreground">Ongoing</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-[hsl(var(--chart-3))]" />
                        <span className="text-muted-foreground">Pending</span>
                        <span className="font-semibold">₱{chartData[0].pending} M</span>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
