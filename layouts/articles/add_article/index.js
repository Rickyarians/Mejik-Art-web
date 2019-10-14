import React,{useState,useEffect} from 'react'
import {Input,Icon,Avatar,} from 'antd'
import '../../../public/assets/styles/add_article.less'
import TopNavigation from '../../../components/TopNavigation'
const ReactMarkdown = require('react-markdown')

// cheatsheet
// https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#images



export default function AddArticle(props){

  
  const [title, setTitle ] = useState(props.defaultTitle)
  const [article, setArticle ] = useState(props.defaultValue)
    return (
    <React.Fragment>

      {
        props.topNavigation && (
          <TopNavigation
            isVisible={props.topNavigation.isVisible}
            logo={props.topNavigation.logo}
            title={props.topNavigation.title}
            rightButton={props.topNavigation.rightButton}  
            avatar={props.topNavigation.avatar}
            search={props.topNavigation.search}
            color={props.topNavigation.color}
            backgroundColor={props.topNavigation.backgroundColor}
          />

        )
      }
      

      <div className="bodyContainer">

      {
        props.preview ? (<div className="previewBody"><ReactMarkdown className="article" escapeHtml={false} source={article}></ReactMarkdown></div>) : ( 

          
            <div className="form">
              <input onChange={ e => setTitle(e.target.value)} value={title} type="text" className="title" placeholder="title"/>
              <textarea onChange={ e => setArticle(e.target.value)} type="text" className="article" value={article} placeholder="write your story"/>
            </div>
              
         
        )
      }
      </div>


      
    </React.Fragment>
  )
}