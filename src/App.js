import React from "react";
import "./App.css";
import { NavBar, NavItem } from "./components/NavBar";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { DropDownMenu } from "./components/DropDownMenu";

function App() {
  const items = [
    {
      name: "My Profile",
      icon: "👦",
      hasSubMenu: false,
    },
    {
      name: "Settings",
      icon: <CogIcon />,
      hasSubMenu: true,
      subMenu: [
        { name: "Privacy", icon: "🔑" },
        { name: "Customization", icon: "💻" },
        { name: "General", icon: "👮" },
        { name: "Theme", icon: "🍫" },
      ],
    },
    {
      name: "Groups",
      icon: "👫",
      hasSubMenu: true,
      subMenu: [
        { name: "Language", icon: "💻" },
        { name: "Language", icon: "💻" },
        { name: "Language", icon: "💻" },
        { name: "Language", icon: "💻" },
        { name: "Language", icon: "💻" },
        { name: "Language", icon: "💻" },
        { name: "Language", icon: "💻" },
        { name: "Language", icon: "💻" },
        { name: "Language", icon: "💻" },
      ],
    },
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
    </div>
  );
}

export default App;
