import React,{useState,useEffect} from 'react'

import {Input,Icon,Avatar} from 'antd'
import TopNavigation from '../../../components/TopNavigation'

const ReactMarkdown = require('react-markdown')
import '../../../public/assets/styles/article.less'



export default function Article(props){
  console.log(props.data)
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