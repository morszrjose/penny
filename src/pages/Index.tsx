import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart3, Brain, Mail, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 animate-fade-in">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Transform Your Sales with AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Penny helps SMEs boost sales performance with AI-powered insights, automated outreach, and intelligent lead scoring.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/signup">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/dashboard')}>
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Powerful Features for Modern Sales Teams
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="w-8 h-8 text-primary" />}
              title="AI-Driven Lead Scoring"
              description="Automatically prioritize leads based on behavior patterns and engagement metrics."
            />
            <FeatureCard
              icon={<BarChart3 className="w-8 h-8 text-primary" />}
              title="Sales Pipeline Visualization"
              description="Get a clear view of your sales pipeline with interactive dashboards."
            />
            <FeatureCard
              icon={<Mail className="w-8 h-8 text-primary" />}
              title="Automated Outreach"
              description="Engage prospects with personalized, automated email campaigns."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">45%</h3>
              <p className="text-primary-lighter">Increase in Sales</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">2.5x</h3>
              <p className="text-primary-lighter">Lead Conversion</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">8hrs</h3>
              <p className="text-primary-lighter">Saved Per Week</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Transform Your Sales Process?
          </h2>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Penny</h3>
              <p className="text-gray-600">AI-powered sales platform for SMEs</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Features</li>
                <li>Pricing</li>
                <li>Integration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-gray-600">
            <p>&copy; 2024 Penny. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <Card className="p-6 hover:shadow-lg transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </Card>
);

export default Index;
