/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BinaryFile } from './BinaryFile';
import type { RemoteFile } from './RemoteFile';

export type MessageImageRequest = {
  chatId: string;
  // file: (BinaryFile | RemoteFile);
  url: string;
  caption: string;
  session: any;
};
