import React from "react";
import styled from "styled-components";
import { HeartIcon, StarIcon } from "./AllSvg";

const Container = styled.div`
  margin: 20px 0;
  padding: 10px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }

  h5,
  span,
  p {
    font-family: "Montserrat", sans-serif;
  }

  h1 {
    text-align: center;
  }
`;
const MainBox = styled.div`
  /* display: flex;
  padding: 20px;
  background: red;
  justify-content: space-between; */
`;
const BigBox = styled.div`
  width: 30vw;
`;
const SubBox = styled.div`
  /* background: wheat;
  height: 250px;
  display: flex;
  flex-flow: row nowrap;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar; */
`;
const Card = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  width: 16vw;
  /* display: inline-block;
  position: relative;
  margin: 10px;
  border-radius: 3px;
  overflow: hidden;
  width: 18vw;
  height: 23vw;
  cursor: pointer;
  flex: 0 0 auto;
  */
`;

const Caption = styled.div`
  position: absolute;
  height: auto;
  padding: 10px;
  padding-bottom: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  left: 0;
  right: 0;
  bottom: 0;
  top: 85%;

  transition: 0.3s;

  .heart {
    position: absolute;
    top: 10px;
    right: 10px;
    fill: white;
    transition: 0.3s;
  }

  .heart:hover {
    fill: red;
  }
  .title {
    font-size: calc(1vw + 0.5em);
    width: 80%;
    height: auto;
    overflow-wrap: break-word;
  }
  .star {
    position: relative;
    bottom: 5px;
    & > :not(:last-child) {
      margin-right: 2px;
    }
  }

  ${Card}:hover & {
    top: 55%;
  }

  button {
    position: absolute;
    border: none;
    height: calc(2vw + 0.5em);
    width: calc(5vw + 1em);
    bottom: -20px;
    opacity: 0;
    right: 10px;
    background-color: crimson;
    border: 1px solid crimson;
    color: white;
    border-radius: 15px;
    font-size: calc(0.5vw + 0.4em);
    transition: 0.3s;

    ${Card}:hover & {
      bottom: 10px;
      opacity: 1;
    }

    &:hover {
      background-color: white;
      color: crimson;
    }
  }
`;
// const Rate = styled.div`
//   display: flex;
// `;

const Book = () => {
  return (
    <Container>
      <h1>Populer</h1>

      <MainBox>
        <BigBox>
          <img src="http://placeimg.com/300/400/any" alt="img" />
        </BigBox>
        <SubBox>
          <Card>
            <img src="http://placeimg.com/180/240/any" alt="img-card" />
            <Caption>
              <h5 className="title">Title</h5>
              <HeartIcon height={20} width={20} className="heart" />
              <span className="star">
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
              </span>
              <button>More</button>
            </Caption>
          </Card>
          <Card>
            <img src="http://placeimg.com/180/240/any" alt="img-card" />
            <Caption>
              <h5 className="title">Title</h5>
              <HeartIcon height={20} width={20} className="heart" />
              <span className="star">
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
              </span>
              <button>More</button>
            </Caption>
          </Card>
          <Card>
            <img src="http://placeimg.com/180/240/any" alt="img-card" />
            <Caption>
              <h5 className="title">Title</h5>
              <HeartIcon height={20} width={20} className="heart" />
              <span className="star">
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
              </span>
              <button>More</button>
            </Caption>
          </Card>
          <Card>
            <img src="http://placeimg.com/180/240/any" alt="img-card" />
            <Caption>
              <h5 className="title">Title</h5>
              <HeartIcon height={20} width={20} className="heart" />
              <span className="star">
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
              </span>
              <button>More</button>
            </Caption>
          </Card>
          <Card>
            <img src="http://placeimg.com/180/240/any" alt="img-card" />
            <Caption>
              <h5 className="title">Title</h5>
              <HeartIcon height={20} width={20} className="heart" />
              <span className="star">
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
              </span>
              <button>More</button>
            </Caption>
          </Card>
          <Card>
            <img src="http://placeimg.com/180/240/any" alt="img-card" />
            <Caption>
              <h5 className="title">Title</h5>
              <HeartIcon height={20} width={20} className="heart" />
              <span className="star">
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
              </span>
              <button>More</button>
            </Caption>
          </Card>
          <Card>
            <img src="http://placeimg.com/180/240/any" alt="img-card" />
            <Caption>
              <h5 className="title">Title</h5>
              <HeartIcon height={20} width={20} className="heart" />
              <span className="star">
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
              </span>
              <button>More</button>
            </Caption>
          </Card>
          <Card>
            <img src="http://placeimg.com/180/240/any" alt="img-card" />
            <Caption>
              <h5 className="title">Title</h5>
              <HeartIcon height={20} width={20} className="heart" />
              <span className="star">
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
              </span>
              <button>More</button>
            </Caption>
          </Card>
          <Card>
            <img src="http://placeimg.com/180/240/any" alt="img-card" />
            <Caption>
              <h5 className="title">Title</h5>
              <HeartIcon height={20} width={20} className="heart" />
              <span className="star">
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
              </span>
              <button>More</button>
            </Caption>
          </Card>
          <Card>
            <img src="http://placeimg.com/180/240/any" alt="img-card" />
            <Caption>
              <h5 className="title">Title</h5>
              <HeartIcon height={20} width={20} className="heart" />
              <span className="star">
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
                <StarIcon width={15} height={15} fill="yellow" />
              </span>
              <button>More</button>
            </Caption>
          </Card>
        </SubBox>
      </MainBox>
    </Container>
  );
};

export default Book;
