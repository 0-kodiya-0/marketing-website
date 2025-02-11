import { TabContentState } from "./data";

export interface Tab {
  id: string;
  title: string;
  contentId: string | number | null;
  projectId: number;
}

export interface TabContentProps {
  contentState: TabContentState;
}