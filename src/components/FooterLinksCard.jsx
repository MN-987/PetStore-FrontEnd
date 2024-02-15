import { Link } from "@mui/material"

// eslint-disable-next-line react/prop-types
const FooterLinksCard = ({title}) => {
  return (
    <Link 
    href="#"
    sx={{
      color: "#bdbcb6",
      "&:hover": {
        color: "#e63b67",
      },
      textDecoration: "none", 
      display: "block",
      fontSize: "16px",
      marginBottom: "10px",
      marginLeft: "90px",
      textAlign: "left",
    }}
  >
    &gt;{title}
  </Link>
  )
}

export default FooterLinksCard