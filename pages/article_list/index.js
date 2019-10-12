import ArticleList from '../../layouts/articles/article_list'

const property = {
  header:{
    isVisible: true,
    title: 'article list',
    backgroundColor: 'red',
    search : true,
    rightButton : [
      {
        icon:'bell',
        onPress:() => alert('bell')
      },
      {
        icon:'book',
        onPress:() => alert('book')
      }
    ],

    avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbuNeEW2lfBZXzwIJmjrIKuAyr06I_g1pdeBVYZTVFQYXtLaxY", 
  },
  articles : [
    {
      title : 'Lets fight ghost',
      article : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      description : 'The easiest way to make sure your inter meal nibbling stays on track is to have ....',
      thumbnail : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwbMGnSV-aziYeFGjvHPC0vm1DdslZ_MMSxfs3oB4JO4czTV8s',
      author_name : 'Alexa Tenorio',
      author_avatar : 'https://www.arageek.com/wp-content/uploads/2017/09/Selena-Gomez-1.jpg',
      createdAt : 'Today 12:15 pm',
      comment : 78,
      like : 11
      
    },
    {
      title : 'rosario the vampire',
      article : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      description : 'The easiest way to make sure your inter meal nibbling stays on track is to have ....',
      thumbnail : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKyjZqu9iDA2wU_mbRLWAWzPzo0yOl9Q_AFMRbkHAbIBXLIp3F',
      author_name : 'Alexa Tenorio',
      author_avatar : 'https://www.arageek.com/wp-content/uploads/2017/09/Selena-Gomez-1.jpg',
      createdAt : 'Today 12:15 pm',
      comment : 78,
      like : 11
      
    },
    {
      title : 'How To Eat Healthy',
      article : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      description : 'The easiest way to make sure your inter meal nibbling stays on track is to have ....',
      thumbnail : 'https://c.ndtvimg.com/k03tb2a_healthy-food_625x300_17_August_18.jpg',
      author_name : 'Alexa Tenorio',
      author_avatar : 'https://www.arageek.com/wp-content/uploads/2017/09/Selena-Gomez-1.jpg',
      createdAt : 'Today 12:15 pm',
      comment : 78,
      like : 11
      
    },
    {
      title : 'How To Eat Healthy',
      article : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      description : 'The easiest way to make sure your inter meal nibbling stays on track is to have ....',
      thumbnail : 'https://c.ndtvimg.com/k03tb2a_healthy-food_625x300_17_August_18.jpg',
      author_name : 'Alexa Tenorio',
      author_avatar : 'https://www.arageek.com/wp-content/uploads/2017/09/Selena-Gomez-1.jpg',
      createdAt : 'Today 12:15 pm',
      comment : 78,
      like : 11
      
    },
    {
      title : 'Why Is The Workout Important ?',
      article : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      description : 'The easiest way to make sure your inter meal nibbling stays on track is to have ....',
      thumbnail : 'https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325881/a-man-who-is-experiencing-masturbation-before-a-workout.jpg',
      author_name : 'Isaac Hunt',
      // author_avatar : 'https://www.wowkeren.com/images/photo/john_legend.jpg',
      createdAt : 'Today 12:15 pm',
      comment : 100,
      like : 5
      
    }
  ],
  popularArticle : [
    {
      title : 'ora ngidol ora uwu',
      article : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      description : 'The easiest way to make sure your inter meal nibbling stays on track is to have ....',
      thumbnail : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTI_47vDtqXmFZIhTPRuOZldZb7PZaiLxX1oicrK5xChzE-2fjt',
      author_name : 'Alexa Tenorio',
      author_avatar : 'https://www.arageek.com/wp-content/uploads/2017/09/Selena-Gomez-1.jpg',
      createdAt : 'Today 12:15 pm',
      comment : 78,
      like : 11
      
    },
    {
      title : 'How To Eat Healthy',
      article : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      description : 'The easiest way to make sure your inter meal nibbling stays on track is to have ....',
      thumbnail : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQM-YTmNT9mvn3XgdBaj57mcuaKN7Je9Ps_PmSSHPNp43WBNsYL',
      author_name : 'Alexa Tenorio',
      author_avatar : 'https://www.arageek.com/wp-content/uploads/2017/09/Selena-Gomez-1.jpg',
      createdAt : 'Today 12:15 pm',
      comment : 78,
      like : 11
      
    },
  ],
  onPressArticle : () => alert('read article'),
  onPressLike : () => alert('like'),
  onPressComment : () => alert('comment')

}

export default () => (
  <ArticleList
    topNavigation={property.header}
    data={property.articles}
    popular={property.popularArticle}
    onPressArticle={property.onPressArticle}
    onPressLike={property.onPressLike}
    onPressComment={property.onPressComment}
  />
)