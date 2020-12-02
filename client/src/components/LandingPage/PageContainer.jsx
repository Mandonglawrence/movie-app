import React from "react";
import "./Home.css";
import Header from "./Header";
import { useEffect, useState } from "react";
import Films from "./Films";
import Pagination from "./Pagination";

const PageContainer = ({ allFilms }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(async () => {
    const url = "https://staremovieapp.herokuapp.com/apiv1/films";
    setLoading(true);
    const response = await fetch(url, {
      method: "GET",
      redirect: "follow",
    });
    let userData = await response
      .json()
      .then((val) => {
        return val;
      })
      .then((user1) => {
        setData(user1);
        setLoading(false);
        // console.log(user1);
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentDatas = data.slice(indexOfFirstPost, indexOfLastPost);

  const logo = "./Images/favicon-32x32.png";
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header logoLink={logo} setFilmData={setData} paginate={paginate} />
      <Films setFilmData={setData} data={currentDatas} loading={loading} />

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
      />

      <div className="footer-area">
        <p className="copyright">STARE Copyright &copy; 2020</p>
      </div>
    </>
  );
};

export default PageContainer;
