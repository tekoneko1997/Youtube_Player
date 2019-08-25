/*
https://developers.google.com/youtube/v3/docs/search/list?hl=ja
/Search に関しては↑のサイトからAPIを確認
*/
import YoutubeHttpClient from './index';
export default class SearchApi {

    async getSearchItems(termFromSearchBar, pageToken=''){
        try {
            return await YoutubeHttpClient.get('/search', {
                params: {
                    part: 'snippet',
                    maxResults:30,
                    pageToken: pageToken,
                    regionCode: "JP",
                    type: 'video',
                    q: termFromSearchBar,
                    key: process.env.REACT_APP_YOUTUBE_API_KEY,
                }
            })
        } catch (error) {
            throw new Error(error);
        }
    }
    async getSearchItemsbychannelId(channelId, pageToken=''){
        try {
            return await YoutubeHttpClient.get('/search', {
                params: {
                    part: 'snippet',
                    maxResults:30,
                    pageToken: pageToken,
                    regionCode: "JP",
                    type: 'video',
                    channelId: channelId,
                    key: process.env.REACT_APP_YOUTUBE_API_KEY,
                }
            })
        } catch (error) {
            throw new Error(error);
        }
    }
}
