import { HttpService } from "./base.service";

class ProjectService extends HttpService {
  private readonly prefix: string = "project";

  /**
   * Get all projects
   * @returns 
   */
   getAllProjects = (params:any): Promise<any> => this.get(this.prefix + "/all", params);
}

export const projectService = new ProjectService();