import { IResponse } from "./IResponse";
import { ServiceChecker } from "./ServiceChecker";

export interface ICloudMessagingService extends ServiceChecker {
    sendNotification(fcmRegistrationToken: string[], title: string, description: string, imageUrl: string, notificationId: string, edgeServerId: number, deviceId: number, deviceType: string): Promise<IResponse>
}
