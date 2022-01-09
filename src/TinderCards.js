import React, { useState, useEffect } from "react";
import "./TinderCard.css";
import TinderCard from "react-tinder-card";
import axios from './axios';



function TinderCards() {
 const [people, setPeople] = useState([
   {
     name: "Elon Musk",
     imgUrl: "https://th.bing.com/th/id/OIP.JpG1GmRJFYYSxCgVvb6ZVQHaFj?w=223&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
   },
   {
     name: "Bill Gates",
     imgUrl: "https://th.bing.com/th/id/OIP._FMLfVXGdCGbi5RVZUDAuAHaEL?w=286&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
   },
   {
     name: "Steve Jobs",
     imgUrl: "https://th.bing.com/th/id/OIP.jVvCMQC4__C4IH1kW0MHXAHaGL?w=241&h=201&c=7&r=0&o=5&dpr=1.5&pid=1.7",
   },
   {
     name: "Mark Zuckerberg",
     imgUrl: "https://th.bing.com/th/id/OIP.mnlduK1Z4P5ynPINui0Y2wHaJ4?w=134&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
   },
   {
     name: "Ellen",
     imgUrl: "https://th.bing.com/th/id/OIP.0lhU1fjxwDZZDHVHqB0g5QHaEc?w=254&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
   },
   {
     name: "Jeff Bezos",
     imgUrl: "https://th.bing.com/th/id/OIP.s6qsaB8i417SxQ_PTz4PvQHaHa?w=159&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
   },
  
 ]);


   useEffect(() => {
    async function fetchData() {
        const req = await axios.get('/tinder/card');
        setPeople(req.data);
    }

    fetchData();
     }, [])

     console.log(people);

    const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };

    return (
      <div className="tinderCards">
        <div className="tinderCards_cardContainer">
          {people.map((person) => (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{ background: `url(${person.imgUrl} )` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    );
}

export default TinderCards;
