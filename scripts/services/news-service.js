import News from "../models/news.js";
import { URL } from "../utils/config.js";
import { getNews } from "./api-client.js";

/*
    Bring the data and store it in model
    CRUD 
    Create, Read, Update, Delete
*/
export const newsService = {
    async readNews() {
        const news = await getNews(URL);
        // news data is coming from BackEnd and convert it into News Model
        console.log('News are ', news.articles);
        const allNews = [];
        // Imperative Way
        // for(let i =0; i<news.articles.length; i++){
        //     const currentNews = news.articles[i];
        //     const newsObject = new News(currentNews['title'],
        //     currentNews['description'],currentNews['url'],
        //      currentNews['urlToImage']);
        //     allNews.push(newsObject);
        // }
        // Declartive Way
        return news.articles.map((currentNews) => new News(currentNews['title'],
            currentNews['description'], currentNews['url'],
            currentNews['urlToImage']));
        //return allNews;
    },
    markRead() {

    },
    markReadLater() {

    }
}