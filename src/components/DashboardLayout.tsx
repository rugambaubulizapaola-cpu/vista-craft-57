import { ReactNode } from "react";
import { LayoutDashboard, Store, MapPin, Users, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavLink } from "./NavLink";

interface DashboardLayoutProps {
  children: ReactNode;
}

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Store, label: "Shops", path: "/shops" },
  { icon: MapPin, label: "Shop Map", path: "/map" },
  { icon: Users, label: "Users", path: "/users" },
  { icon: CreditCard, label: "Payments", path: "/payments" },
];

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-lg bg-success flex items-center justify-center">
              <Store className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl">Shoppa</span>
          </div>
          
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground px-3 mb-2">MAIN MENU</p>
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                activeClassName="bg-success text-white hover:bg-success hover:text-white"
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
        
        {/* User Profile at Bottom */}
        <div className="absolute bottom-0 w-64 p-4 border-t border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center text-white font-semibold">
              AD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Admin User</p>
              <p className="text-xs text-muted-foreground truncate">admin@shoppa.ru</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
