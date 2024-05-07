import React from 'react'

const NewsItem = (props) => {
    return (
        <div className="card my-8" style={{ height: "425px" }}>
            <img src={props.imgurl} className="" alt="..." style={{ height: "170px" }} />
            <div className="card-body">
                <h5 className="card-title font-bold">{props.title}...</h5>
                <p className="card-text">{props.description}...</p>
                <a href={props.newsurl} rel="noreferrer" target='_blank' className="btn btn-dark absolute bottom-3">Read more</a>
            </div>
        </div>
    )
}

export default NewsItem