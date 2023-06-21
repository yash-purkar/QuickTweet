import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Yash",
    lastName: "Purkar",
    username: "yashpurkar@gmail.com",
    profile_photo: "https://i.ibb.co/VSjR9js/IMG-1918-01.jpg",
    userHandler: "yash_purkar",
    password: "100",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: [],
    link: "https://yashpurkar-portfolio.netlify.app/",
    bio: "Aspiring Web Developer"
  },
  {
    _id: uuid(),
    firstName: "Scarlett",
    lastName: "Rivers",
    username: "scarlettrivers@gmail.com",
    profile_photo: "https://images.unsplash.com/photo-1560759226-14da22a643ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGFyayUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    userHandler: "CrimsonTide",
    password: "100",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: [],
    link: "https://yashpurkar-portfolio.netlify.app/",
    bio: "Nature enthusiast | Coffee addict | Wanderer"
  },
  {
    _id: uuid(),
    firstName: "Luna",
    lastName: "Shade",
    username: "lunashade@gmail.com",
    profile_photo: "https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRyZWFtZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    userHandler: "LunaDremer",
    password: "100",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: [],
    link: "https://yashpurkar-portfolio.netlify.app/",
    bio: "Dreamer | Moonchild | Artist"
  },
  {
    _id: uuid(),
    firstName: "Max",
    lastName: "Shadow",
    username: "maxshasow@gmail.com",
    profile_photo: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    userHandler: "CyberNinja",
    password: "100",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: [],
    link: "https://yashpurkar-portfolio.netlify.app/",
    bio: "Tech geek | Gaming enthusiast | Future coder"
  },
  {
    _id: uuid(),
    firstName: "Stella",
    lastName: "Celeste",
    username: "stellaceleste@gmail.com",
    profile_photo: "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXN0cm9ub215fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    userHandler: "StarGazer",
    password: "100",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: [],
    link: "https://yashpurkar-portfolio.netlify.app/",
    bio: "Astronomy lover | Star seeker | Science nerd"
  },
  {
    _id: uuid(),
    firstName: "Crystal",
    lastName: "Waters",
    username: "crystalwaters@gmail.com",
    profile_photo: "https://images.unsplash.com/photo-1607301614848-2341363f5f48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    userHandler: "SapphireScribe",
    password: "100",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: [],
    link: "https://yashpurkar-portfolio.netlify.app/",
    bio: "Writer | Poet | Lover of words"
  },
  {
    _id: uuid(),
    firstName: "Blaze",
    lastName: "Summers",
    username: "blazesummers@gmail.com",
    profile_photo: "https://images.unsplash.com/photo-1547469447-4afec158715b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    userHandler: "Wildfire",
    password: "abc123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: [],
    link: "https://yashpurkar-portfolio.netlify.app/",
    bio: "Adventure seeker | Fire dancer | Free spirit"
  }
  ,
  {
    _id: uuid(),
    firstName: "Phoenix",
    lastName: "Wright",
    username: "phoenixwright@gmail.com",
    profile_photo: "https://images.unsplash.com/photo-1604684116250-e79276b241fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3Rvcnl0ZWxsZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    userHandler: "MysticScribe",
    password: "pass123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: [],
    link: "https://yashpurkar-portfolio.netlify.app/",
    bio: "Seeker of ancient knowledge | Storyteller | Occult enthusiast"
  }

];
