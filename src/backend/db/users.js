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
    profile_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4BqaiKMRdXXKaozTUZToGKHZj0LV-qlt7bTpuuVRN5A&usqp=CAU&ec=48665699",
    userHandler: "yash_02",
    password: "100",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: []
  },
  {
    _id: uuid(),
    firstName: "Arjun",
    lastName: "Rajput",
    username: "arjunrajput@gmail.com",
    profile_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4BqaiKMRdXXKaozTUZToGKHZj0LV-qlt7bTpuuVRN5A&usqp=CAU&ec=48665699",
    userHandler: "arjun28",
    password: "100",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: []
  },
  {
    _id: uuid(),
    firstName: "Amit",
    lastName: "Shah",
    username: "amitshah@gmail.com",
    profile_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4BqaiKMRdXXKaozTUZToGKHZj0LV-qlt7bTpuuVRN5A&usqp=CAU&ec=48665699",
    userHandler: "amit_23",
    password: "100",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: []
  },
  {
    _id: uuid(),
    firstName: "Virat",
    lastName: "Kohli",
    username: "viratkohli@gmail.com",
    profile_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4BqaiKMRdXXKaozTUZToGKHZj0LV-qlt7bTpuuVRN5A&usqp=CAU&ec=48665699",
    userHandler: "virat22",
    password: "100",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: []
  },
  {
    _id: uuid(),
    firstName: "Akshay",
    lastName: "Kumar",
    username: "akshaykumar@gmail.com",
    profile_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4BqaiKMRdXXKaozTUZToGKHZj0LV-qlt7bTpuuVRN5A&usqp=CAU&ec=48665699",
    userHandler: "akshay_11",
    password: "100",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: []
  },
];
