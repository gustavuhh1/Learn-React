/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Comment } from './Comment'
import style from './Post.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

export function Post({ author, publishedAt, content}) {
    const [comments, setComments] = useState([
        "Post muito bacana, heim?!"
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,

    })

    function handleCreateNewComment() {
        event.preventDefault()


        setComments([...comments, newCommentText]);  
        
        setNewCommentText("");
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
        
        
    }

    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar hasBorder src={author.avatarUrl}/>
                 
                    <div className={style.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={style.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {

                        return [<p>{line.content}</p>];
                    } else if (line.type === 'link') {
                        return <p><a href="#">{line.content}</a></p>
                    }})
                }
            </div>
            <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    placeholder='Deixe um comentário'
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
                
            </form>

            <div className={style.commentList}>
                {comments.map(comment => {
                    return <Comment content={comment}/>
                })}
            </div>
        </article>
    )
}