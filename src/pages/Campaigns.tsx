import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LeadSelector } from "@/components/campaigns/LeadSelector";
import { TemplateSelector } from "@/components/campaigns/TemplateSelector";
import { EmailEditor } from "@/components/campaigns/EmailEditor";
import { CampaignMetrics } from "@/components/campaigns/CampaignMetrics";
import { toast } from "sonner";

const Campaigns = () => {
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [emailContent, setEmailContent] = useState("");
  const [scheduledTime, setScheduledTime] = useState<Date | null>(null);

  const handleSendEmail = () => {
    toast.success(
      `Email ${scheduledTime ? "scheduled" : "sent"} to ${
        selectedLeads.length
      } leads`
    );
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Email Campaigns</h2>
        <p className="text-muted-foreground">
          Create and manage your email outreach campaigns
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>New Campaign</CardTitle>
            <CardDescription>
              Select leads and customize your email campaign
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <LeadSelector
              selectedLeads={selectedLeads}
              onLeadsChange={setSelectedLeads}
            />
            <TemplateSelector
              selectedTemplate={selectedTemplate}
              onTemplateChange={setSelectedTemplate}
            />
            <EmailEditor
              content={emailContent}
              onContentChange={setEmailContent}
              scheduledTime={scheduledTime}
              onScheduleChange={setScheduledTime}
            />
            <div className="flex justify-end space-x-4">
              <Button
                variant="outline"
                onClick={() => setScheduledTime(new Date())}
              >
                Schedule
              </Button>
              <Button onClick={handleSendEmail}>
                {scheduledTime ? "Schedule Campaign" : "Send Now"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <CampaignMetrics />
      </div>
    </div>
  );
};

export default Campaigns;