import React, { useState, useEffect } from "react";
import PageContainer from "./PageContainer";
import filmData from "./filmData";
const LandingPage = () => {
  const [allFilms, setAllFilms] = useState([]);

  useEffect(() => {
    setAllFilms(filmData);
  }, []);

  return (
    <>
      <PageContainer allFilms={allFilms} setAllFilms={setAllFilms} />
    </>
  );
};

export default LandingPage;
