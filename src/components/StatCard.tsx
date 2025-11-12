import { LucideIcon, MoreVertical } from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  change: string;
  isPositive?: boolean;
}

export function StatCard({ icon: Icon, label, value, change, isPositive = true }: StatCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-lg bg-muted">
          <Icon className="w-5 h-5 text-foreground" />
        </div>
        <button className="p-1 hover:bg-muted rounded transition-colors">
          <MoreVertical className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
      
      <div>
        <p className="text-sm text-muted-foreground mb-1">{label}</p>
        <div className="flex items-end gap-2">
          <h3 className="text-3xl font-bold">{value}</h3>
          <span className={cn(
            "text-sm font-medium mb-1",
            isPositive ? "text-success" : "text-destructive"
          )}>
            {change}
          </span>
        </div>
      </div>
    </Card>
  );
}
