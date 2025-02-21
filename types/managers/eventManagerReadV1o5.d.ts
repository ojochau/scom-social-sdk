import { IChannelInfo, ICommunityBasicInfo, ICommunityInfo, ICommunityMember, INostrEvent, IPaymentActivity, ISocialEventManagerRead, IUserCommunityScore, IUserCommunityScoreLog, SocialEventManagerReadOptions } from "../interfaces";
import { INostrRestAPIManager } from "./communication";
declare class NostrEventManagerReadV1o5 implements ISocialEventManagerRead {
    protected _nostrCommunicationManager: INostrRestAPIManager;
    protected _privateKey: string;
    constructor(manager: INostrRestAPIManager);
    set nostrCommunicationManager(manager: INostrRestAPIManager);
    set privateKey(privateKey: string);
    fetchEventsFromAPIWithAuth(endpoint: string, msg: any): Promise<import("../interfaces").INostrFetchEventsResponse>;
    fetchThreadCacheEvents(options: SocialEventManagerReadOptions.IFetchThreadCacheEvents): Promise<INostrEvent[]>;
    fetchTrendingCacheEvents(options: SocialEventManagerReadOptions.IFetchTrendingCacheEvents): Promise<INostrEvent[]>;
    fetchProfileFeedCacheEvents(options: SocialEventManagerReadOptions.IFetchProfileFeedCacheEvents): Promise<INostrEvent[]>;
    fetchProfileRepliesCacheEvents(options: SocialEventManagerReadOptions.IFetchProfileRepliesCacheEvents): Promise<INostrEvent[]>;
    fetchHomeFeedCacheEvents(options: SocialEventManagerReadOptions.IFetchHomeFeedCacheEvents): Promise<INostrEvent[]>;
    fetchUserProfileCacheEvents(options: SocialEventManagerReadOptions.IFetchUserProfileCacheEvents): Promise<INostrEvent[]>;
    fetchUserProfileDetailEvents(options: SocialEventManagerReadOptions.IFetchUserProfileDetailEvents): Promise<INostrEvent[]>;
    fetchContactListCacheEvents(options: SocialEventManagerReadOptions.IFetchContactListCacheEvents): Promise<INostrEvent[]>;
    fetchUserRelays(options: SocialEventManagerReadOptions.IFetchUserRelays): Promise<INostrEvent[]>;
    fetchFollowersCacheEvents(options: SocialEventManagerReadOptions.IFetchFollowersCacheEvents): Promise<INostrEvent[]>;
    fetchCommunities(options: SocialEventManagerReadOptions.IFetchCommunities): Promise<any>;
    fetchAllUserRelatedCommunities(options: SocialEventManagerReadOptions.IFetchAllUserRelatedCommunities): Promise<INostrEvent[]>;
    fetchAllUserRelatedCommunitiesFeed(options: SocialEventManagerReadOptions.IFetchAllUserRelatedCommunitiesFeed): Promise<INostrEvent[]>;
    fetchUserBookmarkedCommunities(options: SocialEventManagerReadOptions.IFetchUserBookmarkedCommunities): Promise<ICommunityBasicInfo[]>;
    fetchCommunity(options: SocialEventManagerReadOptions.IFetchCommunity): Promise<INostrEvent[]>;
    fetchCommunityFeed(options: SocialEventManagerReadOptions.IFetchCommunityFeed): Promise<INostrEvent[]>;
    fetchAllUserRelatedChannels(options: SocialEventManagerReadOptions.IFetchAllUserRelatedChannels): Promise<{
        channels: IChannelInfo[];
        channelMetadataMap: Record<string, IChannelInfo>;
        channelIdToCommunityMap: Record<string, ICommunityInfo>;
    }>;
    fetchUserBookmarkedChannelEventIds(options: SocialEventManagerReadOptions.IFetchUserBookmarkedChannelEventIds): Promise<any>;
    fetchEventsByIds(options: SocialEventManagerReadOptions.IFetchEventsByIds): Promise<INostrEvent[]>;
    fetchTempEvents(options: SocialEventManagerReadOptions.IFetchTempEvents): Promise<INostrEvent[]>;
    fetchChannelMessages(options: SocialEventManagerReadOptions.IFetchChannelMessages): Promise<INostrEvent[]>;
    fetchChannelInfoMessages(options: SocialEventManagerReadOptions.IFetchChannelInfoMessages): Promise<INostrEvent[]>;
    fetchMessageContactsCacheEvents(options: SocialEventManagerReadOptions.IFetchMessageContactsCacheEvents): Promise<INostrEvent[]>;
    fetchDirectMessages(options: SocialEventManagerReadOptions.IFetchDirectMessages): Promise<INostrEvent[]>;
    resetMessageCount(options: SocialEventManagerReadOptions.IResetMessageCount): Promise<void>;
    fetchGroupKeys(options: SocialEventManagerReadOptions.IFetchGroupKeys): Promise<INostrEvent[]>;
    fetchUserGroupInvitations(options: SocialEventManagerReadOptions.IFetchUserGroupInvitations): Promise<INostrEvent[]>;
    fetchCalendarEvents(options: SocialEventManagerReadOptions.IFetchCalendarEvents): Promise<{
        events: INostrEvent[];
        data: any;
    }>;
    fetchCalendarEvent(options: SocialEventManagerReadOptions.IFetchCalendarEvent): Promise<INostrEvent>;
    fetchCalendarEventPosts(options: SocialEventManagerReadOptions.IFetchCalendarEventPosts): Promise<INostrEvent[]>;
    fetchCalendarEventRSVPs(options: SocialEventManagerReadOptions.IFetchCalendarEventRSVPs): Promise<INostrEvent[]>;
    fetchLongFormContentEvents(options: SocialEventManagerReadOptions.IFetchLongFormContentEvents): Promise<INostrEvent[]>;
    searchUsers(options: SocialEventManagerReadOptions.ISearchUsers): Promise<INostrEvent[]>;
    fetchPaymentRequestEvent(options: SocialEventManagerReadOptions.IFetchPaymentRequestEvent): Promise<INostrEvent>;
    fetchPaymentReceiptEvent(options: SocialEventManagerReadOptions.IFetchPaymentReceiptEvent): Promise<INostrEvent>;
    private getPaymentHash;
    fetchPaymentActivitiesForRecipient(options: SocialEventManagerReadOptions.IFetchPaymentActivitiesForRecipient): Promise<IPaymentActivity[]>;
    fetchPaymentActivitiesForSender(options: SocialEventManagerReadOptions.IFetchPaymentActivitiesForSender): Promise<IPaymentActivity[]>;
    fetchUserFollowingFeed(options: SocialEventManagerReadOptions.IFetchUserFollowingFeed): Promise<INostrEvent[]>;
    fetchCommunityPinnedNotesEvents(options: SocialEventManagerReadOptions.IFetchCommunityPinnedNotesEvents): Promise<INostrEvent[]>;
    fetchCommunityPinnedNoteIds(options: SocialEventManagerReadOptions.IFetchCommunityPinnedNoteIds): Promise<any>;
    fetchUserPinnedNotes(options: SocialEventManagerReadOptions.IFetchUserPinnedNotes): Promise<INostrEvent>;
    fetchUserBookmarks(options: SocialEventManagerReadOptions.IFetchUserBookmarks): Promise<INostrEvent>;
    fetchTrendingCommunities(): Promise<INostrEvent[]>;
    fetchUserEthWalletAccountsInfo(options: SocialEventManagerReadOptions.IFetchUserEthWalletAccountsInfo): Promise<INostrEvent>;
    fetchSubcommunites(options: SocialEventManagerReadOptions.IFetchSubcommunites): Promise<INostrEvent[]>;
    fetchCommunityDetailMetadata(options: SocialEventManagerReadOptions.IFetchCommunityDetailMetadata): Promise<INostrEvent[]>;
    getCommunityUriToMembersMap(communities: ICommunityInfo[]): Promise<Record<string, ICommunityMember[]>>;
    fetchCommunityStalls(options: SocialEventManagerReadOptions.IFetchCommunityStalls): Promise<INostrEvent[]>;
    fetchCommunityProducts(options: SocialEventManagerReadOptions.IFetchCommunityProducts): Promise<INostrEvent[]>;
    fetchCommunityOrders(options: SocialEventManagerReadOptions.IFetchCommunityOrders): Promise<INostrEvent[]>;
    fetchBuyerOrders(options: SocialEventManagerReadOptions.IFetchBuyerOrders): Promise<INostrEvent[]>;
    fetchMarketplaceOrderDetails(options: SocialEventManagerReadOptions.IFetchMarketplaceOrderDetails): Promise<INostrEvent[]>;
    fetchMarketplaceProductDetails(options: SocialEventManagerReadOptions.IFetchMarketplaceProductDetails): Promise<INostrEvent[]>;
    fetchPaymentActivities(options: SocialEventManagerReadOptions.IFetchPaymentActivities): Promise<INostrEvent[]>;
    fetchMarketplaceProductKey(options: SocialEventManagerReadOptions.IFetchMarketplaceProductKey): Promise<any>;
    fetchProductPurchaseStatus(options: SocialEventManagerReadOptions.IFetchProductPurchaseStatus): Promise<any>;
    fetchReservationsByRole(options: SocialEventManagerReadOptions.IFetchReservationsByRole): Promise<any>;
    fetchCommunityLeaderboard(options: SocialEventManagerReadOptions.IFetchCommunityLeaderboard): Promise<import("../interfaces").INostrFetchEventsResponse>;
    fetchUserCommunityScores(options: SocialEventManagerReadOptions.IFetchUserCommunityScores): Promise<IUserCommunityScore[]>;
    fetchUserCommunityScoreLogs(options: SocialEventManagerReadOptions.IFetchUserCommunityScoreLogs): Promise<IUserCommunityScoreLog[]>;
}
export { NostrEventManagerReadV1o5 };
