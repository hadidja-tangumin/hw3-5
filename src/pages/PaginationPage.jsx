import {useState, useEffect} from 'react'
import axios from 'axios'
import { useSearchParams, Link } from 'react-router-dom'

const PaginationPage = () => {
    const [post, setPost] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        if(!searchParams.get("page")) return
        const fetchrequest = async () => {
        const skipPage = (searchParams.get("page") -1) *10
        const request = await axios.get(`https://dummyjson.com/posts?limit=10&skip=${skipPage}`)
        setPost(request.data.posts)
        }
        fetchrequest()
    }, [searchParams])

  return (
    <>
    <div className="big_block">
        <ol className='list'>
        {[1, 2, 3, 4, 5].map((pageId) => (
            <li key={pageId}  onClick={() => setSearchParams({page: pageId})}>
                {pageId}
            </li>
        ))}
        </ol>
        <ul className="list_ul">
        {post.map((getItem) => (
            <li className="list_li" key={getItem.id}>
                <Link className="link" to={`/posts/${getItem.id}`}>{getItem.id} {getItem.title}</Link>
            </li>
        ))}
        </ul>
    </div>
    </>
  )
}

export default PaginationPage
