"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiktokDownloader = void 0;
const downloader_musicaldown_1 = require("./downloader_musicaldown");
const downloader_ssstik_1 = require("./downloader_ssstik");
const downloader_tiktokApi_1 = require("./downloader_tiktokApi");
const TiktokDownloader = async (url, options) => {
    switch (options?.version) {
        case "v1": {
            const response = await (0, downloader_tiktokApi_1.TiktokAPI)(url);
            return response;
        }
        case "v2": {
            const response = await (0, downloader_ssstik_1.SSSTik)(url);
            return response;
        }
        case "v3": {
            const response = await (0, downloader_musicaldown_1.MusicalDown)(url);
            return response;
        }
        default: {
            const response = await (0, downloader_tiktokApi_1.TiktokAPI)(url);
            return response;
        }
    }
};
exports.TiktokDownloader = TiktokDownloader;
