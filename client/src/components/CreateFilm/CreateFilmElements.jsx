import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const FormNav = styled.nav`
  .RegisterContainer-nav {
    height: 10vh;
    background-color: #222121;
    display: flex;
    align-items: center;
    padding: 0 80px;
    width: 100vw;
    justify-content: space-between;
  }
  .RegisterContainer-logo {
    font-size: 2.5em;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
    .logo-img {
      height: 38px;
    }
  }
  .main-logo::after {
    color: #fff;
  }
  .auth-nav {
    display: flex;
    justify-content: space-between;
  }
  .user-nav {
    margin: 0 10px;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
  }
  .addNew-btn {
    background-color: #3b88c3;
    color: #fff;
    border: none;
    height: 20px;
    border-radius: 3px;
  }
`;
export const CreateFilmContainer = styled.div`
  /* padding-top: 2rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 50vh; */
  justify-content: center;
  width: 100vw;

  .btn {
    display: inline-block;
    height: 2.5em;
    width: 10em;
    border: 1px solid #aaaaaa;
    margin-top: 1em;
    outline: none;
    background-color: #00a8e6;
    border-color: #00a8e6;
    border-radius: 3px;
    color: #fff;
    align-items: center;
    outline: none;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 22px;
  height: 32px;
  z-index: 10;
`;
export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  line-height: 1.8;
  padding: 1em;
  margin: 2em;
  .heading {
    padding: 10px 0 10px 0;
    font-size: 30px;
    text-align: center;
    line-height: 1;
  }
`;
export const ModalWrapper = styled.div`
  width: 500px;
  min-height: 500px;
  /* box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2); */
  background: #272728;
  color: #eee;
  position: relative;
  /* z-index: 10; */
  border-radius: 10px;
  justify-content: center;
  .btn {
    width: 20em;
    height: 3em;
    align-self: center;
    background-color: lightgreen;
    border-radius: 2rem;
  }
  .modal-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-input {
    outline: none;
    background: transparent;
    color: #eee;
    border: 1px solid #949494;
    display: inline-block;
    padding-right: 0.5em;
    border-radius: 5px;
  }
`;
export const ModalWrappers = styled.div`
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url(../../signUp.jpg);
  background-size: 100vw;
  background-color: rgba(200, 255, 255, 0.1);
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    object-fit: cover;
    grid-row-gap: 2rem;
    /* height: 100%; */
    width: 100vw;
  }
`;
export const CardContainer = styled.div`
  /* padding: 1rem; */
  box-shadow: 7px 10px 15px rgba(0, 0, 0, 0.56);
  /* border: 1px solid gray; */
  display: grid;
  grid-template-rows: auto auto;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  color: #fff;

  height: 100%;
  .pix-box {
    width: 200px;
    height: 200px;
    background-color: #3e3d3c;
    /* overflow: hidden;*/
    img {
      width: 100%;
      height: 100%;
    }
  }
  .cards {
    width: 200px;
    height: 200px;
    padding: 1rem;
    .title-txt {
      line-height: 1rem;
      margin-top: 0.3rem;
    }
  }

  .addNew-btn {
    background-color: #3b88c3;
    color: #fff;
    border: none;
    height: 20px;
    border-radius: 3px;
  }
`;
