export interface FilterTab {
  label: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  status: string;
  client: string;
  progress: number;
  budget: number;
  deadline: string;
  startDate: string;
  description: string;
  technologies: string[];
  tasks: string[];
}