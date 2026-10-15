export interface AnalyticStatData {
  id: string;
  label: string;
  value: number;
  change?: number;
  changeLabel?: string;
  trend?: "up" | "down";
  supportingText: string;
}

export interface StatCardProps {
  data: AnalyticStatData;
}

export interface RevenueChartData {
  value: number;
  month: string;
}
