/// <reference types="socket.io-client" />
/// <reference types="node" />
import * as Promise from 'bluebird';
import { EventEmitter } from 'events';
import * as API from 'pxt-cloud';
export declare class Client extends EventEmitter implements API.EventAPI {
    protected static _errorInvalidConnection: Error;
    private _socket;
    readonly isConnected: boolean;
    readonly connectedId: string | null;
    protected readonly socket: SocketIOClient.Socket | null;
    connect(uri?: string, nsp?: string): Promise<API.EventAPI>;
    dispose(): void;
    protected _onConnect(socket: SocketIOClient.Socket): void;
    protected _promisedEvent<T>(event: string, ...args: any[]): Promise<T>;
    protected _onDisconnect(): void;
}