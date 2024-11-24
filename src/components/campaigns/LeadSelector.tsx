import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface LeadSelectorProps {
  selectedLeads: string[];
  onLeadsChange: (leads: string[]) => void;
}

export const LeadSelector = ({
  selectedLeads,
  onLeadsChange,
}: LeadSelectorProps) => {
  // Mock leads data for demo
  const mockLeads = [
    { id: "1", name: "John Smith - Tech Solutions" },
    { id: "2", name: "Sarah Johnson - Digital Dynamics" },
    { id: "3", name: "Michael Brown - Innovation Labs" },
  ];

  return (
    <div className="space-y-4">
      <Label>Select Leads</Label>
      <Select
        value={selectedLeads[0]}
        onValueChange={(value) => onLeadsChange([value])}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select leads to contact" />
        </SelectTrigger>
        <SelectContent>
          {mockLeads.map((lead) => (
            <SelectItem key={lead.id} value={lead.id}>
              {lead.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};