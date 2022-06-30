import { HttpService } from "./base.service";

class AdminService extends HttpService {
  private readonly prefix: string = "admin";

  /**
   * User
   * @paramdata
   */
  getUsers = (params: any): Promise<any> =>
    this.get(this.prefix + "/users", params);
  blockUser = (userId: any): Promise<any> =>
    this.get(this.prefix + `/block/${userId}`);
  unBlockUser = (userId: any): Promise<any> =>
    this.get(this.prefix + `/un-block/${userId}`);
}

export const adminService = new AdminService();
