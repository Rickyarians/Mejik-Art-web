import Head from 'next/head'
import React,{useState,useEffect} from 'react'
import {Icon,Input, Avatar} from 'antd'
import '../../../public/assets/styles/article_list.less'


function ArticleList(props){
  return (
        
    
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      {/* Header */}
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
      

      <div className="bodyContainer">

        {/* article list */}
        <div className="listArticle">
          <h1>Newest</h1>
        {
          props.data.map((article,i) => (

            <div key={i.toString()} onClick={props.onPressArticle} className="articleCard">
                <div className="articleThumbnail">
                  <img className="articleThumbnail" src={article.thumbnail}/>
                </div>
                <div className="cardBody">
                  <div className="cardContent">
                    <h2>{article.title}</h2>
                    <span className="description">{article.description}</span>
                  </div>
                  <div className="cardFooter">

                    <span className="author">
                      {
                        article.author_avatar ? ( <Avatar src={article.author_avatar} />) : <Avatar icon="user" />
                      }
                      <span className="authorName">
                        <div>{article.author_name}</div>
                        <div>{article.createdAt}</div>
                      </span>
                 
                    </span>

                    <span className="reaction">
                      <Icon onClick={props.onPressLike} className="reactionIcon" type="heart" />
                      <Icon onClick={props.onPressComment} className="reactionIcon" type="message" />
                    </span>
                    
                  </div>
                  
                </div>
            </div>

          ))
        }
        </div>

        {/* popular article */}
        <div className="popular">
          <h1>Popular</h1>
        {
          props.popular.map((article,i) => (

            <div key={i} onClick={props.onPressArticle} className="popularCard">
                <div className="popularThumbnail">
                  <img className="popularThumbnail" src={article.thumbnail}/>
                </div>
                <div className="popularCardBody">
                  <div className="cardContent">
                    <h2>{article.title}</h2>
                    <span className="description">{article.description}</span>
                  </div>
                  <div className="popularCardFooter">

                    <span className="author">
                      {
                        article.author_avatar ? ( <Avatar className="avatar" src={article.author_avatar} />) : <Avatar className="avatar" icon="user" />
                      }
                      <span className="authorName">
                        <div>{article.author_name}</div>
                        <div>{article.createdAt}</div>
                      </span>
                 
                    </span>

                    <span className="reaction">
                      <Icon onClick={() => alert('wow')} className="reactionIcon" type="heart" />
                      <Icon onClick={() => alert('tets')} className="reactionIcon" type="message" />
                    </span>
                    
                  </div>
                  
                </div>
            </div>

          ))
        }
        </div>
        
        
        
        
        

      </div>


    </React.Fragment>

      
)
}

export default ArticleList