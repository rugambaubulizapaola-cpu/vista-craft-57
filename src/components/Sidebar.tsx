import { LayoutDashboard, Store, MapPin, Users, CreditCard } from "lucide-react";
import { NavLink } from "./NavLink";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Store, label: "Shops", path: "/shops" },
  { icon: MapPin, label: "Shop Map", path: "/map" },
  { icon: Users, label: "Users", path: "/users" },
  { icon: CreditCard, label: "Payments", path: "/payments" },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-card border-r border-border flex flex-col">
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
      
      {/* User Profile in Middle */}
      <div className="px-6 py-8 mt-auto mb-auto">
        <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
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
  );
}
