import React, { useState, useEffect } from "react";
import Film from "./Film";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const [film, setFilm] = useState({});

  const { filmid } = useParams();
  React.useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(async () => {
    const url2 = `https://staremovieapp.herokuapp.com/apiv1/films/film_id/${filmid}`;
    const response = await fetch(url2, {
      method: "GET",
      redirect: "follow",
    });
    let filmData = await response
      .json()
      .then((val) => {
        return val;
      })
      .then((film) => {
        //console.log(film[0]);
        setFilm(film[0]);
      });
  }, []);

  const [comments, setComments] = useState([]);

  useEffect(async () => {
    const url = `https://staremovieapp.herokuapp.com/apiv1/comments/${filmid}`;
    const response = await fetch(url, {
      method: "GET",
      redirect: "follow",
    });
    let userData = await response
      .json()
      .then((val) => {
        return val;
      })
      .then((data) => {
        setComments(data);
        console.log(data);
      });
  }, []);

  //useEffect(()=>{}, [comments])

  return (
    <>
      <Film film={film} comments={comments} setComments={setComments} />
    </>
  );
};
export default SinglePage;
