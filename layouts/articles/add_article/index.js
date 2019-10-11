import React,{useState,useEffect} from 'react'
import {Input,Icon,Avatar,} from 'antd'
import '../../../public/assets/styles/add_article.less'
const ReactMarkdown = require('react-markdown')

// cheatsheet
// https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#images

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

}


export default function AddArticle(props){

  
  const [title, setTitle ] = useState('')
  const [article, setArticle ] = useState('')
  const [preview, setPreview ] = useState(false)

  return (
    <React.Fragment className="root">
      <nav className="header" style={{backgroundColor:property.header.backgroundColor}}>
        <h1 style={{color:property.header.color}}> Add article </h1>
        
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
                    onClick={() => setPreview(!preview)}
                  />
                
              ))
            }  
            
          </span>

            {
              property.header.avatar ? ( <Avatar src={property.header.avatar} />) : (<Avatar icon="user" />)
            }
          
        </div>
      </nav>

      <div className="bodyContainer">

      {
        preview ? (<div className="previewBody"><ReactMarkdown className="article" escapeHtml={false} source={article}></ReactMarkdown></div>) : ( 

          
            <div className="form">
              <input onChange={ e => setTitle(e.target.value)} type="text" className="title" placeholder="title"/>
              <textarea onChange={ e => setArticle(e.target.value)} type="text" className="article" value={article} placeholder="write your story"/>
            </div>
              
         
        )
      }
      </div>


      
    </React.Fragment>
  )
}