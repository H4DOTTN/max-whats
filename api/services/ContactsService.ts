/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactRequest } from '../models/ContactRequest';
import type { WANumberExistResult } from '../models/WANumberExistResult';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ContactsService {

    /**
     * Get contact basic info. The method always return result, even if the phone number is not registered in WhatsApp. For that - use /check-exists endpoint below.
     * @returns any
     * @throws ApiError
     */
    public static contactsControllerGet({
        contactId,
        session = 'default',
    }: {
        contactId: string,
        session?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/contacts',
            query: {
                'contactId': contactId,
                'session': session,
            },
        });
    }

    /**
     * Get all contacts
     * @returns any
     * @throws ApiError
     */
    public static contactsControllerGetAll({
        session = 'default',
    }: {
        session?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/contacts/all',
            query: {
                'session': session,
            },
        });
    }

    /**
     * Check phone number is registered in WhatsApp.
     * @returns WANumberExistResult
     * @throws ApiError
     */
    public static contactsControllerCheckExists({
        phone,
        session = 'default',
    }: {
        phone: string,
        session?: string,
    }): CancelablePromise<WANumberExistResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/contacts/check-exists',
            query: {
                'phone': phone,
                'session': session,
            },
        });
    }

    /**
     * Gets the Contact's current "about" info. Returns null if you don't have permission to read their status.
     * @returns any
     * @throws ApiError
     */
    public static contactsControllerGetAbout({
        contactId,
        session = 'default',
    }: {
        contactId: string,
        session?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/contacts/about',
            query: {
                'contactId': contactId,
                'session': session,
            },
        });
    }

    /**
     * Returns the contact's profile picture URL, if privacy settings allow it.
     * @returns any
     * @throws ApiError
     */
    public static contactsControllerGetProfilePicture({
        contactId,
        session = 'default',
    }: {
        contactId: string,
        session?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/contacts/profile-picture',
            query: {
                'contactId': contactId,
                'session': session,
            },
        });
    }

    /**
     * Block contact
     * @returns any
     * @throws ApiError
     */
    public static contactsControllerBlock({
        requestBody,
    }: {
        requestBody: ContactRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/contacts/block',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Unblock contact
     * @returns any
     * @throws ApiError
     */
    public static contactsControllerUnblock({
        requestBody,
    }: {
        requestBody: ContactRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/contacts/unblock',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
