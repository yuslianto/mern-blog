import React from 'react'
import {RegisterBg} from '../../assets'
import './detailBlog.scss'

const DetailBlog = () => {
    return (
        <div className="detail-blog-wrapper">
            <img className="img-title" src={RegisterBg} alt="img" />
            <p className="blog-title">Title blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">lorem ipsum is simply dummy text of Magna esse nulla 
                labore et consequat Lorem reprehenderit et ad.
                Et duis non irure sit reprehenderit incididunt amet.</p>
        </div>
    )
}

export default DetailBlog
