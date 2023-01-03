import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ModalDetails from '../modalDetails/index'

export default function PokeCard({image, name, key}) {
  
  
  return (
    <>
    
    <Card className="card" sx={{ maxWidth: 345 }} key={key}>
        <CardMedia
        sx={{ height: 170 }}
        image={`${image}`}
        title={`${name}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`${name}`}
        </Typography>
      </CardContent>
      <CardActions>
        <ModalDetails/>
     
      </CardActions>
    </Card>
    
    
    </>
    
  );
}
