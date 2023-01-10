import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MyContext from "../../helpers/contex";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalDetails() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const context = React.useContext(MyContext);
 // console.log(context);

  return (
    <div>
      
      <Button onClick={handleOpen}>Ver mais</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='containerModal'>
          {context.data.length > 0 ? (
            context.data.map((char) => (
              <>
                <div className="pokeImg">
                <h1>{(char.name).toUpperCase()}</h1>
                  <img
                    src={char.sprites.other.home.front_shiny}
                    alt={`${char.name} image`}
                  />
                </div>
                <div className="charContainer">
                  <ul>
                  <h2>Habilidades</h2>
                  {char.abilities.map((ability) => (
                    <li>{ability.ability.name}</li>
                  ))}
                </ul>
                <ul>
                  <h2>Experiência</h2>
                  {char.stats.map((stat) => (
                    <li>{`${stat.stat.name}: lv${stat.base_stat}`}</li>
                  ))}
                </ul>

                <p>{`Altura: ${(char.height * 0.3048).toFixed(2)}m`}</p>
                <p>{`Peso: ${(char.weight / 2.2046).toFixed(2)}kg`}</p>
                </div>
                
              </>
            ))
          ) : (
            <div>
              <p>Não temos informações desse pokemon</p>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
