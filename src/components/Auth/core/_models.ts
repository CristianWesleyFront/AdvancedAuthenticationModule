export interface AuthModel {
  api_token: string;
  refreshToken?: string;
}

export interface UserModel {
  id: number;
  role: string;
  enrollment: string;
  username: string;
  password: string | undefined;
  fullName: string;
  email: string;
  companyName: string;
  phone?: string;
  permissions: Array<string>;
}

export interface RegisterModel {
  role: string;
  enrollment: string;
  username: string;
  password: string | undefined;
  fullName: string;
  email: string;
  companyName: string;
  phone?: string;
}
