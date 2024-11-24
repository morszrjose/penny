import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NotificationItem } from "./NotificationItem";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock notifications for demo
const mockNotifications = [
  {
    id: "1",
    title: "Email Opened",
    description: "John Smith opened your latest email about the product demo",
    timestamp: "2 minutes ago",
    type: "email" as const,
    leadId: "lead-1",
    leadName: "John Smith",
  },
  {
    id: "2",
    title: "Link Clicked",
    description: "Sarah Johnson clicked on the pricing page link",
    timestamp: "1 hour ago",
    type: "email" as const,
    leadId: "lead-2",
    leadName: "Sarah Johnson",
  },
  {
    id: "3",
    title: "Follow-up Required",
    description: "Scheduled call with Michael Brown is due",
    timestamp: "3 hours ago",
    type: "call" as const,
    leadId: "lead-3",
    leadName: "Michael Brown",
  },
];

export const NotificationsMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
            {mockNotifications.length}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-5rem)] pr-4">
          <div className="space-y-2 mt-4">
            {mockNotifications.map((notification) => (
              <NotificationItem key={notification.id} {...notification} />
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};