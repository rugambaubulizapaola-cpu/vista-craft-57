import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Search, Filter, MoreVertical } from "lucide-react";
import { Badge } from "./ui/badge";

const shops = [
  { id: 1, name: "Fresh Market Kigali", plan: "Premium", phone: "(555) 234-5678", status: "active" },
  { id: 2, name: "Fresh Market Kigali", plan: "Premium", phone: "(555) 887-6543", status: "pending" },
  { id: 3, name: "Fresh Market Kigali", plan: "Premium", phone: "(555) 456-7890", status: "active" },
  { id: 4, name: "Fresh Market Kigali", plan: "Premium", phone: "(555) 321-0987", status: "active" },
];

export function ShopsTable() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Recent New Shops</h3>
        
        <div className="flex items-center gap-3">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search" 
              className="pl-10 h-9 bg-muted/50 border-0"
            />
          </div>
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                <Checkbox />
              </th>
              <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">NO</th>
              <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">SHOP NAME</th>
              <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">PLAN</th>
              <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">PHONE NUMBER</th>
              <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">STATUS</th>
              <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground"></th>
            </tr>
          </thead>
          <tbody>
            {shops.map((shop) => (
              <tr key={shop.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                <td className="py-4 px-4">
                  <Checkbox />
                </td>
                <td className="py-4 px-4 text-sm">{shop.id}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                      <span className="text-success font-semibold">🏪</span>
                    </div>
                    <span className="text-sm font-medium">{shop.name}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm text-muted-foreground">{shop.plan}</td>
                <td className="py-4 px-4 text-sm text-muted-foreground">{shop.phone}</td>
                <td className="py-4 px-4">
                  <Badge 
                    variant={shop.status === "active" ? "default" : "secondary"}
                    className={shop.status === "active" 
                      ? "bg-success/10 text-success hover:bg-success/20" 
                      : "bg-info/10 text-info hover:bg-info/20"
                    }
                  >
                    ● {shop.status === "active" ? "Active" : "Pending"}
                  </Badge>
                </td>
                <td className="py-4 px-4">
                  <button className="p-1 hover:bg-muted rounded transition-colors">
                    <MoreVertical className="w-4 h-4 text-muted-foreground" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
