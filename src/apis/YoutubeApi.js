/*
https://developers.google.com/youtube/v3/docs/search/list?hl=ja
/Search に関しては↑のサイトからAPIを確認
*/
import YoutubeHttpClient from './index';
export default class YoutubeApi {

    async getSearchItems(termFromSearchBar){
        try {
            return await YoutubeHttpClient.get('/search', {
                params: {
                    part: 'snippet',
                    maxResults:30,
                    key: process.env.REACT_APP_YOUTUBE_API_KEY,
                    q: termFromSearchBar
                }
            })
        } catch (error) {
            throw new Error(error);
        }
    }
}
