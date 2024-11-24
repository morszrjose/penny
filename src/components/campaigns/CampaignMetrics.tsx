import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MousePointerClick, Eye } from "lucide-react";

export const CampaignMetrics = () => {
  // Mock metrics data for demo
  const metrics = [
    {
      title: "Emails Sent",
      value: "245",
      icon: Mail,
      trend: "+12%",
    },
    {
      title: "Open Rate",
      value: "45%",
      icon: Eye,
      trend: "+5%",
    },
    {
      title: "Click Rate",
      value: "22%",
      icon: MousePointerClick,
      trend: "+8%",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Campaign Performance</CardTitle>
        <CardDescription>
          Monitor your email campaign engagement metrics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.title}
              className="flex items-center space-x-4 rounded-lg border p-4"
            >
              <metric.icon className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium leading-none">{metric.title}</p>
                <p className="text-2xl font-bold">{metric.value}</p>
                <p className="text-sm text-green-500">{metric.trend}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};