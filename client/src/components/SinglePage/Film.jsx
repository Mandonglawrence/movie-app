import "./Style.css";
import React from "react";
import Header from "./Header";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import Rating from "./Rating";

const Film = ({ film, comments, setComments }) => {
  const logo = "./../Images/favicon-32x32.png";

  return (
    <>
      <Header logoLink={logo} />

      <div className="main-area">
        {film ? (
          <div className="info-area">
            <div className="img-info">
              <img
                className="single-img"
                src={film.image_link}
                alt={film.image_link}
              />
            </div>

            <div className="text-info">
              <div>
                <h3>{film.name}</h3>
              </div>

              <div>
                <p>Ticket Price: ${film.ticket_price}</p>
              </div>

              <div>
                <p>Country: {film.country}</p>
              </div>

              <div>
                <p>Description: {film.description}</p>
              </div>

              <div>
                <p>Genre: {film.genre}</p>
              </div>

              <div>
                <p>Rating: {film.rating}</p>
              </div>
            </div>

            <div className="video-Info">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/jaY98VY5qwU"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}

        <div className="commentArea">
          <div className="rating-div">
            <p>Rate film:{"  "}</p> <Rating filmId={film.id} />
          </div>

          <CommentForm
            filmId={film.id}
            setComments={setComments}
            comments={comments}
          />

          <Comment filmId={film.id} comments={comments} />
        </div>
      </div>

      <div className="footer-area">
        <p className="copyright">STARE Copyright &copy; 2020</p>
      </div>
    </>
  );
};

export default Film;
