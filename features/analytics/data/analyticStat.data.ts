import { AnalyticStatData } from "../type/data";

const analyticStatData: AnalyticStatData[] = [
  {
    id: "revenue-this-month",
    label: "Revenue this month",
    value: 8240,
    change: 18.4,
    changeLabel: "vs. last month",
    trend: "up",
    supportingText: "Compared with the previous month",
  },
  {
    id: "average-project-value",
    label: "Avg. project value",
    value: 2900,
    supportingText: "Based on completed projects",
  },
  {
    id: "project-completion-rate",
    label: "Project completion rate",
    value: 75,
    supportingText: "15 of 20 projects completed",
  },
];

export default analyticStatData;
