import Head from 'next/head';
import { useState } from 'react';
import { BlogPost } from '../components/BlogPost';
import MotointroContent from '../components/moto-intro-content';
import Pagination from '../components/pagination';
import { PostCard } from '../components/PostCard';
import RelatedPost from '../components/RelatedPost';
import { PostData } from '../model/PostData';
import { loadBlogPosts } from '../utils/loader';
import { generateRSS } from '../utils/rssUtil';


const Home = (props: { readme: string; posts: PostData[]; }) => {
  const [page, setPage] = useState(1);
  const [totalPages,] = useState(2);
  const post = props.posts[0]

  const indexOfLastPost = page * totalPages;
  const indexOfFirstPost = indexOfLastPost - totalPages;
  const currentPosts = props.posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePrevPage = (_prevPage: number) => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = (_nextPage: number) => {
    setPage((nextPage) => nextPage + 1);
  };


  return (
    <>
      <Head>
        <title>Introducing My Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MotointroContent/>
      <div className='blog-post'>
          <BlogPost post={post} />
      </div>
      <h2>Popular Blog</h2>
      <div className="popular-blog">
        <div className="post-cards">
          {currentPosts.map((post, j) => { return <PostCard post={post} key={j} />; })}
          <div className="pagination">
          <Pagination
             totalPages={totalPages}
             currentPage={page}
             handlePrevPage={handlePrevPage}
             handleNextPage={handleNextPage}
          />
          </div>
        </div>
        <div className='asid-post'>
          <RelatedPost />
        </div>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const readmeFile = await import(`../${'README.md'}`);
  const readme = readmeFile.default;
  const posts = await loadBlogPosts();
  await generateRSS(posts);
  const props = {
    readme: readme,
    posts,
  };
  return { props };
};
