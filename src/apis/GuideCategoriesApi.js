/*
https://developers.google.com/youtube/v3/docs/guideCategories/
/GuideCategories に関しては↑のサイトからAPIを確認
*/
import YoutubeHttpClient from './index';
export default class GuideCategoriesApi {

    async GuideCategories(videoId){
        try {
            return await YoutubeHttpClient.get('/guideCategories', {
                params: {
                    part: 'snippet',
                    regionCode: 'jp',
                    id: videoId,
                    hl: 'ja',
                    key: process.env.REACT_APP_YOUTUBE_API_KEY,
                }
            })
        } catch (error) {
            throw new Error(error);
        }
    }
}
