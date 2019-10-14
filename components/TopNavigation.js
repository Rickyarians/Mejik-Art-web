import React from 'react'
import {Avatar, Input, Icon} from 'antd'
import '../public/assets/styles/top_navigation.less'
export default function TopNavigation(props){
  return (
    <React.Fragment>
      {
        props.topNavigation.isVisible == true ? (

          <nav className="header">
            <div className="rightButtonContainer">
              {
                props.topNavigation.logo ? <Avatar src={props.topNavigation.logo}/> : null

              }
              <span className="headerTitle">{props.topNavigation.title}</span>
            </div>
                        
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
    </React.Fragment>
  )
}