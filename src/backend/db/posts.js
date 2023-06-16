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
        text: "Nice👌🏻",
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    username: "yashpurkar@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "amitshah@gmail.com",
        text: "WOW🔥"
      },
      {
        _id: uuid(),
        username: "akshaykumar@gmail.com",
        text: "AWESOME🎉"
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    username: "arjunrajput@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "johndoe@gmail.com",
        text: "Great post!"
      },
      {
        _id: uuid(),
        username: "viratkohli@gmail.com",
        text: "I love it!"
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    username: "yashpurkar@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "mahidhoni@gmail.com",
        text: "Amazing!"
      },
      {
        _id: uuid(),
        username: "emmasmith@gmail.com",
        text: "Well said."
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    username: "akshaykumar@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "emmasmith@gmail.com",
        text: "Impressive!"
      },
      {
        _id: uuid(),
        username: "johndoe@gmail.com",
        text: "Bravo!"
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    username: "emmasmith@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "yashpurkar@gmail.com",
        text: "Well done!"
      },
      {
        _id: uuid(),
        username: "amitshah@gmail.com",
        text: "I'm impressed!"
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Et harum quidem rerum facilis est et expedita distinctio.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    username: "viratkohli@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "mahidhoni@gmail.com",
        text: "Fantastic!"
      },
      {
        _id: uuid(),
        username: "emmasmith@gmail.com",
        text: "Love it!"
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    username: "johndoe@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "amitshah@gmail.com",
        text: "Absolutely!"
      },
      {
        _id: uuid(),
        username: "emmasmith@gmail.com",
        text: "Well articulated!"
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    username: "mahidhoni@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "yashpurkar@gmail.com",
        text: "You nailed it!"
      },
      {
        _id: uuid(),
        username: "commenter14@gmail.com",
        text: "arjunrajput@gmail.com"
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    username: "yashpurkar@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "arjunrajput@gmail.com",
        text: "Well stated!"
      },
      {
        _id: uuid(),
        username: "viratkohli@gmail.com",
        text: "Great job!"
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    username: "arjunrajput@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "yashpurkar@gmail.com",
        text: "Amazing post!"
      },
      {
        _id: uuid(),
        username: "amitshah@gmail.com",
        text: "I agree!"
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    username: "amitshah@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "arjunrajput@gmail.com",
        text: "yashpurkar@gmail.com"
      },
      {
        _id: uuid(),
        username: "commenter20@gmail.com",
        text: "Bravo!"
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    username: "viratkohli@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "amitshah@gmail.com",
        text: "Impressive!"
      },
      {
        _id: uuid(),
        username: "arjunrajput@gmail.com",
        text: "Bravo!"
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    username: "akshaykumar@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "viratkohli@gmail.com",
        text: "Well done!"
      },
      {
        _id: uuid(),
        username: "yashpurkar@gmail.com",
        text: "I'm impressed!"
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Et harum quidem rerum facilis est et expedita distinctio.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    username: "mahidhoni@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "akshaykumar@gmail.com",
        text: "Fantastic!"
      },
      {
        _id: uuid(),
        username: "viratkohli@gmail.com",
        text: "Love it!"
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    username: "johndoe@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "mahidhoni@gmail.com",
        text: "Absolutely!"
      },
      {
        _id: uuid(),
        username: "akshaykumar@gmail.com",
        text: "Well articulated!"
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    username: "emmasmith@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "johndoe@gmail.com",
        text: "You nailed it!"
      },
      {
        _id: uuid(),
        username: "mahidhoni@gmail.com",
        text: "Impressive work!"
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate()
  }

];
