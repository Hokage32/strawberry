import React from "react";
import { useContext, useState, useEffect, useRef } from "react";
import GlobalState from "../../state/GlobalState";
import axios from "axios";
import Card from "./Card";
import { motion } from "framer-motion";

const Home = () => {
  const { state } = useContext(GlobalState);
  const [popularGames, setPopularGames] = useState([]);
  const [newGames, setNewGames] = useState([]);

  const carousel = useRef();

  const popular = async () => {
    await axios
      .get(
        "https://api.rawg.io/api/games?key=c9278b30be764ecbabed3201d20a4a65&dates=2022-01-01,2022-12-30&ordering=-rating-updated&page_size=40"
      )
      .then((res) => {
        console.log(res.data.results);
        setPopularGames(res.data.results);
      });
  };

  useEffect(() => {
    popular();
    axios
      .get(
        "https://api.rawg.io/api/games?key=c9278b30be764ecbabed3201d20a4a65&dates=2023-01-01,2023-12-30&ordering=-added&page_size=40"
      )
      .then((response) => {
        console.log(response.data.results);
        setNewGames(response.data.results);
      });
  }, []);
  return (
    <div>
      <div className="mission-box">
      <div className="mission">
        <h1>Hi, {state.username}!</h1>
        <br />

        <h3>
        At Strawberry, we are dedicated to celebrating gamers' passion for video games. Our platform offers a curated collection to discover, and explore new gaming experiences. Join us and embark on an exciting gaming journey!
        </h3>
      </div>
      </div>


      <div className="popular-slide">
      <h2>New & Upcoming</h2>
      <div className="carousel-box">
        <motion.div ref={carousel} className="carousel">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -32300 }}
            className="inner-carousel"
          >
            {newGames.map((popular) => {
              return (
                <motion.div className="inner-inner-carousel">
                  <Card popular={popular} />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      </div>


<div className="popular-slide">
        <h2>Popular in 2022</h2>
        <div className="carousel-box">
          <motion.div ref={carousel} className="carousel">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -32300 }}
              className="inner-carousel"
            >
              {popularGames.map((popular) => {
                return (
                  <motion.div className="inner-inner-carousel">
                    <Card popular={popular} />
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>



    </div>
  );
};

export default Home;
