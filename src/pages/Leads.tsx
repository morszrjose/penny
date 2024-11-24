import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { User, MessageSquare, Star } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Lead {
  id: number;
  name: string;
  company: string;
  email: string;
  score: number;
  status: string;
  lastContact: string;
  notes: string[];
}

// Mock data for demonstration
const mockLeads: Lead[] = [
  {
    id: 1,
    name: "John Smith",
    company: "Tech Solutions Inc",
    email: "john@techsolutions.com",
    score: 85,
    status: "New",
    lastContact: "2024-02-20",
    notes: ["Initial contact made via LinkedIn"],
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "Digital Dynamics",
    email: "sarah@digitaldynamics.com",
    score: 92,
    status: "Contacted",
    lastContact: "2024-02-19",
    notes: ["Interested in enterprise plan", "Scheduled demo for next week"],
  },
  {
    id: 3,
    name: "Michael Brown",
    company: "Innovation Labs",
    email: "michael@innovationlabs.com",
    score: 78,
    status: "Interested",
    lastContact: "2024-02-18",
    notes: ["Following up after initial demo"],
  },
];

const Leads = () => {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [newNote, setNewNote] = useState("");
  const { toast } = useToast();

  const handleStatusChange = (status: string) => {
    if (selectedLead) {
      setSelectedLead({ ...selectedLead, status });
      toast({
        title: "Status Updated",
        description: `Lead status changed to ${status}`,
      });
    }
  };

  const handleAddNote = () => {
    if (selectedLead && newNote.trim()) {
      setSelectedLead({
        ...selectedLead,
        notes: [...selectedLead.notes, newNote.trim()],
      });
      setNewNote("");
      toast({
        title: "Note Added",
        description: "Your note has been added successfully",
      });
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Leads</h2>
        <p className="text-muted-foreground">
          Manage and track your leads, sorted by AI-driven scores
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Leads</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>AI Score</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Contact</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockLeads
                .sort((a, b) => b.score - a.score)
                .map((lead) => (
                  <TableRow
                    key={lead.id}
                    className="cursor-pointer hover:bg-muted"
                    onClick={() => setSelectedLead(lead)}
                  >
                    <TableCell className="font-medium">{lead.name}</TableCell>
                    <TableCell>{lead.company}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Star
                          className={`h-4 w-4 ${
                            lead.score >= 90
                              ? "text-yellow-500"
                              : "text-gray-400"
                          }`}
                        />
                        {lead.score}
                      </div>
                    </TableCell>
                    <TableCell>{lead.status}</TableCell>
                    <TableCell>{lead.lastContact}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={!!selectedLead} onOpenChange={() => setSelectedLead(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Lead Details</DialogTitle>
          </DialogHeader>
          {selectedLead && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Name
                  </label>
                  <div className="flex items-center gap-2 mt-1">
                    <User className="h-4 w-4" />
                    {selectedLead.name}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Company
                  </label>
                  <div className="mt-1">{selectedLead.company}</div>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Email
                  </label>
                  <div className="mt-1">{selectedLead.email}</div>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    AI Score
                  </label>
                  <div className="flex items-center gap-2 mt-1">
                    <Star
                      className={`h-4 w-4 ${
                        selectedLead.score >= 90
                          ? "text-yellow-500"
                          : "text-gray-400"
                      }`}
                    />
                    {selectedLead.score}
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Status
                </label>
                <Select
                  value={selectedLead.status}
                  onValueChange={handleStatusChange}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="New">New</SelectItem>
                    <SelectItem value="Contacted">Contacted</SelectItem>
                    <SelectItem value="Interested">Interested</SelectItem>
                    <SelectItem value="Qualified">Qualified</SelectItem>
                    <SelectItem value="Proposal">Proposal</SelectItem>
                    <SelectItem value="Closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Notes
                </label>
                <div className="space-y-4 mt-2">
                  {selectedLead.notes.map((note, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 p-3 bg-muted rounded-lg"
                    >
                      <MessageSquare className="h-4 w-4 mt-0.5" />
                      <p className="text-sm">{note}</p>
                    </div>
                  ))}
                  <div className="flex gap-2">
                    <Textarea
                      placeholder="Add a note..."
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                    />
                    <Button onClick={handleAddNote}>Add Note</Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Leads;