import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import "../App.css";
import Spinner from './Spinner';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalresult, setTotalResult] = useState(0);

    useEffect(() => {
        updateNews();
    }, [])

    const updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=b8eabb45ce7f4746a84929c7ef5af279&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedata = await data.json();
        setArticles(parsedata.articles);
        setTotalResult(parsedata.totalResults);
        setLoading(false);
    }

    const handlenext = async () => {
        setPage(page + 1);
        updateNews();
    }

    const handleprevious = async () => {
        setPage(page - 1);
        updateNews();
    }

    return (

        <div className='container my-3'>
            <h1 className='bold font-bold text-center text-2xl m-6'>NewsDaily - Top Headlines</h1>
            {loading && <Spinner />}

            {!loading && <><div className='row '>
                {articles.map((element) => {
                    return <div key={element.url} className="col-md-4">
                        <NewsItem title={element.title ? element.title.slice(0, 60) : "Latest news of the day"} description={element.description ? element.description.slice(0, 127) : "For more information click on Read more"} imgurl={element.urlToImage ? element.urlToImage : "https://images.cnbctv18.com/uploads/2022/04/Adani-Ports.jpg?im=FitAndFill,width=500,height=300"} newsurl={element.url} />
                    </div>
                })}

            </div>
                <div className="btn-container flex justify-between">
                    <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handleprevious}>&larr;Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalresult / props.pageSize)} type="button" className="btn btn-dark" onClick={handlenext}>Next&rarr;</button>
                </div></>}
        </div>
    )
}

export default News
