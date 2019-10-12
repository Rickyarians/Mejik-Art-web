import React,{useState,useEffect} from 'react'
import {Input,Icon,Avatar,} from 'antd'
import '../../../public/assets/styles/add_article.less'
const ReactMarkdown = require('react-markdown')

// cheatsheet
// https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#images



export default function AddArticle(props){

  
  const [title, setTitle ] = useState(props.defaultTitle)
  const [article, setArticle ] = useState(props.defaultValue)
  

  return (
    <React.Fragment className="root">
      {
        props.topNavigation.isVisible == true ? (

          <nav className="header">
            <h1> {props.topNavigation.title} </h1>
            
            <div className="rightButtonContainer">
              {
                props.topNavigation.search ? ( <Input.Search style={{width: '50%'}}/> ) : null
              }

              <span>
                {
                  Array.isArray(props.topNavigation.rightButton) && props.topNavigation.rightButton.map((button,i) => (
                    
                      <Icon
                        className="rightButton"
                        type={`${button.icon}`}
                        style={{color:'white',fontSize:25,marginRight:20}} key={i}
                        onClick={button.onPress}
                      />
                    
                  )) || null
                }  
                
              </span>

                {
                  props.topNavigation.avatar ? ( <Avatar onClick={() => setPr} src={props.topNavigation.avatar} />) : null
                }
              
            </div>
            
          </nav>

        ) : null
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