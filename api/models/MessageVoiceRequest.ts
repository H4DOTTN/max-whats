/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VoiceBinaryFile } from './VoiceBinaryFile';
import type { VoiceRemoteFile } from './VoiceRemoteFile';

export type MessageVoiceRequest = {
    chatId: string;
    file: (VoiceBinaryFile | VoiceRemoteFile);
    session: any;
};

