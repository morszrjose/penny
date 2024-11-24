import { Bell, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

interface NotificationItemProps {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: "email" | "call" | "general";
  leadId: string;
  leadName: string;
}

export const NotificationItem = ({
  title,
  description,
  timestamp,
  type,
  leadName,
}: NotificationItemProps) => {
  const [action, setAction] = useState("");
  const [notes, setNotes] = useState("");

  const handleActionSubmit = () => {
    if (!action) {
      toast.error("Please select an action");
      return;
    }
    
    toast.success("Action logged successfully");
  };

  const getIcon = () => {
    switch (type) {
      case "email":
        return <Mail className="h-4 w-4" />;
      case "call":
        return <Phone className="h-4 w-4" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-start gap-4 p-4 hover:bg-accent rounded-lg cursor-pointer">
          <div className="mt-1">{getIcon()}</div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">{title}</p>
            <p className="text-sm text-muted-foreground">{description}</p>
            <p className="text-xs text-muted-foreground">{timestamp}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Lead Activity - {leadName}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Action</label>
            <Select value={action} onValueChange={setAction}>
              <SelectTrigger>
                <SelectValue placeholder="Choose next action" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="schedule-call">Schedule a Call</SelectItem>
                <SelectItem value="send-email">Send Follow-up Email</SelectItem>
                <SelectItem value="create-task">Create Task</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Notes</label>
            <Textarea
              placeholder="Add notes about the action..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <Button onClick={handleActionSubmit} className="w-full">
            Log Action
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};