import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { NavItems } from "./Navbar";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import LoginForm2 from "../ContentFiles/LoginForm2";
import LoginForm from "../ContentFiles/LoginForm";

const drawerWidth = 210;
// export const ListData = [
//   "HOME",
//   "DESIGNERS",
//   "CLOTHING",
//   "SHOES",
//   "HANDBAGS",
//   "JEWELRY",
// ];
export const SignUp = [
  {
    Button: "Sing In ",
    comopnent: <LoginForm2 />,
    id: 1,
  },
  {
    Button: "Sing Up",
    comopnent: <LoginForm />,
    id: 2,
  },
];

export const TopItems = [
  "Home",
  "Starred",
  "Email",
  "Drafts",
  "Sing In ",
  "Sing Up",
];
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // marginTop: "10px",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("xs")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(0),
  },
}));

function ResponsiveDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />

      <List>
        {NavItems.map((items, index) => (
          <ListItem button>
            <Link
              style={{
                display: "flex",
                textDecoration: "none",
                color: "black",
              }}
              to={items.path}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={items.title} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />

      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon
          style={
            {
              // marginTop: "20px",
            }
          }
        />
      </IconButton>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            // container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
export default ResponsiveDrawer;
