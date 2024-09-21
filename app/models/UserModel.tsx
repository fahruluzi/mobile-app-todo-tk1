export class UserModel {
    private static username = 'pengguna';
    private static password = 'masuk';
  
    // Method to validate the user login
    static validateLogin(inputUsername: string, inputPassword: string): boolean {
      return inputUsername === this.username && inputPassword === this.password;
    }
  }
  