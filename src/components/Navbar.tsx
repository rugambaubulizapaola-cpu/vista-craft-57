import { Search, Bell } from "lucide-react";
import { Input } from "./ui/input";

export function Navbar() {
  return (
    <header className="border-b border-border bg-card">
      <div className="flex items-center justify-between px-8 py-4">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        
        <div className="flex items-center gap-4">
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search" 
              className="pl-10 bg-muted/50 border-0"
            />
          </div>
          
          <button className="relative p-2 hover:bg-muted rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          
          <button className="w-10 h-10 rounded-full overflow-hidden">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" 
              alt="User"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
