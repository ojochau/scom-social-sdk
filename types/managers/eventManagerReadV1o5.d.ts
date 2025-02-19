import { IChannelInfo, ICommunityBasicInfo, ICommunityInfo, ICommunityMember, IPaymentActivity, ISocialEventManagerRead, IUserCommunityScore, SocialEventManagerReadOptions } from "../interfaces";
import { INostrRestAPIManager } from "./communication";
declare class NostrEventManagerReadV1o5 implements ISocialEventManagerRead {
    protected _nostrCommunicationManager: INostrRestAPIManager;
    protected _privateKey: string;
    constructor(manager: INostrRestAPIManager);
    set nostrCommunicationManager(manager: INostrRestAPIManager);
    set privateKey(privateKey: string);
    fetchEventsFromAPIWithAuth(endpoint: string, msg: any): Promise<import("../interfaces").INostrFetchEventsResponse>;
    fetchThreadCacheEvents(options: SocialEventManagerReadOptions.IFetchThreadCacheEvents): Promise<import("../interfaces").INostrEvent[]>;
    fetchTrendingCacheEvents(options: SocialEventManagerReadOptions.IFetchTrendingCacheEvents): Promise<import("../interfaces").INostrEvent[]>;
    fetchProfileFeedCacheEvents(options: SocialEventManagerReadOptions.IFetchProfileFeedCacheEvents): Promise<import("../interfaces").INostrEvent[]>;
    fetchProfileRepliesCacheEvents(options: SocialEventManagerReadOptions.IFetchProfileRepliesCacheEvents): Promise<import("../interfaces").INostrEvent[]>;
    fetchHomeFeedCacheEvents(options: SocialEventManagerReadOptions.IFetchHomeFeedCacheEvents): Promise<import("../interfaces").INostrEvent[]>;
    fetchUserProfileCacheEvents(options: SocialEventManagerReadOptions.IFetchUserProfileCacheEvents): Promise<import("../interfaces").INostrEvent[]>;
    fetchUserProfileDetailEvents(options: SocialEventManagerReadOptions.IFetchUserProfileDetailEvents): Promise<import("../interfaces").INostrEvent[]>;
    fetchContactListCacheEvents(options: SocialEventManagerReadOptions.IFetchContactListCacheEvents): Promise<import("../interfaces").INostrEvent[]>;
    fetchUserRelays(options: SocialEventManagerReadOptions.IFetchUserRelays): Promise<import("../interfaces").INostrEvent[]>;
    fetchFollowersCacheEvents(options: SocialEventManagerReadOptions.IFetchFollowersCacheEvents): Promise<import("../interfaces").INostrEvent[]>;
    fetchCommunities(options: SocialEventManagerReadOptions.IFetchCommunities): Promise<any>;
    fetchAllUserRelatedCommunities(options: SocialEventManagerReadOptions.IFetchAllUserRelatedCommunities): Promise<import("../interfaces").INostrEvent[]>;
    fetchAllUserRelatedCommunitiesFeed(options: SocialEventManagerReadOptions.IFetchAllUserRelatedCommunitiesFeed): Promise<import("../interfaces").INostrEvent[]>;
    fetchUserBookmarkedCommunities(options: SocialEventManagerReadOptions.IFetchUserBookmarkedCommunities): Promise<ICommunityBasicInfo[]>;
    fetchCommunity(options: SocialEventManagerReadOptions.IFetchCommunity): Promise<import("../interfaces").INostrEvent[]>;
    fetchCommunityFeed(options: SocialEventManagerReadOptions.IFetchCommunityFeed): Promise<import("../interfaces").INostrEvent[]>;
    fetchAllUserRelatedChannels(options: SocialEventManagerReadOptions.IFetchAllUserRelatedChannels): Promise<{
        channels: IChannelInfo[];
        channelMetadataMap: Record<string, IChannelInfo>;
        channelIdToCommunityMap: Record<string, ICommunityInfo>;
    }>;
    fetchUserBookmarkedChannelEventIds(options: SocialEventManagerReadOptions.IFetchUserBookmarkedChannelEventIds): Promise<any>;
    fetchEventsByIds(options: SocialEventManagerReadOptions.IFetchEventsByIds): Promise<import("../interfaces").INostrEvent[]>;
    fetchTempEvents(options: SocialEventManagerReadOptions.IFetchTempEvents): Promise<import("../interfaces").INostrEvent[]>;
    fetchChannelMessages(options: SocialEventManagerReadOptions.IFetchChannelMessages): Promise<import("../interfaces").INostrEvent[]>;
    fetchChannelInfoMessages(options: SocialEventManagerReadOptions.IFetchChannelInfoMessages): Promise<import("../interfaces").INostrEvent[]>;
    fetchMessageContactsCacheEvents(options: SocialEventManagerReadOptions.IFetchMessageContactsCacheEvents): Promise<import("../interfaces").INostrEvent[]>;
    fetchDirectMessages(options: SocialEventManagerReadOptions.IFetchDirectMessages): Promise<import("../interfaces").INostrEvent[]>;
    resetMessageCount(options: SocialEventManagerReadOptions.IResetMessageCount): Promise<void>;
    fetchGroupKeys(options: SocialEventManagerReadOptions.IFetchGroupKeys): Promise<import("../interfaces").INostrEvent[]>;
    fetchUserGroupInvitations(options: SocialEventManagerReadOptions.IFetchUserGroupInvitations): Promise<import("../interfaces").INostrEvent[]>;
    fetchCalendarEvents(options: SocialEventManagerReadOptions.IFetchCalendarEvents): Promise<{
        events: import("../interfaces").INostrEvent[];
        data: any;
    }>;
    fetchCalendarEvent(options: SocialEventManagerReadOptions.IFetchCalendarEvent): Promise<import("../interfaces").INostrEvent>;
    fetchCalendarEventPosts(options: SocialEventManagerReadOptions.IFetchCalendarEventPosts): Promise<import("../interfaces").INostrEvent[]>;
    fetchCalendarEventRSVPs(options: SocialEventManagerReadOptions.IFetchCalendarEventRSVPs): Promise<import("../interfaces").INostrEvent[]>;
    fetchLongFormContentEvents(options: SocialEventManagerReadOptions.IFetchLongFormContentEvents): Promise<import("../interfaces").INostrEvent[]>;
    searchUsers(options: SocialEventManagerReadOptions.ISearchUsers): Promise<import("../interfaces").INostrEvent[]>;
    fetchPaymentRequestEvent(options: SocialEventManagerReadOptions.IFetchPaymentRequestEvent): Promise<import("../interfaces").INostrEvent>;
    fetchPaymentReceiptEvent(options: SocialEventManagerReadOptions.IFetchPaymentReceiptEvent): Promise<import("../interfaces").INostrEvent>;
    private getPaymentHash;
    fetchPaymentActivitiesForRecipient(options: SocialEventManagerReadOptions.IFetchPaymentActivitiesForRecipient): Promise<IPaymentActivity[]>;
    fetchPaymentActivitiesForSender(options: SocialEventManagerReadOptions.IFetchPaymentActivitiesForSender): Promise<IPaymentActivity[]>;
    fetchUserFollowingFeed(options: SocialEventManagerReadOptions.IFetchUserFollowingFeed): Promise<import("../interfaces").INostrEvent[]>;
    fetchCommunityPinnedNotesEvents(options: SocialEventManagerReadOptions.IFetchCommunityPinnedNotesEvents): Promise<import("../interfaces").INostrEvent[]>;
    fetchCommunityPinnedNoteIds(options: SocialEventManagerReadOptions.IFetchCommunityPinnedNoteIds): Promise<any>;
    fetchUserPinnedNotes(options: SocialEventManagerReadOptions.IFetchUserPinnedNotes): Promise<import("../interfaces").INostrEvent>;
    fetchUserBookmarks(options: SocialEventManagerReadOptions.IFetchUserBookmarks): Promise<import("../interfaces").INostrEvent>;
    fetchTrendingCommunities(): Promise<import("../interfaces").INostrEvent[]>;
    fetchUserEthWalletAccountsInfo(options: SocialEventManagerReadOptions.IFetchUserEthWalletAccountsInfo): Promise<import("../interfaces").INostrEvent>;
    fetchSubcommunites(options: SocialEventManagerReadOptions.IFetchSubcommunites): Promise<import("../interfaces").INostrEvent[]>;
    fetchCommunityDetailMetadata(options: SocialEventManagerReadOptions.IFetchCommunityDetailMetadata): Promise<import("../interfaces").INostrEvent[]>;
    getCommunityUriToMembersMap(communities: ICommunityInfo[]): Promise<Record<string, ICommunityMember[]>>;
    fetchCommunityStalls(options: SocialEventManagerReadOptions.IFetchCommunityStalls): Promise<import("../interfaces").INostrEvent[]>;
    fetchCommunityProducts(options: SocialEventManagerReadOptions.IFetchCommunityProducts): Promise<import("../interfaces").INostrEvent[]>;
    fetchCommunityOrders(options: SocialEventManagerReadOptions.IFetchCommunityOrders): Promise<import("../interfaces").INostrEvent[]>;
    fetchBuyerOrders(options: SocialEventManagerReadOptions.IFetchBuyerOrders): Promise<import("../interfaces").INostrEvent[]>;
    fetchMarketplaceOrderDetails(options: SocialEventManagerReadOptions.IFetchMarketplaceOrderDetails): Promise<import("../interfaces").INostrEvent[]>;
    fetchMarketplaceProductDetails(options: SocialEventManagerReadOptions.IFetchMarketplaceProductDetails): Promise<import("../interfaces").INostrEvent[]>;
    fetchPaymentActivities(options: SocialEventManagerReadOptions.IFetchPaymentActivities): Promise<import("../interfaces").INostrEvent[]>;
    fetchMarketplaceProductKey(options: SocialEventManagerReadOptions.IFetchMarketplaceProductKey): Promise<any>;
    fetchProductPurchaseStatus(options: SocialEventManagerReadOptions.IFetchProductPurchaseStatus): Promise<any>;
    fetchReservationsByRole(options: SocialEventManagerReadOptions.IFetchReservationsByRole): Promise<any>;
    fetchCommunityLeaderboard(options: SocialEventManagerReadOptions.IFetchCommunityLeaderboard): Promise<import("../interfaces").INostrFetchEventsResponse>;
    fetchUserCommunityScores(options: SocialEventManagerReadOptions.IFetchUserCommunityScores): Promise<IUserCommunityScore[]>;
}
export { NostrEventManagerReadV1o5 };
