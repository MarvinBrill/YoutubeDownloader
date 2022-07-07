import ytdl from "ytdl-core";
import ffmpeg from "fluent-ffmpeg"
import fs from "fs";

const YoutubeDownloader = async (req, res) => {
    const url = req.query.url;

    if(!url || !url.includes("https://www.youtube")) {
        res.status(400).end();
        return;
    }
    
    const info = await ytdl.getInfo(url, {quality: "highestaudio"});

    if(!info) {
        res.status(400).end();
        return;
    }
    
    const stream = ytdl.downloadFromInfo(info, {quality: "highestaudio"});
    const tmpFileName = `/tmp/yt-${Math.floor(Math.random() * 10000)}.mp3`;

    ffmpeg(stream)
    .audioBitrate(info.formats[0].audioBitrate)
    .withAudioCodec("libmp3lame")
    .toFormat("mp3")
    .saveToFile(tmpFileName)
    .on("error", e => {
        console.log(e)
        res.status(400);
    })
    .on("end", () => {
        res.set("filename", `${info.player_response.videoDetails.title}.mp3`);
        res.download(tmpFileName);
        res.status(200);
    });
};

export default YoutubeDownloader;