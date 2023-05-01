/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Button } from './Button';

export type MessageTextButtonsRequest = {
    chatId: string;
    title: string;
    text: string;
    buttons?: Array<Button>;
    session: any;
};

