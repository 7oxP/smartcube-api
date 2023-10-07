import { IResponse } from "./IResponse";

export interface IAuthService {
    login(email: string, password: string): Promise<IResponse>
    signUp(username:string, email: string, password: string, cPassword: string): Promise<IResponse>
    resetPasswordRequest(email: string): Promise<IResponse>
    resetPassword(resetToken: string, password: string, cPassword: string): Promise<IResponse>
}
