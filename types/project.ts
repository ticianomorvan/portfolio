export default interface IProject {
  title: string,
  subtitle: string,
  description: string,
  stack: Array<string>,
  actions: {
    repository: string,
    deployment?: string,
  }
  wakatime: string,
}