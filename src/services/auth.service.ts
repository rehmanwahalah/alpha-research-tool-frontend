import { HttpService } from './base.service'

class AuthService extends HttpService {
  private readonly prefix: string = "auth";

  /**
   * Basic Authenticate User
   * @paramdata
   */
  login = (data: any): Promise<any> => this.post(this.prefix + "/login", data);
  TwitterLogin = (): Promise<any> => this.get(this.prefix + "/twitter");
}

export const authService = new AuthService();