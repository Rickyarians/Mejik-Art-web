import React from 'react'
import {Avatar, Input, Icon} from 'antd'
import '../public/assets/styles/top_navigation.less'
export default function TopNavigation(props){
  return (
    <React.Fragment>
      {
        props.isVisible == true ? (

          <nav className="header" style={{backgroundColor:props.backgroundColor}}>
            <div className="rightButtonContainer">
              {
                props.logo ? <Avatar src={props.logo}/> : null

              }
              <span className="headerTitle" style={{color:props.color}}>{props.title}</span>
            </div>
                        
            <div className="rightButtonContainer">
              {
                props.search ? ( <Input.Search style={{width: '50%'}}/> ) : null
              }

              <span>
                {
                  Array.isArray(props.rightButton) && props.rightButton.map((button,i) => (
                    
                      <Icon
                        className="rightButton"
                        type={`${button.icon}`}
                        style={{color:props.color,fontSize:25,marginRight:20}} key={i}
                        onClick={button.onPress}
                      />
                    
                  )) || null
                }  
                
              </span>

                {
                  props.avatar ? ( <Avatar src={props.avatar} />) : null
                }
              
            </div>
            
          </nav>

        ) : null
      }
    </React.Fragment>
  )
}