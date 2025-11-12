import { Card } from "./ui/card";
import { MoreVertical } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Online", value: 5420, color: "hsl(var(--success))" },
  { name: "Referral", value: 4200, color: "hsl(var(--warning))" },
  { name: "Direct", value: 3800, color: "hsl(var(--info))" },
];

export function LeadSourcesChart() {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-6">
        <h3 className="text-lg font-semibold">Lead by Sources</h3>
        <button className="p-1 hover:bg-muted rounded transition-colors">
          <MoreVertical className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
      
      <div className="relative">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <p className="text-xs text-muted-foreground">Total Lead</p>
          <p className="text-2xl font-bold">${total.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="mt-6 space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-muted-foreground">{item.name}</span>
            </div>
            <span className="text-sm font-semibold">
              ${item.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
