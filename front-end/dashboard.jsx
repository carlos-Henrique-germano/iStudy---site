import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { week: "Semana 1", studyHours: 12, questions: 45 },
  { week: "Semana 2", studyHours: 15, questions: 50 },
  { week: "Semana 3", studyHours: 10, questions: 40 },
  { week: "Semana 4", studyHours: 18, questions: 55 },
];

export default function StudyDashboard() {
  const [selectedMetric, setSelectedMetric] = useState("studyHours");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Disciplinas */}
      <Card className="h-64">
        <CardContent>
          <h2 className="text-xl font-bold">Disciplinas Cadastradas</h2>
          <ul className="mt-4">
            <li>Matemática</li>
            <li>História</li>
            <li>Física</li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-6">
        {/* Meta semanal */}
        <Card className="h-32">
          <CardContent>
            <h2 className="text-xl font-bold">Meta de Estudo Semanal</h2>
            <p className="text-sm">Horas de estudo</p>
            <Progress value={75} className="mb-2" />
            <p className="text-sm">Questões resolvidas</p>
            <Progress value={60} />
          </CardContent>
        </Card>

        {/* Gráfico de desempenho */}
        <Card className="h-64">
          <CardContent>
            <h2 className="text-xl font-bold">Desempenho Semanal</h2>
            <Select onValueChange={setSelectedMetric} defaultValue="studyHours">
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma métrica" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="studyHours">Tempo de Estudo</SelectItem>
                <SelectItem value="questions">Questões Resolvidas</SelectItem>
              </SelectContent>
            </Select>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data}>
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Bar dataKey={selectedMetric} fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
