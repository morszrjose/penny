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
  User,
} from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { NotificationsMenu } from "../notifications/NotificationsMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

      <div className="flex-1 pl-64">
        <header className="fixed top-0 right-0 left-64 z-50 border-b bg-background">
          <div className="flex h-16 items-center justify-between px-8">
            <h1 className="text-xl font-semibold capitalize">
              {location.pathname.split("/").pop()?.replace("-", " ") || "Dashboard"}
            </h1>
            <div className="flex items-center space-x-4">
              <NotificationsMenu />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        <main className="w-full p-8 mt-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
}