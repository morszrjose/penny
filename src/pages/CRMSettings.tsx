import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Check, Loader2 } from "lucide-react";

const CRM_PLATFORMS = [
  { id: "salesforce", name: "Salesforce", logo: "SF" },
  { id: "hubspot", name: "HubSpot", logo: "HS" },
  { id: "zoho", name: "Zoho CRM", logo: "ZH" },
];

const CRMSettings = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  const handleConnect = async () => {
    if (!selectedPlatform) {
      toast.error("Please select a CRM platform first");
      return;
    }

    setIsConnecting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsConnecting(false);
    setIsConnected(true);
    toast.success("Successfully connected to CRM!");
  };

  const handleSync = async () => {
    if (!isConnected) {
      toast.error("Please connect to a CRM platform first");
      return;
    }

    setIsSyncing(true);
    // Simulate sync process
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsSyncing(false);
    toast.success("Data synchronization completed!");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">CRM Integration</h2>
        <p className="text-muted-foreground">
          Connect your CRM platform to sync contacts, leads, and deals.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Select CRM Platform</CardTitle>
            <CardDescription>
              Choose your CRM platform to begin the integration process
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CRM_PLATFORMS.map((platform) => (
                <Button
                  key={platform.id}
                  variant={selectedPlatform === platform.id ? "default" : "outline"}
                  className="h-24 relative"
                  onClick={() => setSelectedPlatform(platform.id)}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-2xl font-bold">{platform.logo}</div>
                    <span>{platform.name}</span>
                  </div>
                  {selectedPlatform === platform.id && isConnected && (
                    <div className="absolute top-2 right-2">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                  )}
                </Button>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <Button
                onClick={handleConnect}
                disabled={!selectedPlatform || isConnecting || isConnected}
                className="w-full md:w-auto"
              >
                {isConnecting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Connecting...
                  </>
                ) : isConnected ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Connected
                  </>
                ) : (
                  "Connect"
                )}
              </Button>

              {isConnected && (
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Data Synchronization</CardTitle>
                      <CardDescription>
                        Select the data you want to import from your CRM
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Button
                          onClick={handleSync}
                          disabled={isSyncing}
                          className="w-full md:w-auto"
                        >
                          {isSyncing ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Syncing Data...
                            </>
                          ) : (
                            "Start Sync"
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CRMSettings;