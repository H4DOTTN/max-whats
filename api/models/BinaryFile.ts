/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BinaryFile = {
    /**
     * MIME type of the attachment.
     */
    mimetype: string;
    /**
     * Document file name. Optional
     */
    filename?: string | null;
    /**
     * Base64-encoded data of the file
     */
    data: string;
};

