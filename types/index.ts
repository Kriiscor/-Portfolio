// Types globaux de l'application

export type User = {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
};

export type ApiResponse<T> = {
  data: T;
  message?: string;
  success: boolean;
};
