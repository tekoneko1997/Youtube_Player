/*
https://developers.google.com/youtube/v3/docs/commentThreads/
/commentThreads に関しては↑のサイトからAPIを確認
*/
import YoutubeHttpClient from './index';
export default class commentThreadsApi {

    async getcommentThreads(videoId, pageToken=''){
        try {
            return await YoutubeHttpClient.get('/commentThreads', {
                params: {
                    part: 'replies,snippet',
                    maxResults:20,
                    pageToken: pageToken,
                    videoId: videoId,
                    key: process.env.REACT_APP_YOUTUBE_API_KEY,
                }
            })
        } catch (error) {
            throw new Error(error);
        }
    }
}
