export type AuthUser = {
  name: string;
  email: string;
  role: 'member';
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};
