import { IChannelInfo, ICommunityBasicInfo, ICommunityInfo, INostrEvent } from "../utils/interfaces";
declare class SocialUtilsManager {
    static hexStringToUint8Array(hexString: string): Uint8Array;
    static base64ToUtf8(base64: string): string;
    static utf8ToBase64(utf8: string): string;
    static convertPrivateKeyToPubkey(privateKey: string): string;
    static encryptMessage(ourPrivateKey: string, theirPublicKey: string, text: string): Promise<string>;
    static decryptMessage(ourPrivateKey: string, theirPublicKey: string, encryptedData: string): Promise<string>;
    private static pad;
    static getGMTOffset(timezone: string): string;
    static exponentialBackoffRetry<T>(fn: () => Promise<T>, retries: number, delay: number, maxDelay: number, factor: number): Promise<T>;
    static getCommunityUri(creatorId: string, communityId: string): string;
    static getCommunityBasicInfoFromUri(communityUri: string): ICommunityBasicInfo;
    static extractCommunityInfo(event: INostrEvent): ICommunityInfo;
    static extractBookmarkedCommunities(event: INostrEvent, excludedCommunity?: ICommunityInfo): ICommunityBasicInfo[];
    static extractBookmarkedChannels(event: INostrEvent): string[];
    static extractScpData(event: INostrEvent, standardId: string): any;
    static parseContent(content: string): any;
    static extractChannelInfo(event: INostrEvent): IChannelInfo;
}
export { SocialUtilsManager };
