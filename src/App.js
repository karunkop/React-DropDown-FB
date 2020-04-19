import React from "react";
import "./App.css";
import { NavBar, NavItem } from "./components/NavBar";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { DropDownMenu } from "./components/DropDownMenu";
import { Switch, Route } from "react-router-dom";

function App() {
  const items = [
    {
      name: "My Profile",
      icon: "👦",
      hasSubMenu: false,
      path: "/profile",
    },
    {
      name: "Activity Log",
      icon: "🉑",
      hasSubMenu: false,
      path: "/activity",
    },
    {
      name: "Settings",
      icon: <CogIcon />,
      hasSubMenu: true,
      subMenu: [
        { name: "Privacy", icon: "🔑", path: "/privacy" },
        { name: "Customization", icon: "💻", path: "/customization" },
        { name: "General", icon: "👮", path: "/general" },
        { name: "Preferences", icon: "🍫", path: "/preferences" },
      ],
    },
    // {
    //   name: "Groups",
    //   icon: "👫",
    //   hasSubMenu: true,
    //   path: "/groups",
    //   subMenu: [
    //     { name: "Language", icon: "💻" },
    //     { name: "Language", icon: "💻" },
    //     { name: "Language", icon: "💻" },
    //     { name: "Language", icon: "💻" },
    //     { name: "Language", icon: "💻" },
    //     { name: "Language", icon: "💻" },
    //   ],
    // },
  ];
  return (
    <div className="App">
      <NavBar>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessengerIcon />} />

        <NavItem icon={<CaretIcon />}>
          <DropDownMenu items={items} />
        </NavItem>
      </NavBar>
      <Switch>
        <Route path="/" exact component={() => <h1>Route 1</h1>} />
      </Switch>
    </div>
  );
}

export default App;
