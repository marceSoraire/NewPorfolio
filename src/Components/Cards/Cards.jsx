import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { BiDesktop } from "react-icons/bi";
import { SiGithub } from "react-icons/si";

const Cards = (props) => {
    return (
        <Card className='my-10 mx-auto md:my-4 xl:mx-1 max-w-[325px] min-h-[450px] border-2 border-gray-600 hover:shadow-xl hover:shadow-gray-600'>
            <CardMedia
                className='h-[50%] sm:h-[60%] border-b-2 border-gray-400'
                image={props.img}
                title={props.art}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" className='text-center'>
                    {props.title}
                </Typography>
                <Typography gutterBottom variant="p" color="text.secondary">
                    {props.text}
                </Typography>
            </CardContent>
            <CardActions className='flex justify-evenly'>
                <a href={props.proyecto} target='_blank' rel='noreferrer'>
                    <BiDesktop size={32}/>
                </a>
                <a href={props.codigo} target='_blank' rel='noreferrer'>
                    <SiGithub size={30}/>
                </a>
            </CardActions>
        </Card>
    );
}
export default Cards;