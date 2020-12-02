import React, { useState, useEffect } from "react";

export default function Rating({ filmId }) {
  const [rating, setRating] = useState(1);
  const url = "https://staremovieapp.herokuapp.com/apiv1/ratefilm";

  useEffect(async () => {
    console.log(rating);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",

      body: JSON.stringify({
        films_id: filmId,
        rating: rating,
        total_rated_users: 1,
      }),
    });

    let data = await response.json().then((val) => {
      return val;
    });

    //console.log(data);
  }, [rating]);

  return (
    <>
      <select
        className="rating-select"
        // id={id}
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        // onBlur={(e) => setState(e.target.value)}
        // disabled={options.length ===0}
      >
        {/* <option>All</option> */}
        {[1, 2, 3, 4, 5].map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}
