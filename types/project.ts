import TechType from "./tech";

export default interface IProject {
  title: string;
  subtitle: string;
  description: string;
  stack: Array<TechType>;
  actions: {
    repository: string;
    deployment?: string;
  };
  wakatime: string;
}
