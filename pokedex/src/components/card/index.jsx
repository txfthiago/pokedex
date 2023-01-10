import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ModalDetails from "../modalDetails/index";

export default function PokeCard({ image, name, id, handleSelectPoke }) {
  return (
    <>
      <Card className="card" sx={{ maxWidth: 345 }} key={id}>
        <div className="card-media">
          <CardMedia
            sx={{ height: 170 }}
            image={`${image}`}
            title={`${name}`}
          />
        </div>

        <div className="content-card">
          <CardContent>
            <h2>
              {`${name.toUpperCase()}`}
            </h2>
          </CardContent>
          <CardActions onClick={() => handleSelectPoke(id)}>
            <ModalDetails />
          </CardActions>
        </div>
      </Card>
    </>
  );
}
