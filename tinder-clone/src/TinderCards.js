import React, { useState } from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: "https://www.aljazeera.com/wp-content/uploads/2021/07/AP21190798629710.jpg?resize=770%2C513"
        },
        {
            name: 'Jeff Bezos',
            url: "https://wallpapercave.com/wp/wp4025589.jpg"
        },
        {
            name: 'Ellen',
            url: "https://wallpapercave.com/wp/wp2249449.jpg"
        },
        {
            name: 'Bill Gates',
            url: "https://wallpapercave.com/wp/OF3Zstl.jpg"
        },
        {
            name: 'Steve Job',
            url: "https://wallpapercave.com/wp/mJRp4Xn.jpg"
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + " Left the screen..!")
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div 
                            style={{backgroundImage: `url(${person.url})`}}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards;
