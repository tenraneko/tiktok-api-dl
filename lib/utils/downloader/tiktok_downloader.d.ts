import { MusicalDownResponse } from "../../types/musicaldown";
import { SSSTikResponse } from "../../types/ssstik";
import { TiktokAPIResponse } from "../../types/tiktokApi";
type TiktokDownloaderResponse<T extends "v1" | "v2" | "v3"> = T extends "v1" ? TiktokAPIResponse : T extends "v2" ? SSSTikResponse : T extends "v3" ? MusicalDownResponse : TiktokAPIResponse;
export declare const TiktokDownloader: <T extends "v1" | "v2" | "v3">(url: string, options?: {
    version: T;
}) => Promise<TiktokDownloaderResponse<T>>;
export {};
