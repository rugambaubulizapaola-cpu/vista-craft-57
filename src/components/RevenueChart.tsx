import { Card } from "./ui/card";
import { MoreVertical } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", current: 7200, previous: 4200 },
  { month: "Feb", current: 7800, previous: 4800 },
  { month: "Mar", current: 8500, previous: 5200 },
  { month: "Apr", current: 8200, previous: 5800 },
  { month: "May", current: 8800, previous: 6200 },
  { month: "Jun", current: 8400, previous: 6400 },
  { month: "Jul", current: 8600, previous: 6600 },
  { month: "Aug", current: 8900, previous: 6800 },
  { month: "Sep", current: 8700, previous: 6500 },
  { month: "Oct", current: 9000, previous: 6700 },
  { month: "Nov", current: 9200, previous: 6900 },
  { month: "Dec", current: 9400, previous: 7000 },
];

export function RevenueChart() {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-1">Revenue Report</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">$6,379.00</span>
            <span className="text-sm text-destructive">↓ 4.3% from last period</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Sales
          </button>
          <button className="p-1 hover:bg-muted rounded transition-colors">
            <MoreVertical className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="month" 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
            }}
          />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            formatter={(value) => value === 'current' ? 'This period' : 'Last period'}
          />
          <Line 
            type="monotone" 
            dataKey="current" 
            stroke="hsl(var(--info))" 
            strokeWidth={2}
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="previous" 
            stroke="hsl(var(--warning))" 
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
