import React from "react";
import { SinglePost } from "../../Components/SinglePost/SinglePost";
import "./Bookmark.css";
import { UseData } from "../../Contexts/DataContext";
import { useEffect } from "react";

export const Bookmark = () => {
  const {
    dataState: { posts, users },
    isDarkMode,
    setIsLoading,
  } = UseData();

  // Getting user from localstorage
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));

  // Getting loggedInUser from users again, bcz if anything updates it is not updating in localstorage.
  const loggedInUser = users?.find((el) => el.username === socialUser.username);

  // Getting bookmark posts of loggedInUser.
  const bookmarkPosts = posts?.filter((post) =>
    loggedInUser.bookmarks.includes(post._id)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  }, []);

  return (
    <div className="bookmarks-container">
      <h2
        className={`bookmarke-heading text-center letter-spacing-1 ${
          isDarkMode && "color-white"
        }`}
      >
        {bookmarkPosts.length > 0 ? "Bookmarked" : "No Bookmarks Yet"}
      </h2>
      {bookmarkPosts?.map((post) => (
        <SinglePost key={post._id} post={post} />
      ))}
    </div>
  );
};
