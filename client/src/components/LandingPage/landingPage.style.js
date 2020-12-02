import styled from "styled-components";
export const StyleDisplay = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  height: 100%;
  width: 100vw;
  .grid-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    row-gap: 2rem;
    column-gap: 2rem;
    .PageContainer-item {
      width: 250px;
      /* border: 1px solid gray; */
      border-radius: 2rem;
      text-align: center;
      background-color: #ffffff;
      color: #000;
      .pix-box {
        margin-bottom: 2rem;
        width: 250px;
        height: 350px;
        background-color: #3e3d3c;
        overflow: hidden;
        transition: ease-in-out 1s;
        border-radius: 2rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .pix-box:hover {
        transform: scale(1.1);
      }

      p {
        padding: 1rem;
        text-decoration: none;
        color: #000;
      }
      text-decoration: none;
      box-shadow: 5px 10px #888888;
    }
  }
`;
