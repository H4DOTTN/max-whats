/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SessionDTO } from '../models/SessionDTO';
import type { SessionStartRequest } from '../models/SessionStartRequest';
import type { SessionStopRequest } from '../models/SessionStopRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SessionsService {

    /**
     * @returns SessionDTO
     * @throws ApiError
     */
    public static sessionsControllerStart({
        requestBody,
    }: {
        requestBody: SessionStartRequest,
    }): CancelablePromise<SessionDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sessions/start',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static sessionsControllerStop({
        requestBody,
    }: {
        requestBody: SessionStopRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sessions/stop',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns SessionDTO
     * @throws ApiError
     */
    public static sessionsControllerList(): CancelablePromise<Array<SessionDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sessions',
        });
    }

}
