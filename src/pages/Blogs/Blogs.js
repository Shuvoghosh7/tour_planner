import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css'
import BlogsCard from './BlogsCard';
const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    console.log(blogs)
    useEffect(() => {
        fetch('/Blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='blogs'>
            <p>Recent Blog Posts</p>
            <small>Latin literature from 45 BC, making it over 2000 years old</small>

            <div className='blog-card'>
                {
                    blogs?.slice(Math.max(blogs.length - 3, 1)).map(blog =>
                        <BlogsCard
                            blog={blog}
                        />
                    )

                }
            </div>
        </div>
    );
};

export default Blogs;