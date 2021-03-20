import { Route, Link, Switch } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import { Button, ButtonGroup } from "@material-ui/core";
export const NavItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/contact",
    title: "Contact",
    // component: <Starred />,
  },
  {
    path: "/email",
    title: "Email",
    // component: <Send_Email />,
  },
  {
    path: "/drafts",
    title: "Drafts",
    // component: <Drafts />,
  },
];

const data = Array.from(NavItems);
export default function Navigation_items() {
  return (
    <>
      <Hidden smDown>
        {data.map((items, index) => {
          return (
            <div className="fonts">
              <Link
                style={{
                  textDecoration: "none",
                }}
                to={items.path}
              >
                <ButtonGroup
                  size="small"
                  disableElevation
                  variant="contained"
                  color="primary"
                >
                  <Button
                    style={{
                      borderRadius: "0px 100px 0px 100px",
                      // width: "150px",
                      color: "white",
                      // color: "rgb(220,220,240)",
                      textShadow: "2px 1px 1px black,1px 2px 1px gray",
                    }}
                    key={index}
                  >
                    <i>{items.title}</i>
                  </Button>
                </ButtonGroup>
              </Link>
            </div>
          );
        })}
      </Hidden>
    </>
  );
}
