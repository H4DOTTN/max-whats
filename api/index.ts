/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { ApiError } from './core/ApiError';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export type { BinaryFile } from './models/BinaryFile';
export type { Button } from './models/Button';
export type { ChatRequest } from './models/ChatRequest';
export type { ContactRequest } from './models/ContactRequest';
export type { CreateGroupRequest } from './models/CreateGroupRequest';
export type { DescriptionRequest } from './models/DescriptionRequest';
export type { MessageContactVcardRequest } from './models/MessageContactVcardRequest';
export type { MessageFileRequest } from './models/MessageFileRequest';
export type { MessageImageRequest } from './models/MessageImageRequest';
export type { MessageLinkPreviewRequest } from './models/MessageLinkPreviewRequest';
export type { MessageLocationRequest } from './models/MessageLocationRequest';
export type { MessageReactionRequest } from './models/MessageReactionRequest';
export type { MessageReplyRequest } from './models/MessageReplyRequest';
export type { MessageTextButtonsRequest } from './models/MessageTextButtonsRequest';
export type { MessageTextRequest } from './models/MessageTextRequest';
export type { MessageVoiceRequest } from './models/MessageVoiceRequest';
export type { Participant } from './models/Participant';
export type { ParticipantsRequest } from './models/ParticipantsRequest';
export type { RemoteFile } from './models/RemoteFile';
export { SessionDTO } from './models/SessionDTO';
export type { SessionStartRequest } from './models/SessionStartRequest';
export type { SessionStopRequest } from './models/SessionStopRequest';
export type { SubjectRequest } from './models/SubjectRequest';
export type { VoiceBinaryFile } from './models/VoiceBinaryFile';
export type { VoiceRemoteFile } from './models/VoiceRemoteFile';
export type { WALocation } from './models/WALocation';
export { WAMessage } from './models/WAMessage';
export type { WANumberExistResult } from './models/WANumberExistResult';

export { ChattingService } from './services/ChattingService';
export { ContactsService } from './services/ContactsService';
export { GroupsService } from './services/GroupsService';
export { OtherService } from './services/OtherService';
export { ScreenshotService } from './services/ScreenshotService';
export { SessionsService } from './services/SessionsService';
