export interface OverviewStatData {
  title: string;
  value: number;
  iconUrl: string;
}

export interface StatCatdProps {
  data: OverviewStatData;
}

export interface projectListType {
  id: number;
  name: string;
  company: string;
  taskCompletion: number;
}
