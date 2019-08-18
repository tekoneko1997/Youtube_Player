/*
https://developers.google.com/youtube/v3/docs/guideCategories/
/GuideCategories に関しては↑のサイトからAPIを確認
*/
import YoutubeHttpClient from './index';
export default class GuideCategoriesApi {

    async GuideCategories(){
        try {
            return await YoutubeHttpClient.get('/guideCategories', {
                params: {
                    part: 'replies,snippet',
                    key: process.env.REACT_APP_YOUTUBE_API_KEY,
                    regionCode: 'jp',
                    hl: 'ja'
                }
            })
        } catch (error) {
            throw new Error(error);
        }
    }
}
