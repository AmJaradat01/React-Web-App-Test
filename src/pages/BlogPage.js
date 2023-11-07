import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Card = styled.div`
  margin: 2rem;
  padding: 1rem;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const blogsResultsLimit = 12;

const BlogPage = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => {
            setPosts(response.data.slice(0, blogsResultsLimit));
          })
          .catch(error => {
            console.log(error);
            return (<div>
                <Card> <p>Something wrong while fetch the blogs data, please try again</p> </Card>
              </div>)
          });
      }, []);

      if (posts.length) {
        return (
            <div>
            {posts.map(post => (
              <Card key={post.id}>
                <a href="localhost:3000/"><h3>{post.title}</h3></a>
                <p>{post.body}</p>
              </Card>
            ))}
          </div>
        )
      }

      return (
        <div>
            <Card> <p>We don't have any Blogs for today, see you later!</p> </Card>
          </div>
      )
  }
  
export default BlogPage;
