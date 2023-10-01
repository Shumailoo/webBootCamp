import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCards(contact){
    return(
        <Card
            key={contact.id} //this is for the react itself for assuring the proper order of the items but we cant use it 
            //for using the id from the contacts we need to make a new prop id and it can be used later as required
            name={contact.name}
            url={contact.imgURL}
            pt1={contact.pt1}
            pt2={contact.pt2}
        ></Card>
    );

}

function App(){
    return(
        <div>
            <h1 className="heading">Characters</h1>
            {contacts.map(createCards)};

            {/* <Card 
                name={contacts[0].name} 
                url={contacts[0].imgURL} 
                pt1={contacts[0].pt1} 
                pt2={contacts[0].pt2}
                />
            <Card 
                name={contacts[1].name} 
                url={contacts[1].imgURL} 
                pt1={contacts[1].pt1} 
                pt2={contacts[1].pt2}
                />
            <Card 
                name={contacts[2].name} 
                url={contacts[2].imgURL} 
                pt1={contacts[2].pt1} 
                pt2={contacts[2].pt2}
                /> */}

            {/* <div className="card">
                <div className="top">
                    <h2 className="name">Monkey D Luffy</h2>
                    <img className="circle-img"
                        src="https://pbs.twimg.com/profile_images/1205884469808390150/2ixfe-m0_400x400.jpg" 
                        alt="avatar_img"
                    />
                    </div>
                    <div className="bottom">
                    <p className="info">Pirate King</p>
                    <p className="info">Fifth Empror</p>
                </div>
            </div> */}
        </div>
    );
}

export default App;