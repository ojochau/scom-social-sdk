import { Nip19 } from "../core/index";
import { IAllUserRelatedChannels, IChannelInfo, ICommunityBasicInfo, ICommunityInfo, IFetchNotesOptions, INostrEvent, IPaymentActivity } from "../utils/interfaces";
import { INostrCommunicationManager, INostrRestAPIManager } from "./communication";
interface ISocialEventManagerRead {
    nostrCommunicationManager: INostrCommunicationManager | INostrRestAPIManager;
    privateKey: string;
    fetchThreadCacheEvents(id: string, pubKey?: string): Promise<INostrEvent[]>;
    fetchTrendingCacheEvents(pubKey?: string): Promise<INostrEvent[]>;
    fetchProfileFeedCacheEvents(userPubkey: string, pubKey: string, since?: number, until?: number): Promise<INostrEvent[]>;
    fetchProfileRepliesCacheEvents(userPubkey: string, pubKey: string, since?: number, until?: number): Promise<INostrEvent[]>;
    fetchHomeFeedCacheEvents(pubKey?: string, since?: number, until?: number): Promise<INostrEvent[]>;
    fetchUserProfileCacheEvents(pubKeys: string[]): Promise<INostrEvent[]>;
    fetchUserProfileDetailCacheEvents(pubKey: string): Promise<INostrEvent[]>;
    fetchContactListCacheEvents(pubKey: string, detailIncluded?: boolean): Promise<INostrEvent[]>;
    fetchUserRelays(pubKey: string): Promise<INostrEvent[]>;
    fetchFollowersCacheEvents(pubKey: string): Promise<INostrEvent[]>;
    fetchCommunities(pubkeyToCommunityIdsMap?: Record<string, string[]>): Promise<INostrEvent[]>;
    fetchAllUserRelatedCommunities(pubKey: string): Promise<INostrEvent[]>;
    fetchUserBookmarkedCommunities(pubKey: string, excludedCommunity?: ICommunityInfo): Promise<ICommunityBasicInfo[]>;
    fetchCommunity(creatorId: string, communityId: string): Promise<INostrEvent[]>;
    fetchCommunitiesMetadataFeed(communities: ICommunityBasicInfo[]): Promise<INostrEvent[]>;
    fetchCommunitiesFeed(communityUriArr: string[]): Promise<INostrEvent[]>;
    fetchCommunitiesGeneralMembers(communities: ICommunityBasicInfo[]): Promise<INostrEvent[]>;
    fetchNotes(options: IFetchNotesOptions): Promise<INostrEvent[]>;
    fetchEventsByIds(ids: string[]): Promise<INostrEvent[]>;
    fetchAllUserRelatedChannels(pubKey: string): Promise<IAllUserRelatedChannels>;
    fetchUserBookmarkedChannelEventIds(pubKey: string): Promise<string[]>;
    fetchChannelMessages(channelId: string, since?: number, until?: number): Promise<INostrEvent[]>;
    fetchChannelInfoMessages(channelId: string): Promise<INostrEvent[]>;
    fetchMessageContactsCacheEvents(pubKey: string): Promise<INostrEvent[]>;
    fetchDirectMessages(pubKey: string, sender: string, since?: number, until?: number): Promise<INostrEvent[]>;
    resetMessageCount(pubKey: string, sender: string): Promise<void>;
    fetchGroupKeys(identifier: string): Promise<INostrEvent>;
    fetchUserGroupInvitations(groupKinds: number[], pubKey: string): Promise<INostrEvent[]>;
    fetchCalendarEventPosts(calendarEventUri: string): Promise<INostrEvent[]>;
    fetchCalendarEvents(start: number, end?: number, limit?: number): Promise<INostrEvent[]>;
    fetchCalendarEvent(address: Nip19.AddressPointer): Promise<INostrEvent | null>;
    fetchCalendarEventRSVPs(calendarEventUri: string, pubkey?: string): Promise<INostrEvent[]>;
    fetchLongFormContentEvents(pubKey?: string, since?: number, until?: number): Promise<INostrEvent[]>;
    searchUsers(query: string): Promise<INostrEvent[]>;
    fetchPaymentRequestEvent(paymentRequest: string): Promise<INostrEvent>;
    fetchPaymentReceiptEvent(requestEventId: string): Promise<INostrEvent>;
    fetchPaymentActivitiesForRecipient(pubkey: string, since?: number, until?: number): Promise<IPaymentActivity[]>;
    fetchPaymentActivitiesForSender(pubKey: string, since?: number, until?: number): Promise<IPaymentActivity[]>;
    fetchUserFollowingFeed(pubKey: string, until?: number): Promise<INostrEvent[]>;
}
declare class NostrEventManagerRead implements ISocialEventManagerRead {
    protected _nostrCommunicationManager: INostrCommunicationManager;
    protected _privateKey: string;
    constructor(manager: INostrCommunicationManager);
    set nostrCommunicationManager(manager: INostrCommunicationManager);
    set privateKey(privateKey: string);
    fetchThreadCacheEvents(id: string, pubKey?: string): Promise<INostrEvent[]>;
    fetchTrendingCacheEvents(pubKey?: string): Promise<INostrEvent[]>;
    fetchProfileFeedCacheEvents(userPubkey: string, pubKey: string, since?: number, until?: number): Promise<INostrEvent[]>;
    fetchProfileRepliesCacheEvents(userPubkey: string, pubKey: string, since?: number, until?: number): Promise<INostrEvent[]>;
    fetchHomeFeedCacheEvents(pubKey?: string, since?: number, until?: number): Promise<INostrEvent[]>;
    fetchUserProfileCacheEvents(pubKeys: string[]): Promise<INostrEvent[]>;
    fetchUserProfileDetailCacheEvents(pubKey: string): Promise<INostrEvent[]>;
    fetchContactListCacheEvents(pubKey: string, detailIncluded?: boolean): Promise<INostrEvent[]>;
    fetchUserRelays(pubKey: any): Promise<INostrEvent[]>;
    fetchFollowersCacheEvents(pubKey: string): Promise<INostrEvent[]>;
    fetchCommunities(pubkeyToCommunityIdsMap?: Record<string, string[]>): Promise<any>;
    fetchAllUserRelatedCommunities(pubKey: string): Promise<INostrEvent[]>;
    fetchUserBookmarkedCommunities(pubKey: string, excludedCommunity?: ICommunityInfo): Promise<ICommunityBasicInfo[]>;
    fetchCommunity(creatorId: string, communityId: string): Promise<INostrEvent[]>;
    fetchCommunitiesMetadataFeed(communities: ICommunityBasicInfo[]): Promise<INostrEvent[]>;
    fetchCommunitiesFeed(communityUriArr: string[]): Promise<INostrEvent[]>;
    fetchCommunitiesGeneralMembers(communities: ICommunityBasicInfo[]): Promise<INostrEvent[]>;
    fetchNotes(options: IFetchNotesOptions): Promise<INostrEvent[]>;
    fetchAllUserRelatedChannels(pubKey: string): Promise<{
        channels: IChannelInfo[];
        channelMetadataMap: Record<string, IChannelInfo>;
        channelIdToCommunityMap: Record<string, ICommunityInfo>;
    }>;
    fetchUserBookmarkedChannelEventIds(pubKey: string): Promise<string[]>;
    fetchEventsByIds(ids: string[]): Promise<INostrEvent[]>;
    fetchChannelMessages(channelId: string, since?: number, until?: number): Promise<INostrEvent[]>;
    fetchChannelInfoMessages(channelId: string): Promise<INostrEvent[]>;
    fetchMessageContactsCacheEvents(pubKey: string): Promise<INostrEvent[]>;
    fetchDirectMessages(pubKey: string, sender: string, since?: number, until?: number): Promise<INostrEvent[]>;
    resetMessageCount(pubKey: string, sender: string): Promise<void>;
    fetchGroupKeys(identifier: string): Promise<INostrEvent>;
    fetchUserGroupInvitations(groupKinds: number[], pubKey: string): Promise<INostrEvent[]>;
    fetchCalendarEvents(start: number, end?: number, limit?: number): Promise<INostrEvent[]>;
    fetchCalendarEvent(address: Nip19.AddressPointer): Promise<INostrEvent>;
    fetchCalendarEventPosts(calendarEventUri: string): Promise<INostrEvent[]>;
    fetchCalendarEventRSVPs(calendarEventUri: string, pubkey?: string): Promise<INostrEvent[]>;
    fetchLongFormContentEvents(pubKey?: string, since?: number, until?: number): Promise<INostrEvent[]>;
    searchUsers(query: string): Promise<INostrEvent[]>;
    fetchPaymentRequestEvent(paymentRequest: string): Promise<INostrEvent>;
    fetchPaymentReceiptEvent(requestEventId: string): Promise<INostrEvent>;
    private getPaymentHash;
    fetchPaymentActivitiesForRecipient(pubkey: string, since?: number, until?: number): Promise<IPaymentActivity[]>;
    fetchPaymentActivitiesForSender(pubkey: string, since?: number, until?: number): Promise<IPaymentActivity[]>;
    fetchUserFollowingFeed(pubKey: string, until?: number): Promise<INostrEvent[]>;
}
export { NostrEventManagerRead, ISocialEventManagerRead };
