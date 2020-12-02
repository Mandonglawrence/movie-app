import React, { useState, useEffect } from "react";

export default function Comment({ filmId, comments }) {
  return (
    <>
      <h2>Comments:</h2>
      {comments.length > 0 ? (
        comments.reverse().map((item, index) => {
          if (item.films_id == filmId) {
            return (
              <div className="comment-badge" key={index}>
                <p>By: {item.name}</p>
                <p>Date: {new Date(item.created_at).toLocaleDateString()}</p>
                <p>{item.comment}</p>
              </div>
            );
          }
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
