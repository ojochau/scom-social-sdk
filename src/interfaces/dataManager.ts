import { IMqttClientOptions } from "./common";
import { ISocialEventManagerRead } from "./eventManagerRead";
import { IMarketplaceOrder } from "./marketplace";

export namespace SocialDataManagerOptions {
	export interface IFetchUserEthWalletAccountsInfo {
		walletHash?: string;
		pubKey?: string;
	}
	interface IRewardsPoints {
		creatorId: string;
		communityId: string;
		points: number;
	}
	export interface IRedeemRewardsPoints extends IRewardsPoints {
		eventId?: string;
	}
	export interface IPlaceMarketplaceOrder {
		merchantId: string;
		stallId: string;
		stallPublicKey: string;
		order: IMarketplaceOrder;
		rewardsPoints?: IRewardsPoints
	}
	export interface IFetchProductPostPurchaseContent {
		sellerPubkey: string;
		productId: string;
		postPurchaseContent: string;
		gatekeeperPubkey?: string;
		encryptedContentKey?: string;
	}
	export interface IFetchProductPurchaseStatus {
		sellerPubkey: string;
		productId: string;
	}
	export interface IFetchCommunityProducts {
		creatorId: string;
		communityId: string;
		stallId?: string;
		decryptPostPurchaseContent?: boolean;
	}
	export interface IFetchMarketplaceProductDetails {
		stallId: string;
		productIds: string[];
		decryptPostPurchaseContent?: boolean;
	}
	export interface IFetchReservationsByRole {
		role: 'provider' | 'user';
		since?: number;
		until?: number;
	}
	export interface IFetchUserCommunityScores {
		pubKey: string;
		creatorId?: string;
		communityId?: string;
	}
}

export interface ISocialDataManagerConfig {
	version?: 1 | 1.5 | 2;
	writeRelays?: string[];
	readRelay?: string;
	readManager?: ISocialEventManagerRead;
	publicIndexingRelay?: string;
	apiBaseUrl?: string;
	ipLocationServiceBaseUrl?: string;
	ipLocationServiceApiKey?: string;
	mqttBrokerUrl?: string;
	mqttClientOptions?: IMqttClientOptions;
	mqttSubscriptions?: string[];
	mqttMessageCallback?: (topic: string, message: string) => void;
	enableLightningWallet?: boolean;
}

export interface ICheckRelayStatusResult {
	success: boolean, 
	error?: string, 
	npub?: string, 
	userProfileExists?: boolean, 
	isPrivate?: boolean
}