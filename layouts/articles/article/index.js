import React,{useState,useEffect} from 'react'
import {Input,Icon,Avatar} from 'antd'
const ReactMarkdown = require('react-markdown')
import '../../../public/assets/styles/article.less'



export default function Article(props){
  console.log(props.data)
  return (
    <React.Fragment>
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
                  props.topNavigation.avatar ? ( <Avatar src={props.topNavigation.avatar} />) : null
                }
              
            </div>
            
          </nav>

        ) : null
      }

      <div className="body">

        <div className="articleHeader">
          <h1>{props.data.title || null}</h1>
          {/* <h3>{props.data.subtitle}</h3> */}
        </div>

        <div className="article">
          <ReactMarkdown source={props.data.article || null}></ReactMarkdown>
        </div>
        <div className="cardFooter">

          <span className="author">
            {
              props.data.author_avatar ? ( <Avatar src={props.data.author_avatar} />) : null
            }
            <span className="authorName">
              <div>{props.data.author_name || null}</div>
              <div>{props.data.createdAt || null}</div>
            </span>

          </span>

          <span className="reaction">
            <Icon onClick={props.onPressLike} className="reactionIcon" type="heart" />
            <Icon onClick={props.onPressComment} className="reactionIcon" type="message" />
          </span>

        </div>
      </div>
    </React.Fragment>
  )
}