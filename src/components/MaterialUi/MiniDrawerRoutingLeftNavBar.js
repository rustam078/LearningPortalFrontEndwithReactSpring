import React,{useEffect} from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AddTaskIcon from "@mui/icons-material/AddTask";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Link, useNavigate } from "react-router-dom";
import { loadPopup } from "../../service/ToastifyPopup";
import AddIcon from "@mui/icons-material/Add";
import { signout, signoutFromServer } from "../../service/LoginService";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import ProfileLogo from "../Dashboard/ProfileLogo";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { fetchEvents,fetchNotification } from "../TanStackQueryHttp/http";
import { motion,useAnimation } from "framer-motion";
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import '../../static homepages/LandingPage.css';
import { BASE_URL } from "../../service/UrlUtils";


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const iconArray = [
  <DashboardCustomizeIcon />,
  <PermMediaIcon />,
  <YouTubeIcon />,
  <AutoStoriesIcon />,
  <YouTubeIcon />,
];

export default function MiniDrawerRoutingLeftNavBar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [activeLink, setActiveLink] = React.useState(null);


  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth > 768); // Set open to true if viewport width > 768px
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const [report, setReport] = React.useState([]);


  // React.useEffect(() => {
  //   // Replace this with your API call function for the report
  //   getReportFromBackend().then(response => {
  //     setReport(response.data);
  //   }).catch(error => {
  //     console.error('Error fetching data:', error);
  //   });
  // }, []);

  
  const { data: report, setReport } = useQuery({
    queryKey: ["notification"],
    queryFn: fetchNotification,
  });
  let  totalContent=0;
  if (report && report.length > 0) {
     totalContent = report[0].totalContent;
  } 
  // const [user = {}] = report; 
  // const {totalContent = 0,} = user;
  
  // const [categories, setCategories] = React.useState([]);
  // React.useEffect(() => {
    //   axios.get(`${BASE_URL}/api/categories/user`, HEADERS()
    //   )
    //     .then((response) => {
      //       console.log(response.data);
      //       setCategories(response.data);
      //     })
      //     .catch((error) => {
        //       console.error('Error:', error);
        //     });
        // }, []);
        
        const { data, isLoading } = useQuery({
          queryKey: ["fetchCategories"],
          queryFn: fetchEvents,
        });
        
        const animationControls = useAnimation();

        React.useEffect(() => {
          // When totalContent changes, trigger the shake animation
          animationControls.start({
            x: [0, -5, 5, -5, 5, 0], // Define the shake animation path
            transition: { duration: 0.3, times: [0, 0.1, 0.3, 0.5, 0.7, 1] }, // Adjust timing and duration
          });
        }, [totalContent]); // Watch for changes in totalContent
         
  const handleSignout = () => {
    signoutFromServer()
      .then((response) => {
        signout();
        navigate("/");
      })
      .catch((err) => {
        console.log("error catched while signoutFromServer", err);
        signout();
        navigate("/");
        if (err.status === undefined) loadPopup("Ugh! Server down");
        else loadPopup(err.message);
      });
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const username = (data && data[0].firstname) || "User";
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center", // Align items vertically in the center
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {`Hi ${username}...`}
          </Typography>
          <motion.button  whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 500 }} onClick={handleSignout}>Logout</motion.button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <ProfileLogo
            imageUrl={`https://picsum.photos/300/200`}
            altText="Profile Image"
            status={true}
          />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["DashBoard", "Media Mix", "Videos", "Articles","Youtube"].map(
            (text, index) => (
              <ListItem   key={text} disablePadding sx={{ display: "block" }}     className={activeLink === text ? "active-link" : ""} >
                <ListItemButton
                
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  component={Link}
                  to={
                    text === "DashBoard"
                      ? `${text.replace(/ /g, "").toLowerCase()}`
                      : `dashboard/${text.replace(/ /g, "").toLowerCase()}`
                  }
                  onClick={() => handleLinkClick(text)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                        {index === 1 ? ( // Check if it's "Media Mix"
           <motion.div animate={animationControls}>
           <Badge badgeContent={totalContent} color="error">
             <NotificationsIcon />
           </Badge>
         </motion.div>
         
            ) : (
              iconArray[index]
            )}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }}/>
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <div
          style={{ display: "flex", cursor: "pointer" }}
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <ListItemText
            primary="Category"
            sx={{
              opacity: open ? 1 : 0,
              marginLeft: 2, // Adjust the margin as needed
            }}
          />

          <ListItemIcon
            sx={{
              minWidth: 0,
              justifyContent: "center",
              marginRight: 2,
            }}
          >
            <AddIcon />
          </ListItemIcon>
        </div>
        <Divider />

        <div style={{ overflowY: "auto" }}>
          <List>
            {data &&
              data.map((category, index) => (
                <ListItem
                  key={category.categoryId}
                  disablePadding
                  sx={{ display: "block" }}
                  className={activeLink === category ? "active-link" : ""}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                    component={Link}
                    to={`/dashboard/categories/view/${category.categoryId}`}
                    onClick={() => handleLinkClick(category)}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {index % 2 === 0 ? <InboxIcon /> : <InboxIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={category.categoryName}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
          </List>
        </div>
      </Drawer>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box> */}
    </Box>
  );
}
