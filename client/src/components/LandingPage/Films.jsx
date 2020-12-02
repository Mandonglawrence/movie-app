import React from "react";
import { Link } from "react-router-dom";

function Films({ setFilmData, data }) {
  return (
    <>
      <div className="main-area">
        <div className="grid-wrapper">
          {/* data && */}
          {data.length > 0 ? (
            data.map((ten, i) => {
              //console.log(ten);
              return (
                <Display
                  key={i}
                  name={ten.name}
                  description={ten.description}
                  id={ten.id}
                  ticket={ten.ticket_price}
                  image={ten.image_link}
                  rating={ten.rating}
                />
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

function Display({ name, rating, id, ticket, image }) {
  return (
    <div className="PageContainer-item" key={id}>
      <div className="pix-box">
        <Link to={`/films/${id}`}>
          <img className="movie-poster" src={image} alt="movie poster" />
        </Link>
      </div>
      <Link className="title-txt" to={`/films/${id}`}>
        <div>
          <p>{name}</p>
        </div>
      </Link>
      <div className="title-txt">
        <p>Rating: {rating}</p>
      </div>
      <div className="title-txt">
        <p>Ticket Price: ${ticket}</p>
      </div>
    </div>
  );
}

export default Films;
