import { StringToBoolean } from "class-variance-authority/types";

export interface NavItems {
  label: string;
  url: string;
}

export interface FeatureData {
  title: string;
  description: string;
}

export interface FeatureCardProps {
  data: FeatureData;
}

export interface HowItWorkData {
  step: string;
  title: string;
  description: string;
}
