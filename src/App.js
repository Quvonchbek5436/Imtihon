import { Route, Routes} from "react-router-dom";
import Home from "./components/Home/home";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './components/addPage/add'
import Edit from './components/ediPage/edit'
import {useState} from "react";



function App() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] =useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
  return (
    <div className="App">

        <Container maxWidth="xl" >
            <Toolbar disableGutters className={"d-flex justify-content-between py-2"}>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >
                    <h1 className={"fw-bold"}>Furniutr.</h1>
                </Typography>

                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Search...">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <FontAwesomeIcon icon={faSearch} />
                        </IconButton>
                    </Tooltip>

                </Box>
            </Toolbar>
        </Container>
        <h2 className={"text-center"}>Barchasini ko’rish / qo’shish / o’zgartirish / o’chirish paneli</h2>
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/add"} element={<Add />} />
            <Route path={"/edit"} element={<Edit />} />
        </Routes>


    </div>
  );
}

export default App;
