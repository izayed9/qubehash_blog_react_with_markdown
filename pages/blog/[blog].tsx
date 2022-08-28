import React from 'react';
import Link from 'next/link';
import {marked} from 'marked';
import { loadPost } from '../../utils/loader';
import glob from 'glob';
import { FcHome } from 'react-icons/fc';
import { TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti';
import styles from '../../styles/blog-page.module.scss';

const Post =(props: any)=> {
  const { title, date, content } = props.post;
  console.log(content)
  return (
    <>
      <div className={styles.blogTitleWraper}>
          <div className={styles.homeBreadcram}>
            <Link href='/'>
                <a><FcHome />Home</a>
            </Link>
            <span>/</span>
            <p>{title}</p>
          </div>
          <h1>{title}</h1>
          <p className='post-date'>Posted by : {title} {date}</p>
          <hr></hr>
          <div className={styles.blogSocailShare}>
            <div className="social-icons">
              <p>Share this news on:</p>
              <Link href='/'>
                <a><TiSocialTwitter /></a>
              </Link>
              <Link href='/'>
                <a><TiSocialLinkedin /></a>
            </Link>
            <Link href='/'>
              <a><TiSocialInstagram /></a>
            </Link>
            </div>
            <p>2 min Read</p>
          </div>
      </div>
    <div className='blogpost-body'>
      <div className='post-body'>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </div>
    </div>
  </>
  );
}

export const getStaticPaths = () => {
  const blogs = glob.sync('./md/blog/*.md');
  const slugs = blogs.map((file: string) => {
    const popped = file.split('/').pop();
    if (!popped) throw new Error(`Invalid blog path: ${file}`);
    return popped.slice(0, -3).trim();
  });

  const paths = slugs.map((slug) => `/blog/${slug}`);
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: any) => {
  const post = await loadPost(`blog/${params.blog}.md`);
  return { props: { post } };
};

export default Post;
