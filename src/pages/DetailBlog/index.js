import React from 'react'
import {RegisterBg} from '../../assets'
import './detailBlog.scss'
import { Link, Gap } from '../../components/atoms'
import { useHistory } from 'react-router-dom'

const DetailBlog = () => {
    const history = useHistory()
    return (
        <div className="detail-blog-wrapper">
            <img className="img-title" src={RegisterBg} alt="img" />
            <p className="blog-title">Title blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">lorem ipsum is simply dummy text of Magna esse nulla 
                labore et consequat Lorem reprehenderit et ad.
                Et duis non irure sit reprehenOccaecat nisi nulla dolore
                 elit proident aliquip deserunt culpa enim consectetur. 
                 Laboris labore minim aliquip exercitation fugiat eiusmod 
                 dipisicing aute cillum sit magna laborum. Excepteur est anim 
                 adipisicing est reprehenderit do cillum dolor. 
                 Sint commodo sint qui eu ullamco ea. 
                 Ipsum do nulla amet tempor laborum aute ea sit eu. 
                 Cupidatat magna consequat esse nostrud in proident in ea ea 
                 exercitation officia excepteur. Voluptate fugiat consectetur
                tempor non sunt anim irure nulla ullamco.derit incididunt amet.
            </p>
            <Gap height={20} />
            <Link title="Kembali Ke Home" onClick={() => history.push('/')} />

        </div>
    )
}

export default DetailBlog
