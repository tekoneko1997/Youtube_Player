/*
https://developers.google.com/youtube/v3/docs/Videos/list?hl=ja
/Videos に関しては↑のサイトからAPIを確認
*/
import YoutubeHttpClient from './index';
export default class VideosApi {

    async getVideoRequest(VideoId){
        try {
            return await YoutubeHttpClient.get('/videos', {
                params: {
                    part: 'snippet',
                    maxResults:1,
                    key: process.env.REACT_APP_YOUTUBE_API_KEY,
                    id:VideoId,
                }
            })
        } catch (error) {
            throw new Error(error);
        }
    }
}
