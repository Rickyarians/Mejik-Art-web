import AddArticle from '../../layouts/articles/add_article'

const props = {
  header:{
    isVisible: true,
    search : false,
    title: 'title',
    backgroundColor:'black',
    color:'white',
    rightButton : [
      {
        icon:'bell',
        onPress : () => alert('bell')
      },
      {
        icon:'book',
        onPress : () => alert('book')
      }
    ],

    avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbuNeEW2lfBZXzwIJmjrIKuAyr06I_g1pdeBVYZTVFQYXtLaxY", 
  },

  preview : true,
  defaultTitle : 'ora idol ora uwu',
  defaultValue : '# header 1'


}

export default () => (
  <AddArticle
    topNavigation = {props.header}
    preview = {props.preview}
    defaultValue = {props.defaultValue}
    defaultTitle = {props.defaultTitle}

  />
)