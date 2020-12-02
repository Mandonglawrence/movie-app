import React, { useState, useContext } from "react";
import { UserData, useUser } from "./../Login/UserData";

export default function CommentForm({ filmId, setComments, comments }) {
  const [userInfo, SetUserInfo] = useUser();

  const [inputData, setInputData] = useState("");
  const [userError, setUserError] = useState("hideError");
  const [commentError, setCommentError] = useState("hideError");

  function handleChange(event) {
    const { value } = event.target;
    setInputData(value);
  }

  const url = "https://staremovieapp.herokuapp.com/apiv1/comments";

  async function handleSubmit(event) {
    event.preventDefault();
    //Handle post request
    if (!userInfo) {
      setUserError("showError");
      return;
    } else {
      setUserError("hideError");
      //Submit comment
      if (inputData.trim().length < 1) {
        setCommentError("showError");
        return;
      } else {
        setCommentError("hideError");
      }

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",

        body: JSON.stringify({
          films_id: filmId,
          comment: inputData,
          user_id: userInfo.id,
        }),
      });

      let data = await response.json().then((val) => {
        return val;
      });
      const newComment = {
        name: userInfo.name,
        ...data[0],
      };
      setInputData("");
      // console.log(data[0]);
      setComments([newComment, ...comments]);
    }
  }

  return (
    <form className="new-comment" onSubmit={handleSubmit}>
      <p>Add Comment</p>
      <textarea
        placeholder="Type your comment here"
        name="comment"
        value={inputData}
        className="comment-body"
        onChange={handleChange}
      ></textarea>

      <span className={userError}>You need to log in first</span>
      <span className={commentError}>Comment box cannot be empty</span>

      <button className="add-comment-btn">Submit Comment</button>
    </form>
  );
}
