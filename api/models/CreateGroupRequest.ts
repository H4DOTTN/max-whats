/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Participant } from './Participant';

export type CreateGroupRequest = {
    name: string;
    participants: Array<Participant>;
};

