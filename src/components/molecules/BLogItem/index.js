import React from 'react'
import { RegisterBg } from '../../../assets'
import "./blogItem.scss"
import { useHistory } from 'react-router-dom'
import { Button, Gap } from '../../atoms'

const BlogItem = () => {
    const history = useHistory()
    return (
        <div className="blog-item" >
            <img className="image-thumb" src={RegisterBg} alt="post" />
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date Post</p>
                <p className="body">Lorem ipsum is simply dummytext of the paragraph 
                Fugiat laborum commodo dolore nulla duis. Laborum eiusmod sint sit incididunt laborum et culpa dolor. Anim velit est elit ad consequat mollit fugiat. Nisi irure ea fugiat aliqua et laboris irure est cillum incididunt quis qui. Sint consequat minim esse nisi duis elit nulla aliquip laboris aliqua culpa esse.
                in oyur website</p>
                <Gap height={20} />
                <Button title="View Detail" onClick={() => history.push('/detail-blog')} />
            </div>
        </div>
    )
}

export default BlogItem
