import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),

    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "yashpurkar@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "amitshah@gmail.com",
        text: "WOW🔥",
      },
      {
        _id: uuid(),
        username: "akshaykumar@gmail.com",
        text: "AWESOME🎉",
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    likes: {
      likeCount: 0,
      likedBy: [{
        _id: uuid(),
        firstName: "Arjun",
        lastName: "Rajput",
        username: "arjunrajput@gmail.com",
        profile_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4BqaiKMRdXXKaozTUZToGKHZj0LV-qlt7bTpuuVRN5A&usqp=CAU&ec=48665699",
        userHandler: "arjun28",
        password: "100",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        bookmarks: []
      }],
      dislikedBy: [],
    },
    username: "arjunrajput@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "amitshah@gmail.com",
        text: "Nice👌🏻",
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
