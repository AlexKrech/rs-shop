export interface IAccountState {
  isLogined: boolean;
  loginData: string | null;
}

export const initialAccountState: IAccountState = {
  isLogined: false,
  loginData: null,
};
