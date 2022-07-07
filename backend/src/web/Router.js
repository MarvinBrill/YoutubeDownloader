import { Router as createRouter } from 'express';
import YoutubeDownloader from './YoutubeDownloader';

const router = createRouter();

router.get(
    '/download',
    YoutubeDownloader
)

export default router;