import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Card = styled.div`
  margin: 2rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid ${(props) => props.theme.spinnerColor};
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
const StyledLink = styled.a`
  color: ${(props) => props.theme.linkColor};
`;

const blogsResultsLimit = 12;

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

        const shuffledPosts = response.data.sort(() => 0.5 - Math.random()).slice(0, blogsResultsLimit);

        setPosts(shuffledPosts);
        } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) return ( <SpinnerContainer> <Spinner /> </SpinnerContainer> )
  if (error) return ( <div> <Card> <p>Something wrong while fetching the blogs data, please try again</p> </Card> </div> )

  if (posts.length) {
    return (
      <div>
        {posts.map(post => (
          <Card key={post.id}>
            <StyledLink href="localhost:3000/"><h3>{post.title}</h3></StyledLink>
            <p>{post.body}</p>
          </Card>
        ))}
      </div>
    )
  } else {
    return (
      <div>
        <Card> <p>We don't have any Blogs for today, see you later!</p> </Card>
      </div>
    )
  }
}

export default BlogPage;