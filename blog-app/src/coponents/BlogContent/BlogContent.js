import "./BlogContent.css"
import {posts} from "../../shered/projectData";
import {getAmountOfPosts} from "../../shered/projectlogic";

export const BlogContent = () => {

    const blogPosts = posts.map((item) => {
        return (
            <div key={item.id} className="post">

                <h2>{item.title}</h2>

                {item.description}
            </div>)
    })

    return (
        <>
            <h1>Sklianik Maksim Blog</h1>
            <div clas="posts">
                {blogPosts}
            </div>

            <div className='count'>
                <button onClick={() => (getAmountOfPosts(posts))}> Get amout posts</button>
            </div>
        </>
    )
}