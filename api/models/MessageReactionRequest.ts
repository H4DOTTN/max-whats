/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MessageReactionRequest = {
    messageId: string;
    /**
     * Emoji to react with. Send an empty string to remove the reaction
     */
    reaction: string;
    session: any;
};

