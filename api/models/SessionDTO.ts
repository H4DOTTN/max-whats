/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SessionDTO = {
    name: any;
    status: SessionDTO.status;
};

export namespace SessionDTO {

    export enum status {
        STARTING = 'STARTING',
        SCAN_QR_CODE = 'SCAN_QR_CODE',
        WORKING = 'WORKING',
        FAILED = 'FAILED',
    }


}

