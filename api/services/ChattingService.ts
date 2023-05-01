/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChatRequest } from '../models/ChatRequest';
import type { MessageContactVcardRequest } from '../models/MessageContactVcardRequest';
import type { MessageFileRequest } from '../models/MessageFileRequest';
import type { MessageImageRequest } from '../models/MessageImageRequest';
import type { MessageLinkPreviewRequest } from '../models/MessageLinkPreviewRequest';
import type { MessageLocationRequest } from '../models/MessageLocationRequest';
import type { MessageReactionRequest } from '../models/MessageReactionRequest';
import type { MessageReplyRequest } from '../models/MessageReplyRequest';
import type { MessageTextButtonsRequest } from '../models/MessageTextButtonsRequest';
import type { MessageTextRequest } from '../models/MessageTextRequest';
import type { MessageVoiceRequest } from '../models/MessageVoiceRequest';
import type { WAMessage } from '../models/WAMessage';
import type { WANumberExistResult } from '../models/WANumberExistResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ChattingService {

    /**
     * Check number status
     * @returns WANumberExistResult
     * @throws ApiError
     */
    public static chattingControllerCheckNumberStatus({
        phone,
        session = 'default',
    }: {
        phone: string,
        session?: string,
    }): CancelablePromise<WANumberExistResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/checkNumberStatus',
            query: {
                'phone': phone,
                'session': session,
            },
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static chattingControllerSendContactVcard({
        requestBody,
    }: {
        requestBody: MessageContactVcardRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sendContactVcard',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Send a text message
     * @returns any
     * @throws ApiError
     */
    public static chattingControllerSendTextGet({
        phone,
        text,
        session = 'default',
    }: {
        phone: string,
        text: string,
        session?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sendText',
            query: {
                'phone': phone,
                'text': text,
                'session': session,
            },
        });
    }

    /**
     * Send a text message
     * @returns WAMessage
     * @throws ApiError
     */
    public static chattingControllerSendText({
        requestBody,
    }: {
        requestBody: MessageTextRequest,
    }): CancelablePromise<WAMessage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sendText',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Send a text message with buttons
     * @returns any
     * @throws ApiError
     */
    public static chattingControllerSendTextButtons({
        requestBody,
    }: {
        requestBody: MessageTextButtonsRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sendTextButtons',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static chattingControllerSendLocation({
        requestBody,
    }: {
        requestBody: MessageLocationRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sendLocation',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static chattingControllerSendLinkPreview({
        requestBody,
    }: {
        requestBody: MessageLinkPreviewRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sendLinkPreview',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Send an image. Either from an URL or base64 data - look at the request schemas for details.
     * @returns any
     * @throws ApiError
     */
    public static chattingControllerSendImage({
        requestBody,
    }: {
        requestBody: MessageImageRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sendImage',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Send a file. Either from an URL or base64 data - look at the request schemas for details.
     * @returns any
     * @throws ApiError
     */
    public static chattingControllerSendFile({
        requestBody,
    }: {
        requestBody: MessageFileRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sendFile',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Send an voice message. Either from an URL or base64 data - look at the request schemas for details.
     * @returns any
     * @throws ApiError
     */
    public static chattingControllerSendVoice({
        requestBody,
    }: {
        requestBody: MessageVoiceRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sendVoice',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Reply to a text message
     * @returns any
     * @throws ApiError
     */
    public static chattingControllerReply({
        requestBody,
    }: {
        requestBody: MessageReplyRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/reply',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static chattingControllerSendSeen({
        requestBody,
    }: {
        requestBody: ChatRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sendSeen',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static chattingControllerStartTyping({
        requestBody,
    }: {
        requestBody: ChatRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/startTyping',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static chattingControllerStopTyping({
        requestBody,
    }: {
        requestBody: ChatRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/stopTyping',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * React to a message with an emoji
     * @returns any
     * @throws ApiError
     */
    public static chattingControllerSetReaction({
        requestBody,
    }: {
        requestBody: MessageReactionRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/reaction',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get messages in a chat
     * @returns any
     * @throws ApiError
     */
    public static chattingControllerGetMessages({
        chatId,
        limit,
        session = 'default',
    }: {
        chatId: string,
        limit: number,
        session?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/messages',
            query: {
                'chatId': chatId,
                'limit': limit,
                'session': session,
            },
        });
    }

}
