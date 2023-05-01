/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RemoteFile = {
    /**
     * MIME type of the attachment.
     */
    mimetype: string;
    /**
     * Document file name. Value can be null
     */
    filename?: string | null;
    url: string;
};

