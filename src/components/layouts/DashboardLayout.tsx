import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  LayoutDashboard,
  Users,
  PieChart,
  Mail,
  Settings,
  LogOut,
} from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";

const sidebarNavItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Leads",
    icon: Users,
    href: "/dashboard/leads",
  },
  {
    title: "Pipeline",
    icon: PieChart,
    href: "/dashboard/pipeline",
  },
  {
    title: "Email Campaigns",
    icon: Mail,
    href: "/dashboard/campaigns",
  },
  {
    title: "CRM Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

export function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      <div className="fixed left-0 top-0 flex h-screen w-64 flex-col border-r bg-background">
        <div className="p-6">
          <Link to="/dashboard" className="flex items-center gap-2">
            <span className="text-xl font-bold gradient-text">Penny</span>
          </Link>
        </div>
        <ScrollArea className="flex-1 px-3">
          <div className="space-y-1">
            {sidebarNavItems.map((item) => (
              <Button
                key={item.href}
                variant={location.pathname === item.href ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-2",
                  location.pathname === item.href && "bg-secondary"
                )}
                asChild
              >
                <Link to={item.href}>
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Link>
              </Button>
            ))}
          </div>
        </ScrollArea>
        <div className="p-4">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      <div className="pl-64">
        <main className="min-h-screen max-w-[1440px] p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}