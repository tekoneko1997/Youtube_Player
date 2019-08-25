/*
https://developers.google.com/youtube/v3/docs/subscriptions/list?hl=ja
/subscriptions に関しては↑のサイトからAPIを確認
*/
import YoutubeHttpClient from './index';

export default class SubscriptionsApi {

    async getSubscriptionItems(channelId, pageToken=''){
        try {
            return await YoutubeHttpClient.get('/subscriptions', {
                params: {
                    part: 'snippet',
                    maxResults:15,
                    pageToken: pageToken,
                    channelId: channelId,
                    order: 'relevance',
                    key: process.env.REACT_APP_YOUTUBE_API_KEY,
                }
            })
        } catch (error) {
            throw new Error(error);
        }
    }
}
