import { ISocialEventManagerRead, SocialEventManagerReadOptions } from "../interfaces";
import { INostrRestAPIManager } from "./communication";
import { SocialUtilsManager } from "./utilsManager";
import { NostrEventManagerReadV1o5 } from "./eventManagerReadV1o5";

class NostrEventManagerReadV2 extends NostrEventManagerReadV1o5 implements ISocialEventManagerRead {
    protected _nostrCommunicationManager: INostrRestAPIManager;

    constructor(manager: INostrRestAPIManager) {
        super(manager);
    }

    set nostrCommunicationManager(manager: INostrRestAPIManager) {
        this._nostrCommunicationManager = manager;
    }

    async searchUsers(options: SocialEventManagerReadOptions.ISearchUsers) {
        return [];
    }

    async fetchPaymentRequestEvent(options: SocialEventManagerReadOptions.IFetchPaymentRequestEvent) {
        return null;
    }

    async fetchPaymentActivitiesForRecipient(options: SocialEventManagerReadOptions.IFetchPaymentActivitiesForRecipient) {
        return [];
    }

    async fetchPaymentActivitiesForSender(options: SocialEventManagerReadOptions.IFetchPaymentActivitiesForSender) {
        return [];
    }

    async fetchUserFollowingFeed(options: SocialEventManagerReadOptions.IFetchUserFollowingFeed) {
        return [];
    }
}

export {
    NostrEventManagerReadV2
}