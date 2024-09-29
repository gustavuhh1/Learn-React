/* eslint-disable react/jsx-key */
// JSX = Javascript + XML (HTML)
import { Post } from "./components/Post.jsx";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gustavuhh1.png',
      name: 'Gustavo Martins',
      role: 'Estágiario TI'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa, O salomão foi promovido a Analista de TI e so faz merda', },
      { type: 'paragraph', content: 'Fala galeraa,', },
      { type: 'link', content: 'jane.design/doctorcare,', },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/elishowbr.png',
      name: 'Elisson Victor',
      role: 'Monitor Dev'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa,', },
      { type: 'paragraph', content: 'Fala galeraa,', },
      { type: 'link', content: 'jane.design/doctorcare,', },
    ],
    publishedAt: new Date('2024-09-12 20:00:00'),
  }
]



export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (<Post
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />)


          })}
        </main>
      </div>
    </div>
  )
}


