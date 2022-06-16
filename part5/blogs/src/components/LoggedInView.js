import BlogForm from './BlogForm'
import Blog from './Blog'
import {Notification} from '../styles'

const LoggedInView = ({blogs, logout, user, successMessage, errorMessage, addBlog}) => {

    return (
    <div>
      {successMessage ? <Notification>{successMessage}</Notification> : <></>}
      {errorMessage ? <Notification error>{errorMessage}</Notification> : <></>}
      <h2>blogs</h2>
      <div>
        <h1>Welcome back {user.name}!</h1>
        <BlogForm addBlog={addBlog}></BlogForm>
      </div>      
        {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
        )}
      <button onClick={logout}>Log out</button>
    </div>
        
    )
}

export default LoggedInView