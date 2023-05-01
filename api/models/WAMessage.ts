/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WALocation } from './WALocation';

export type WAMessage = {
    /**
     * Message ID
     */
    id: string;
    /**
     * Unix timestamp for when the message was created
     */
    timestamp: number;
    /**
     * ID for the Chat that this message was sent to, except if the message was sent by the current user
     */
    from: string;
    /**
     * Indicates if the message was sent by the current user
     */
    fromMe: boolean;
    /**
     *
     * * ID for who this message is for.
     * * If the message is sent by the current user, it will be the Chat to which the message is being sent.
     * * If the message is sent by another user, it will be the ID for the current user.
     *
     */
    to: string;
    /**
     * Message content
     */
    body: string;
    /**
     * Indicates if the message has media available for download
     */
    hasMedia: boolean;
    /**
     * The URL for the media in the message if any
     */
    mediaUrl: string;
    /**
     * ACK status for the message
     */
    ack: WAMessage.ack;
    /**
     * If the message was sent to a group, this field will contain the user that sent the message.
     */
    author?: string;
    /**
     * Location information contained in the message, if the message is type "location"
     */
    location?: WALocation;
    /**
     * List of vCards contained in the message.
     */
    vCards?: Array<string>;
    /**
     * Message in a raw format that we get from WhatsApp. May be changed anytime, use it with caution! It depends a lot on the underlying backend.
     */
    _data?: any;
};

export namespace WAMessage {

    /**
     * ACK status for the message
     */
    export enum ack {
        ACK_PENDING = 'ACK_PENDING',
        ACK_SERVER = 'ACK_SERVER',
        ACK_DEVICE = 'ACK_DEVICE',
        ACK_READ = 'ACK_READ',
        ACK_PLAYED = 'ACK_PLAYED',
        '_-1' = -1,
    }


}

