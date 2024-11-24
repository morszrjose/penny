import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, PieChart, CheckCircle2, ArrowUpRight, Brain, Target, Zap, TrendingUp } from "lucide-react";
import { PieChart as RePieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const stats = [
  {
    title: "Total Leads",
    value: "2,345",
    icon: Users,
    trend: "+12.5%",
    aiInsight: "20% higher than industry average",
  },
  {
    title: "Pipeline Value",
    value: "$1.2M",
    icon: PieChart,
    trend: "+8.2%",
    aiInsight: "Projected to grow 15% next quarter",
  },
  {
    title: "Tasks Completed",
    value: "85%",
    icon: CheckCircle2,
    trend: "+5.1%",
    aiInsight: "Above target efficiency",
  },
  {
    title: "Lead Quality Score",
    value: "8.7/10",
    icon: Brain,
    trend: "+2.3%",
    aiInsight: "Top 10% in your sector",
  },
  {
    title: "Conversion Rate",
    value: "32%",
    icon: Target,
    trend: "+4.5%",
    aiInsight: "AI-optimized targeting working well",
  },
  {
    title: "Response Time",
    value: "2.5h",
    icon: Zap,
    trend: "-15%",
    aiInsight: "Faster than 85% of competitors",
  },
];

// Mock data for pipeline distribution
const pipelineData = [
  { name: "Prospecting", value: 30 },
  { name: "Qualification", value: 25 },
  { name: "Proposal", value: 20 },
  { name: "Negotiation", value: 15 },
  { name: "Closed", value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

// Enhanced mock data for recent leads activity with AI scoring
const recentLeadsData = [
  { day: 'Mon', leads: 4, aiScore: 85 },
  { day: 'Tue', leads: 6, aiScore: 92 },
  { day: 'Wed', leads: 8, aiScore: 88 },
  { day: 'Thu', leads: 5, aiScore: 90 },
  { day: 'Fri', leads: 9, aiScore: 95 },
  { day: 'Sat', leads: 3, aiScore: 87 },
  { day: 'Sun', leads: 4, aiScore: 89 },
];

const Dashboard = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          AI-powered insights for your sales performance
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
              <p className="mt-2 text-xs text-muted-foreground">
                {stat.aiInsight}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Leads & AI Score Trend</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={recentLeadsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" domain={[0, 100]} />
                <Tooltip />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="leads" 
                  stroke="#8884d8" 
                  strokeWidth={2}
                  dot={{ fill: '#8884d8' }}
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="aiScore" 
                  stroke="#82ca9d" 
                  strokeWidth={2}
                  dot={{ fill: '#82ca9d' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>AI-Optimized Pipeline Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RePieChart>
                <Pie
                  data={pipelineData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pipelineData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </RePieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {pipelineData.map((item, index) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-sm text-muted-foreground">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
