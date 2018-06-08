/// <reference types="socket.io-client" />
import * as Promise from 'bluebird';
import { AckCallback, ChatAPI } from 'pxt-cloud';
import { Client } from './client.base';
export declare class ChatClient extends Client implements ChatAPI {
    connect(uri?: string, nsp?: string): Promise<this>;
    newMessage(msg: string, cb?: AckCallback<void>): boolean;
    protected _onConnect(socket: SocketIOClient.Socket): void;
}
