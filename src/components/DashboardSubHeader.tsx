import { Download, Calendar } from "lucide-react";
import { Button } from "./ui/button";

export function DashboardSubHeader() {
  return (
    <div className="border-b border-border bg-card px-8 py-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Welcome admin to dashboard</p>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2">
            <Calendar className="w-4 h-4" />
            Monthly
          </Button>
          
          <Button size="sm" className="gap-2 bg-success hover:bg-success/90 text-white">
            <Download className="w-4 h-4" />
            Download
          </Button>
        </div>
      </div>
    </div>
  );
}
