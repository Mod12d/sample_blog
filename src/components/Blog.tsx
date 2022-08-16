import type { NextPage } from 'next'
import Link from "next/link"
import Image from 'next/image'
import styles from '@/styles/Blog.module.scss'
import logo from '@/images/header/dark_mode.svg' 
import { useState } from 'react'

type blog = {
  id?: number;
  title?: string;
  content?: string;
  timestamp?: string;
}

const Blog: NextPage = () => {
  const count = 6
  // mock data
  const contentList:blog[] = []
  const title = "This is a header";
  const content = "Amet Minim mollit non deserunt ullamaco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit"
  const timestamp ="2022.07.11"
  for(let i = 0; i < count; i++) {
    contentList.push({id:(i+1), title:title,content:content,timestamp:timestamp})
  }

  const loadMorePosts = () => {
 };
  return (
    <div className={styles.container} >
      <h3 >
        Blog
      </h3>
      <hr/>
      <div className={styles.blogList}>
       {contentList.map((todo) => {
          return (
            
            <a className="blog" key={todo.id}>
                <h4 className="title">{todo.title}</h4>
                <text className="content">{todo.content}</text>
                <p className="timestamp">{todo.timestamp}</p>
              </a>
           
          );
        })}
    </div>

  </div>
  )
}

export default Blog
