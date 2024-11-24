import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface TemplateSelectorProps {
  selectedTemplate: string;
  onTemplateChange: (template: string) => void;
}

export const TemplateSelector = ({
  selectedTemplate,
  onTemplateChange,
}: TemplateSelectorProps) => {
  // Mock email templates for demo
  const mockTemplates = [
    { id: "1", name: "Initial Outreach" },
    { id: "2", name: "Follow-up Meeting" },
    { id: "3", name: "Product Demo Request" },
  ];

  return (
    <div className="space-y-4">
      <Label>Email Template</Label>
      <Select value={selectedTemplate} onValueChange={onTemplateChange}>
        <SelectTrigger>
          <SelectValue placeholder="Choose an email template" />
        </SelectTrigger>
        <SelectContent>
          {mockTemplates.map((template) => (
            <SelectItem key={template.id} value={template.id}>
              {template.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};