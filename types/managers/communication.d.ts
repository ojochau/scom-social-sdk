import { Event } from "../core/index";
import { INostrFetchEventsResponse, INostrSubmitResponse } from "../utils/interfaces";
interface INostrCommunicationManager {
    fetchEvents(...requests: any): Promise<INostrFetchEventsResponse>;
    fetchCachedEvents(eventType: string, msg: any): Promise<INostrFetchEventsResponse>;
    submitEvent(event: Event.VerifiedEvent<number>): Promise<INostrSubmitResponse>;
}
interface INostrRestAPIManager extends INostrCommunicationManager {
    fetchEventsFromAPI(endpoint: string, msg: any): Promise<INostrFetchEventsResponse>;
}
declare class NostrRestAPIManager implements INostrRestAPIManager {
    protected _url: string;
    protected requestCallbackMap: Record<string, (response: any) => void>;
    constructor(url: string);
    get url(): string;
    set url(url: string);
    fetchEvents(...requests: any): Promise<INostrFetchEventsResponse>;
    fetchEventsFromAPI(endpoint: string, msg: any): Promise<INostrFetchEventsResponse>;
    fetchCachedEvents(eventType: string, msg: any): Promise<INostrFetchEventsResponse>;
    submitEvent(event: any): Promise<any>;
}
declare class NostrWebSocketManager implements INostrCommunicationManager {
    protected _url: string;
    protected ws: any;
    protected requestCallbackMap: Record<string, (message: any) => void>;
    protected messageListenerBound: any;
    constructor(url: any);
    get url(): string;
    set url(url: string);
    generateRandomNumber(): string;
    messageListener(event: any): void;
    establishConnection(requestId: string, cb: (message: any) => void): Promise<{
        ws: any;
        error: any;
    }>;
    fetchEvents(...requests: any): Promise<INostrFetchEventsResponse>;
    fetchCachedEvents(eventType: string, msg: any): Promise<INostrFetchEventsResponse>;
    submitEvent(event: Event.VerifiedEvent<number>): Promise<INostrSubmitResponse>;
}
export { INostrCommunicationManager, INostrRestAPIManager, NostrRestAPIManager, NostrWebSocketManager };
