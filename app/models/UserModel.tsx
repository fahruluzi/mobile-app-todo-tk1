export class UserModel {
    private static username = 'pengguna';
    private static password = 'masuk';
  
    static validateLogin(inputUsername: string, inputPassword: string): boolean {
      return inputUsername === this.username && inputPassword === this.password;
    }
  }