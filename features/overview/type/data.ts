export interface OverviewStatData {
  title: string;
  value: number;
  iconUrl: string;
}

export interface StatCatdProps {
  data: OverviewStatData;
}

export interface ProjectListType {
  id: number;
  name: string;
  company: string;
  taskCompletion: number;
}

export interface TodayFocusType {
  id: number;
  task: string;
  projectName: string;
  priority: string;
}

export interface RecentActivityType {
  id: number;
  title: string;
  activityMessage: string;
  duration: string;
}
