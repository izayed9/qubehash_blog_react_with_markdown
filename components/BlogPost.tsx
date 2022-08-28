import React from 'react';
import { PostData } from '../model/PostData';
import styles from '../styles/Blogpost.module.scss';
import PostcardSocialLinks from './postcard-social-link';

export const BlogPost: React.FunctionComponent<{ post: PostData }> = ({
  post,
}) => {

  return (
    <div className={styles.bloger}>
        <div className={styles.profile}>
           <img src='./img/demoprofile.jpg' alt="" />
        </div>
        <div className={styles.content}>
            <h2>{post.title}</h2>
            {post.subtitle && <h2>{post.subtitle}</h2>}
            <h3>9 posts</h3>
          <p>Kevin is a software engineer, blog writer and part-time basketball player. He frequently publishes articles about coding tutorials and techniques. He secretly hopes that you enjoy reading it :p</p>
          <PostcardSocialLinks />
        </div>
      </div>
  );
};
