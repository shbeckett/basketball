import React from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

export default function Carouset (props) {

    var items = [
        {
            name: "Olimpia Milano v Barcelona",
            date: "22 November 2022",
            description: "All the action from this nailbiter!",
            src: "autumn.mp4"
        },
        {
            name: "Olimpia Milano v Tezenis Verona",
            date: "25 November 2022",
            description: "The most exciting moments",
            src: "autumn.mp4"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.date}</p>
            <p>{props.item.description}</p>

            <video width="300" controls><source src={props.item.src} type="video/mp4"></source></video>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )


} 