# Pipeline Pro - CRM Dashboard

A modern, full-featured CRM dashboard built with Next.js 16, React, TypeScript, Shadcn UI, and Recharts, implementing a 1:1 replica of the Figma design.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn UI
- **Charts**: Recharts
- **Font**: Geist (Sans & Mono)
- **Icons**: Lucide React

## 📦 Project Structure

```
pipeline-pro/
├── app/
│   ├── layout.tsx          # Root layout with Geist font
│   ├── page.tsx            # Main dashboard page
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── ui/                 # Shadcn UI components
│   │   ├── sidebar.tsx
│   │   ├── card.tsx
│   │   ├── button.tsx
│   │   ├── chart.tsx
│   │   └── ...
│   ├── app-sidebar.tsx     # Main navigation sidebar
│   └── dashboard/          # Dashboard-specific components
│       ├── metric-card.tsx
│       ├── tcv-target-chart.tsx
│       ├── overall-winrate-chart.tsx
│       ├── won-lost-chart.tsx
│       ├── revenue-mix-chart.tsx
│       └── forecast-weighted-chart.tsx
└── public/                 # Static assets
```

## 🎨 Features Implemented

### Navigation Sidebar
- **Pipeline Core Section**
  - Leads
  - Opportunities
  - Accounts
  - Contacts
  
- **Productivity & Execution Section**
  - Tasks
  - Dashboard (active)
  
- **Intelligence & Strategy Section**
  - Reports
  - Forecast

- Brand logo with gradient
- User profile section with avatar
- Collapsible menu items with icons

### Dashboard Metrics (Top Row)
1. **Prospects**: ₱793,632.82
   - Blue area chart
   - +12.2% vs last month
   
2. **Won**: ₱72.82 M
   - Green area chart
   - +8.5% vs last year
   
3. **Proposal**: ₱1,827,123.02
   - Orange area chart
   - +3.1% vs last month
   
4. **Qualified**: ₱682,728.69
   - Green area chart
   - +2% vs last month

### Analytics Charts (Second Row)
1. **Total TCV vs. Target**: ₱127.32 M
   - Donut chart showing 72% completion
   - Three segments: Completed, Ongoing, Pending
   - Legend with values

2. **Overall Winrate**: 65.8%
   - Green area chart
   - Shows "Closed Won" vs "Lost Opportunities"
   - Monthly trend data

3. **Won vs. Lost**
   - Grouped bar chart
   - Monthly comparison
   - Blue color scheme

### Additional Charts (Third Row)
1. **Revenue Mix**: ₱83.6 M Total
   - Donut chart with three segments:
     - Cloud Consumption: ₱34.6 M
     - Professional Support: ₱25 M
     - Support Services: ₱24 M
   - Legend with color indicators

2. **Forecast Weighted**
   - Horizontal bar chart
   - Five stages: Pipeline (92%), Qualified (82%), Proposal (70%), Negotiation (45%), Won (60%)
   - Trending indicator: +2.7% this month

## 🎯 Design Fidelity

The implementation matches the Figma design with:
- ✅ Exact color scheme (Neutral Colors, Blue gradients, Green accents)
- ✅ Proper spacing and padding
- ✅ Correct typography using Geist font
- ✅ All chart types and data visualizations
- ✅ Responsive layouts using Tailwind's grid system
- ✅ Interactive hover states and animations
- ✅ Professional iconography using Lucide React

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the dashboard.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📝 Component Details

### MetricCard Component
Reusable component for displaying key metrics with:
- Title and icon
- Large value display
- Trend indicator (up/down)
- Inline area chart
- Customizable colors

### Chart Components
Each chart is a separate component for maintainability:
- **TcvTargetChart**: Donut chart with center label
- **OverallWinrateChart**: Area chart with gradient fill
- **WonLostChart**: Grouped bar chart
- **RevenueMixChart**: Donut chart with positioned labels
- **ForecastWeightedChart**: Horizontal bar chart

### AppSidebar Component
Full-featured navigation sidebar with:
- Grouped menu sections
- Active state highlighting
- User profile footer
- Collapsible items

## 🎨 Customization

### Colors
Colors are defined in `app/globals.css` using CSS custom properties:
- Neutral colors: `--neutral-50`, `--neutral-100`, `--neutral-200`
- Chart colors: `--chart-1` through `--chart-5`
- Sidebar colors: `--sidebar`, `--sidebar-foreground`, etc.

### Charts
Chart data can be updated in `app/page.tsx`:
- Modify the data arrays for each metric
- Adjust colors in component files
- Change chart types in individual chart components

## 🔧 Commands

```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm start

# Lint
npm run lint
```

## 📄 License

This project was created as a demonstration of implementing a Figma design with modern web technologies.

## 🙏 Acknowledgments

- Design: Figma Portfolio design
- UI Components: Shadcn UI
- Charts: Recharts
- Icons: Lucide React
- Font: Geist by Vercel
