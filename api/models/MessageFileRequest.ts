/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BinaryFile } from './BinaryFile';
import type { RemoteFile } from './RemoteFile';

export type MessageFileRequest = {
    chatId: string;
    file: (BinaryFile | RemoteFile);
    session: any;
};

