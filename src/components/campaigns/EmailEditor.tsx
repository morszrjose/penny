import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface EmailEditorProps {
  content: string;
  onContentChange: (content: string) => void;
  scheduledTime: Date | null;
  onScheduleChange: (date: Date | null) => void;
}

export const EmailEditor = ({
  content,
  onContentChange,
  scheduledTime,
  onScheduleChange,
}: EmailEditorProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label>Subject</Label>
        <Input placeholder="Enter email subject" className="mt-1.5" />
      </div>
      <div>
        <Label>Message</Label>
        <Textarea
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          placeholder="Write your message here... Use {{name}} for personalization"
          className="min-h-[200px] mt-1.5"
        />
      </div>
      {scheduledTime && (
        <div>
          <Label>Schedule Time</Label>
          <Input
            type="datetime-local"
            value={scheduledTime.toISOString().slice(0, 16)}
            onChange={(e) =>
              onScheduleChange(e.target.value ? new Date(e.target.value) : null)
            }
            className="mt-1.5"
          />
        </div>
      )}
    </div>
  );
};