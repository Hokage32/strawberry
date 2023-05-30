import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const About = () => {
  const [game, setGame] = useState([]);
  const [screenshot, setScreenshot] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games/${id}?key=c9278b30be764ecbabed3201d20a4a65`
      )
      .then((res) => {
        console.log(res.data);
       setGame(res.data);
        axios
          .get(
            `https://api.rawg.io/api/games/${res.data.slug}/screenshots?key=c9278b30be764ecbabed3201d20a4a65`
          )
          .then((response) => {
            console.log(response.data.results);
            setScreenshot(response.data.results);
           
          });
        
      });
  }, []);

  return (
    <div className="about-page">
      <div className="about-img">
        <img className="main-img" src={game.background_image} alt="" />

        <div className="screenshot-box">
          <motion.div className="screenshot-carousel">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -1850 }}
              className="screenshot-inner"
            >
              {screenshot.map((s) => {
                return (
                  <motion.div className="screenshot-inner-inner">
                    <img className="screenshot" src={s.image} alt="" />
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div>
        <div className="about-info">
          <h1>{game?.name}</h1>

          <h2>ESRB: {game.esrb_rating?.name}</h2>
          <div className="metacritic-package">
            <h2>Metacritic:</h2>
            <div className="meta-box">
              <h2
                className={
                  game.metacritic > 70
                    ? "metacritic-good"
                    : game.metacritic <= 70
                    ? "metacritic-okay"
                    : "metacritic-bad"
                }
              >
                {game.metacritic}
              </h2>
            </div>
          </div>
          <h3>Release Date: {game.released}</h3>
          <h3>
            {game.parent_platforms &&
              game?.parent_platforms.map((p) => {
                return <li> {p.platform.name}</li>;
              })}
          </h3>
        </div>
        <br />
        <div className="description">
          <h2>About</h2>
          <br />
          <h4>{game.description_raw}</h4>
        </div>
      </div>
    </div>
  );
};

export default About;
