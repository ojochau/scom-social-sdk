import { IChannelInfo, ICommunityBasicInfo, ICommunityInfo, INostrEvent, IPaymentActivity, ISocialEventManagerRead, SocialEventManagerReadOptions } from "../utils/interfaces";
import { INostrCommunicationManager } from "./communication";
declare class NostrEventManagerRead implements ISocialEventManagerRead {
    protected _nostrCommunicationManager: INostrCommunicationManager;
    protected _privateKey: string;
    constructor(manager: INostrCommunicationManager);
    set nostrCommunicationManager(manager: INostrCommunicationManager);
    set privateKey(privateKey: string);
    fetchThreadCacheEvents(options: SocialEventManagerReadOptions.IFetchThreadCacheEvents): Promise<INostrEvent[]>;
    fetchTrendingCacheEvents(options: SocialEventManagerReadOptions.IFetchTrendingCacheEvents): Promise<INostrEvent[]>;
    fetchProfileFeedCacheEvents(options: SocialEventManagerReadOptions.IFetchProfileFeedCacheEvents): Promise<INostrEvent[]>;
    fetchProfileRepliesCacheEvents(options: SocialEventManagerReadOptions.IFetchProfileRepliesCacheEvents): Promise<INostrEvent[]>;
    fetchHomeFeedCacheEvents(options: SocialEventManagerReadOptions.IFetchHomeFeedCacheEvents): Promise<INostrEvent[]>;
    fetchUserProfileCacheEvents(options: SocialEventManagerReadOptions.IFetchUserProfileCacheEvents): Promise<INostrEvent[]>;
    fetchUserProfileDetailCacheEvents(options: SocialEventManagerReadOptions.IFetchUserProfileDetailCacheEvents): Promise<INostrEvent[]>;
    fetchContactListCacheEvents(options: SocialEventManagerReadOptions.IFetchContactListCacheEvents): Promise<INostrEvent[]>;
    fetchUserRelays(options: SocialEventManagerReadOptions.IFetchUserRelays): Promise<INostrEvent[]>;
    fetchFollowersCacheEvents(options: SocialEventManagerReadOptions.IFetchFollowersCacheEvents): Promise<INostrEvent[]>;
    fetchCommunities(options: SocialEventManagerReadOptions.IFetchCommunities): Promise<any>;
    fetchAllUserRelatedCommunities(options: SocialEventManagerReadOptions.IFetchAllUserRelatedCommunities): Promise<INostrEvent[]>;
    fetchAllUserRelatedCommunitiesFeed(options: SocialEventManagerReadOptions.IFetchAllUserRelatedCommunitiesFeed): Promise<INostrEvent[]>;
    fetchUserBookmarkedCommunities(options: SocialEventManagerReadOptions.IFetchUserBookmarkedCommunities): Promise<ICommunityBasicInfo[]>;
    fetchCommunity(options: SocialEventManagerReadOptions.IFetchCommunity): Promise<INostrEvent[]>;
    fetchCommunitiesMetadataFeed(options: SocialEventManagerReadOptions.IFetchCommunitiesMetadataFeed): Promise<INostrEvent[]>;
    fetchCommunityMetadataFeed(options: SocialEventManagerReadOptions.IFetchCommunityMetadataFeed): Promise<INostrEvent[]>;
    fetchCommunityFeed(options: SocialEventManagerReadOptions.IFetchCommunityFeed): Promise<INostrEvent[]>;
    private fetchCommunitiesFeed;
    fetchCommunitiesGeneralMembers(options: SocialEventManagerReadOptions.IFetchCommunitiesGeneralMembers): Promise<INostrEvent[]>;
    fetchAllUserRelatedChannels(options: SocialEventManagerReadOptions.IFetchAllUserRelatedChannels): Promise<{
        channels: IChannelInfo[];
        channelMetadataMap: Record<string, IChannelInfo>;
        channelIdToCommunityMap: Record<string, ICommunityInfo>;
    }>;
    fetchUserBookmarkedChannelEventIds(options: SocialEventManagerReadOptions.IFetchUserBookmarkedChannelEventIds): Promise<string[]>;
    fetchEventsByIds(options: SocialEventManagerReadOptions.IFetchEventsByIds): Promise<INostrEvent[]>;
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
    fetchCommunityPinnedNotesEvent(options: SocialEventManagerReadOptions.IFetchCommunityPinnedNotesEvent): Promise<INostrEvent>;
    fetchCommunityPinnedNoteIds(options: SocialEventManagerReadOptions.IFetchCommunityPinnedNoteIds): Promise<string[]>;
    fetchUserPinnedNotes(options: SocialEventManagerReadOptions.IFetchUserPinnedNotes): Promise<INostrEvent>;
    fetchUserBookmarks(options: SocialEventManagerReadOptions.IFetchUserBookmarks): Promise<INostrEvent>;
    fetchTrendingCommunities(): Promise<any>;
    fetchUserEthWalletAccountsInfo(options: SocialEventManagerReadOptions.IFetchUserEthWalletAccountsInfo): Promise<INostrEvent>;
    fetchSubcommunites(options: SocialEventManagerReadOptions.IFetchSubcommunites): Promise<any[]>;
}
export { NostrEventManagerRead };
