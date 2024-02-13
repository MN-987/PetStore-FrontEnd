import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import  { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// eslint-disable-next-line react/prop-types
export default function NewArrivalCard({ price, imageSrc, description, isNew }) {
  const [value, setValue] = useState(2);
  const [cardHovered, setCardHovered] = useState(false);

  return (
    <Card
      sx={{
        display: "flex",
        border: "1px solid #f0ecec",
        position: "relative",
        boxShadow: "0px 0px 2px 0px black",
        "&:hover": {
          border: "1px solid #f94073",
          cursor: "pointer",
        },
      }}
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
    >
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={imageSrc}
        alt="Product Image"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Bzpets
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "#434666", width: "50" }}
          >
            {description}
          </Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />

          <Typography
            component="div"
            sx={{ color: "#fc4474", fontWeight: 700, fontSize: 30 }}
          >
            ${price}
          </Typography>
        </CardContent>

        <Box
          sx={{
            position: "absolute",
            top: "100px",
            left: "85%",
            borderRadius: "50%",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AddShoppingCartIcon
            style={{
              backgroundColor: cardHovered ? "#303454" : "#f4f4fc",
              color: cardHovered ? "white" : "#838583",
              borderRadius: "50%",
              height: "30px",
              width: "30px",
            }}
            sx={{
              "&:hover": {
                color: "black",
                backgroundColor: "#ff4474",
                cursor: "pointer",
                borderRadius: "50%",
                height: "30px",
                width: "30px",
              },
            }}
          />
        </Box>
        {isNew && (
          <span
            style={{
              display: "table",
              position: "absolute",
              top: "",
              left: "2px",
              miWidth: "45px",
              height: "22px",
              lineHeight: "22px",
              padding: "0 5px",
              marginBottom: "5px",
              fontSize: "92.307%",
              fontWeight: "500",
              textTransform: "uppercase",
              borderRadius: "3px",
              backgroundColor: "#00b9c5",
              color: "white",
            }}
          >
            New
          </span>
        )}
      </Box>
    </Card>
  );
}
