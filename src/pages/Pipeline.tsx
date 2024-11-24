import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Deal {
  id: string;
  title: string;
  value: number;
  probability: number;
}

interface Stage {
  id: string;
  title: string;
  deals: Deal[];
}

const Pipeline = () => {
  const [stages, setStages] = useState<Stage[]>([
    {
      id: "prospecting",
      title: "Prospecting",
      deals: [
        { id: "deal-1", title: "Enterprise Deal A", value: 50000, probability: 20 },
        { id: "deal-2", title: "SMB Deal B", value: 15000, probability: 40 },
      ],
    },
    {
      id: "qualification",
      title: "Qualification",
      deals: [
        { id: "deal-3", title: "Mid-Market Deal C", value: 30000, probability: 60 },
      ],
    },
    {
      id: "proposal",
      title: "Proposal",
      deals: [
        { id: "deal-4", title: "Enterprise Deal D", value: 75000, probability: 80 },
      ],
    },
    {
      id: "negotiation",
      title: "Negotiation",
      deals: [
        { id: "deal-5", title: "Strategic Deal E", value: 100000, probability: 90 },
      ],
    },
  ]);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const sourceStage = stages.find((s) => s.id === source.droppableId);
    const destStage = stages.find((s) => s.id === destination.droppableId);

    if (!sourceStage || !destStage) return;

    const newStages = [...stages];
    const [removed] = sourceStage.deals.splice(source.index, 1);
    destStage.deals.splice(destination.index, 0, removed);

    setStages(newStages);
  };

  const updateDealValue = (stageId: string, dealId: string, newValue: string) => {
    const newStages = stages.map((stage) => {
      if (stage.id === stageId) {
        const newDeals = stage.deals.map((deal) => {
          if (deal.id === dealId) {
            return { ...deal, value: parseFloat(newValue) || 0 };
          }
          return deal;
        });
        return { ...stage, deals: newDeals };
      }
      return stage;
    });
    setStages(newStages);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Pipeline</h2>
        <p className="text-muted-foreground">
          Manage your deals across different stages
        </p>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stages.map((stage) => (
            <Card key={stage.id} className="bg-background">
              <CardHeader>
                <CardTitle className="text-lg">{stage.title}</CardTitle>
              </CardHeader>
              <Droppable droppableId={stage.id}>
                {(provided) => (
                  <CardContent
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="space-y-4"
                  >
                    {stage.deals.map((deal, index) => (
                      <Draggable
                        key={deal.id}
                        draggableId={deal.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="p-4 rounded-lg border bg-card"
                          >
                            <h3 className="font-medium mb-2">{deal.title}</h3>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">
                                  Value:
                                </span>
                                <Input
                                  type="number"
                                  value={deal.value}
                                  onChange={(e) =>
                                    updateDealValue(
                                      stage.id,
                                      deal.id,
                                      e.target.value
                                    )
                                  }
                                  className="h-8 w-32"
                                />
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">
                                  Probability:
                                </span>
                                <span
                                  className={`text-sm font-medium ${
                                    deal.probability >= 70
                                      ? "text-green-500"
                                      : deal.probability >= 40
                                      ? "text-yellow-500"
                                      : "text-red-500"
                                  }`}
                                >
                                  {deal.probability}%
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </CardContent>
                )}
              </Droppable>
            </Card>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Pipeline;