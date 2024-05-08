import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import "../App.css";
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalresult, setTotalresult] = useState(0);

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, [])

    const title = props.category.charAt(0).toUpperCase() + props.category.slice(1);
    document.title = "NewsDaily - " + title;


    const updateNews = async () => {
        props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.newsapi}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(40);
        let parsedata = await data.json();
        props.setProgress(60);
        setArticles(parsedata.articles);
        setTotalresult(parsedata.totalResults);
        setLoading(false);
        props.setProgress(100)
    }

    const fetchMoreData = async () => {
        setPage(page + 1);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.newsapi}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedata = await data.json();
        setArticles(articles.concat(parsedata.articles));
        setTotalresult(parsedata.totalResults);;
    };

    return (
        <>
            <h1 className='bold font-bold text-center text-2xl pt-20 '>NewsDaily - Top {title} Headlines</h1>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalresult}
                loader={<Spinner />}
            >

                <div className='container'>
                    <div className='row ' >
                        {articles.map((element) => {
                            return <div key={element.url} className="col-md-4">
                                <NewsItem title={element.title ? element.title.slice(0, 60) : "Latest news of the day"} description={element.description ? element.description.slice(0, 127) : "For more information click on Read more"} imgurl={element.urlToImage ? element.urlToImage : "https://images.cnbctv18.com/uploads/2022/04/Adani-Ports.jpg?im=FitAndFill,width=500,height=300"} newsurl={element.url} author={element.author} time={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>

            </InfiniteScroll>
        </>
    )
}

export default News