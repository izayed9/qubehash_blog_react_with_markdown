import React from 'react';
import { format } from 'fecha';
import { Tag } from './Tag';
import { PostData } from '../model/PostData';
import Link from 'next/link';
import ReadmoreBtn from './readmore-button';
import styles from '../styles/Postcard.module.scss';

export const PostCard: React.FC<{ post: PostData }> = (props) => {
  const post = props.post;

  return (
      <Link href={`/${post.path}`}>
        <div className={styles.card}>
            <img src={post.thumbnailPhoto} alt={post.title} />
            <h5> {props.post.datePublished ? format(new Date(props.post.datePublished), 'MMMM Do, YYYY') : ''} </h5>
            <h3>{post.title}</h3>
            <p>{props.post.description}</p>
           <ReadmoreBtn />
           {false && ( <div className="tag-container"> {post.tags && (post.tags || []).map((tag) => <Tag tag={tag} />)} </div> )}
         </div>
        </Link>
  );
};
