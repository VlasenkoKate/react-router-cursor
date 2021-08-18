import React from "react"
import './posts.css';
import Post from "./post/post"

const avatar1 = "https://pbs.twimg.com/profile_images/1393259395967078408/qbrUinsS_400x400.jpg"
const postpicture1 = "https://pbs.twimg.com/media/EsS7_nxVEAEBiL_?format=jpg&name=900x900"

const avatar2 = "https://pbs.twimg.com/profile_images/1299844050208555008/7wMQaJRA_400x400.jpg"
const postpicture2 = "https://pbs.twimg.com/media/Du6Iv_hW0AAdyFY?format=jpg&name=medium"

const avatar3 = "https://pbs.twimg.com/profile_images/1416443682157473795/dGtFbtht_400x400.jpg"
const postpicture3 = "https://pbs.twimg.com/media/DfRizWnU8AA7g7n?format=jpg&name=medium"

const posts = [
  {id: 1, 
  name: "Mark Hamill",
  avatar: avatar1,
  nickname: "@HamillHimsel",
  postText: "Do you have a favorite starwars/BernieSanders meme?",
  date: "Jan, 22",
  likes: "39K",
  postpicture: postpicture1,
  shares: "4.6K",
  comments: "1.2K"
  },
  {id: 2, 
    name: "Ryan Reynolds",
    avatar: avatar2,
    nickname: "@VancityReynolds",
    postText: "These assholes told me it was a sweater party.", 
    date: "Dec 21",
    likes: "1M",
    postpicture: postpicture2,
    shares: "191.7K",
    comments: "9.4K"
    },
    {id: 3, 
      name: "Elon Musk",
      avatar: avatar3,
      nickname: "@elonmusk",
      postText: "Nothing makes your baby more zen than a few gentle puffs of a TBC Flamethrower",
      date: "Jun 9",
      likes: "20.8K", 
      postpicture: postpicture3,
      shares: "2.4K",
      comments: "519"
      }
]

function Posts () {
  return (
    <div className="wrapper_posts">
      {posts.map(post => (<Post post={post} key={post.id} />))}
    </div>
  );
}

export default Posts;
