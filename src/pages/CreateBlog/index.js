import React from 'react'
import {Input, Button, Upload, TextArea, Gap} from "../../components"
import "./createBlog.scss"
import {useHistory} from 'react-router-dom'

const CreateBlog = () => {
    const history = useHistory()
    return (
        <div className="blog-post">
            <p className="title">Create New Blog Postg</p>
            <Input labul="Post Title" />
            <Upload />
            <TextArea/>
            <Gap height={20}/>
            <div className="button-action">
                <Button title="Save" onClick={() => history.push('Home')} />
            </div>
        </div>
    )
}

export default CreateBlog
