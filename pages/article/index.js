import Article from '../../layouts/articles/article'


const articleProps = {
  header:{
    title : 'article',
    isVisible: true,
    // search : true,
    backgroundColor:'gray',
    color:'white',
    rightButton : [
      {
        icon:'bell',
        onPress: () => alert('icon bell pressed')
      },
      {
        icon:'book',
        onPress: () => alert('icon book pressed')
      }
    ],

    avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbuNeEW2lfBZXzwIJmjrIKuAyr06I_g1pdeBVYZTVFQYXtLaxY", 
  },
  data : {

    title : 'ora idol ora uwu',
    article : '![alt image](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTI_47vDtqXmFZIhTPRuOZldZb7PZaiLxX1oicrK5xChzE-2fjt)\n\n\n# header level 1\nLorem ipsum dolor sit amet, consectetur adipiscing elit,\nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\nquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n> nothing last forever , we can change the future\n\nThis is a bold text\nThis is italic text\n\n[test link](http://google.com)\n\n* Easy to use\n* Looks good by default\n* Is extensible',
    author_name : 'Alexa Tenorio',
    author_avatar : 'https://www.arageek.com/wp-content/uploads/2017/09/Selena-Gomez-1.jpg',
    createdAt : 'Today 12:15 pm',
  },
  onPressLike : () => alert('like'),
  onPressComment : () => alert('comment')

}



export default () => (
  <Article
    topNavigation={articleProps.header}
    data={articleProps.data}
    onPressLike={articleProps.onPressLike}
    onPressComment={articleProps.onPressComment}
  />
)
