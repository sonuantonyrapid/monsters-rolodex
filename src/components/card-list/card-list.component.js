import React from "react";
import "./card-list.css";

import Card from "../card/card.component";

const CardList = (props) => {

    const monsters = props.list.map((item,id)=>{

        return <Card key={'monsters_'+item.username} id={id} monster={item} />;

    });

    return (<div className="card-list">
        {monsters}
    </div>);

}

export default CardList;