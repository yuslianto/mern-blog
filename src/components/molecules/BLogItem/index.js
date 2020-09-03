import React from 'react'
import { RegisterBg } from '../../../assets'
import "./blogItem.scss"

const BlogItem = () => {
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="post" />
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date Post</p>
                <p className="body">Lorem ipsum is simply dummytext of the paragraph in oyur website</p>
            </div>
        </div>
    )
}

export default BlogItem
