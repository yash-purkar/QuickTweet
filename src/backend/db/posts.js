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
      likedBy: [],
      dislikedBy: [],
    },
    username: "arjunrajput@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "amitshah@gmail.com",
        text: "Nice arjun👌🏻",
      },
      {
        _id: uuid(),
        username: "yashpurkar@gmail.com",
        text: "Great🎉",
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
