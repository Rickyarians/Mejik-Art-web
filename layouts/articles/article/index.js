import React,{useState,useEffect} from 'react'
import {Input,Icon,Avatar} from 'antd'
import '../../../public/assets/styles/article.less'

const property = {
  header:{
    isVisible: false,
    search : true,
    backgroundColor:'black',
    color:'white',
    rightButton : [
      {
        icon:'bell',
        // onPress: alert('wow')
      },
      {
        icon:'book',
        // onPress: alert('wow')
      }
    ],

    avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbuNeEW2lfBZXzwIJmjrIKuAyr06I_g1pdeBVYZTVFQYXtLaxY", 
  },
  data : {

    title : 'How To Eat Healthy',
    subtitle : 'just 10 tips',
    description : 'The easiest way to make sure your inter meal nibbling stays on track is to have',
    article : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    thumbnail : 'https://blog.myfitnesspal.com/wp-content/uploads/2018/01/UACF_EG_Hero_NoBadge_Healthy-Eating-752x472.jpg',
    author_name : 'Alexa Tenorio',
    author_avatar : 'https://www.arageek.com/wp-content/uploads/2017/09/Selena-Gomez-1.jpg',
    createdAt : 'Today 12:15 pm',
    comment : 78,
    like : 11
      
  },

}


export default function Article(props){
  return (
    <React.Fragment>
      <nav className="header" style={{backgroundColor:property.header.backgroundColor}}>
        <h1 style={{color:property.header.color}}> Article List </h1>
        
        <div className="rightButtonContainer">
          {
            property.header.search ? ( <Input.Search style={{width: '50%'}}/> ) : null
          }

          <span>
            {
              property.header.rightButton.map((button,i) => (
                
                  <Icon
                    className="rightButton"
                    type={`${button.icon}`}
                    style={{color:property.header.color,fontSize:25,marginRight:20}} key={i}
                    onClick={() => alert('test')}
                  />
                
              ))
            }  
            
          </span>

            {
              property.header.avatar ? ( <Avatar src={property.header.avatar} />) : (<Avatar icon="user" />)
            }
          
        </div>
      </nav>

      <div className="body">

        <div className="articleHeader">
          <h1>{property.data.title}</h1>
          {/* <h3>{property.data.subtitle}</h3> */}
        </div>

        <div className="thumbnail">
            <img src={property.data.thumbnail}/>
        </div>

        <div className="article">
          {property.data.article}
        </div>
        <div className="cardFooter">

          <span className="author">
            {
              property.data.author_avatar ? ( <Avatar src={property.data.author_avatar} />) : <Avatar icon="user" />
            }
            <span className="authorName">
              <div>{property.data.author_name}</div>
              <div>{property.data.createdAt}</div>
            </span>

          </span>

          <span className="reaction">
            <Icon onClick={() => alert('wow')} className="reactionIcon" type="heart" />
            <Icon onClick={() => alert('tets')} className="reactionIcon" type="message" />
          </span>

        </div>
      </div>
    </React.Fragment>
  )
}