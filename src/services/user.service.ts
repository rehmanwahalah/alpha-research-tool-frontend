import { HttpService } from "./base.service";

class UserService extends HttpService {
  private readonly prefix: string = "user";

  /**
   * Get UnSeen Notifications
   * @returns 
   */
   logout = (): Promise<any> => this.post("auth" + `/logout`, {});
   verifyUser = (): Promise<any> => this.get(this.prefix + "/verify");
}

export const userService = new UserService();