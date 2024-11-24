import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, PieChart, CheckCircle2, ArrowUpRight } from "lucide-react";

const stats = [
  {
    title: "Total Leads",
    value: "2,345",
    icon: Users,
    trend: "+12.5%",
  },
  {
    title: "Pipeline Value",
    value: "$1.2M",
    icon: PieChart,
    trend: "+8.2%",
  },
  {
    title: "Tasks Completed",
    value: "85%",
    icon: CheckCircle2,
    trend: "+5.1%",
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your sales performance.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-sm text-green-500">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                {stat.trend}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Coming soon: Recent leads activity chart
            </p>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Pipeline Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Coming soon: Pipeline distribution chart
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;