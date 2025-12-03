export interface IHistoricalEvent {
  id: number;
  date: number;
  text: string;
  year: number;
  type: string;
}
export type Timeline = {
  id: number;
  name: string;
  startYear: number;
  endYear: number;
  type: string;
}
export interface IHistoricalTimeline {
  id: number;
  timeline: Timeline
}