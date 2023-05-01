/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateGroupRequest } from '../models/CreateGroupRequest';
import type { DescriptionRequest } from '../models/DescriptionRequest';
import type { ParticipantsRequest } from '../models/ParticipantsRequest';
import type { SubjectRequest } from '../models/SubjectRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GroupsService {

    /**
     * Create a new group.
     * @returns any
     * @throws ApiError
     */
    public static groupsControllerCreateGroup({
        session,
        requestBody,
    }: {
        /**
         * WhatsApp session name
         */
        session: string,
        requestBody: CreateGroupRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/groups',
            path: {
                'session': session,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get all groups.
     * @returns any
     * @throws ApiError
     */
    public static groupsControllerGetGroups({
        session,
    }: {
        /**
         * WhatsApp session name
         */
        session: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/groups',
            path: {
                'session': session,
            },
        });
    }

    /**
     * Get the group.
     * @returns any
     * @throws ApiError
     */
    public static groupsControllerGetGroup({
        session,
        id,
    }: {
        /**
         * WhatsApp session name
         */
        session: string,
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/groups/{id}',
            path: {
                'session': session,
                'id': id,
            },
        });
    }

    /**
     * Delete the group.
     * @returns any
     * @throws ApiError
     */
    public static groupsControllerDeleteGroup({
        session,
        id,
    }: {
        /**
         * WhatsApp session name
         */
        session: string,
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/{session}/groups/{id}',
            path: {
                'session': session,
                'id': id,
            },
        });
    }

    /**
     * Leave the group.
     * @returns any
     * @throws ApiError
     */
    public static groupsControllerLeaveGroup({
        session,
        id,
    }: {
        /**
         * WhatsApp session name
         */
        session: string,
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/groups/{id}/leave',
            path: {
                'session': session,
                'id': id,
            },
        });
    }

    /**
     * Updates the group description.
     * Returns true if the subject was properly updated. This can return false if the user does not have the necessary permissions.
     *
     * @returns any
     * @throws ApiError
     */
    public static groupsControllerSetDescription({
        session,
        id,
        requestBody,
    }: {
        /**
         * WhatsApp session name
         */
        session: string,
        id: string,
        requestBody: DescriptionRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/{session}/groups/{id}/description',
            path: {
                'session': session,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Updates the group subject.
     * Returns true if the subject was properly updated. This can return false if the user does not have the necessary permissions.
     *
     * @returns any
     * @throws ApiError
     */
    public static groupsControllerSetSubject({
        session,
        id,
        requestBody,
    }: {
        /**
         * WhatsApp session name
         */
        session: string,
        id: string,
        requestBody: SubjectRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/{session}/groups/{id}/subject',
            path: {
                'session': session,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Gets the invite code for a specific group.
     * @returns string
     * @throws ApiError
     */
    public static groupsControllerGetInviteCode({
        session,
        id,
    }: {
        /**
         * WhatsApp session name
         */
        session: string,
        id: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/groups/{id}/invite-code',
            path: {
                'session': session,
                'id': id,
            },
        });
    }

    /**
     * Invalidates the current group invite code and generates a new one.
     * @returns string
     * @throws ApiError
     */
    public static groupsControllerRevokeInviteCode({
        session,
        id,
    }: {
        /**
         * WhatsApp session name
         */
        session: string,
        id: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/groups/{id}/invite-code/revoke',
            path: {
                'session': session,
                'id': id,
            },
        });
    }

    /**
     * Get a list of participants by in the group.
     * @returns any
     * @throws ApiError
     */
    public static groupsControllerGetParticipants({
        session,
        id,
    }: {
        /**
         * WhatsApp session name
         */
        session: string,
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/{session}/groups/{id}/participants',
            path: {
                'session': session,
                'id': id,
            },
        });
    }

    /**
     * Adds a list of participants by ID to the group.
     * @returns any
     * @throws ApiError
     */
    public static groupsControllerAddParticipants({
        session,
        id,
        requestBody,
    }: {
        /**
         * WhatsApp session name
         */
        session: string,
        id: string,
        requestBody: ParticipantsRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/groups/{id}/participants/add',
            path: {
                'session': session,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Removes a list of participants by ID to the group.
     * @returns any
     * @throws ApiError
     */
    public static groupsControllerRemoveParticipants({
        session,
        id,
        requestBody,
    }: {
        /**
         * WhatsApp session name
         */
        session: string,
        id: string,
        requestBody: ParticipantsRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/groups/{id}/participants/remove',
            path: {
                'session': session,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Promote participants to admin users.
     * @returns any
     * @throws ApiError
     */
    public static groupsControllerPromoteToAdmin({
        session,
        id,
        requestBody,
    }: {
        /**
         * WhatsApp session name
         */
        session: string,
        id: string,
        requestBody: ParticipantsRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/groups/{id}/admin/promote',
            path: {
                'session': session,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Demotes participants by to regular users.
     * @returns any
     * @throws ApiError
     */
    public static groupsControllerDemoteToAdmin({
        session,
        id,
        requestBody,
    }: {
        /**
         * WhatsApp session name
         */
        session: string,
        id: string,
        requestBody: ParticipantsRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/{session}/groups/{id}/admin/demote',
            path: {
                'session': session,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
