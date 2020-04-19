import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";
import { CSSTransition } from "react-transition-group";

const DropDownItem = (props) => {
  return (
    // eslint-disable-next-line
    <a
      href="#"
      className="menu-item"
      onClick={() => props.goToMenu && props.setActiveMenu(props.goToMenu)}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span className="icon-button">{props.leftIcon}</span>
        &nbsp;&nbsp;
        {props.children}
      </div>
      {props.rightIcon && <span className="icon-right">{props.rightIcon}</span>}
    </a>
  );
};

export const DropDownMenu = (props) => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const [subMenus, setSubMenus] = useState(null);
  const dropdownRef = useRef(null);
  const { items } = props;

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    let filter = items.filter((item) => item.hasSubMenu);
    setSubMenus(filter);
  }, []);

  const calcMenuHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };
  console.log(subMenus);

  const renderSubMenu = (item) => {
    console.log(item, "INSIDE RENDER");
    return (
      <CSSTransition
        in={activeMenu === item.name}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcMenuHeight}
      >
        <div className="menu">
          <DropDownItem
            leftIcon={<ArrowIcon />}
            goToMenu="main"
            setActiveMenu={setActiveMenu}
          />
          {item.subMenu.map((subMenuItem, i) => (
            <DropDownItem key={i} leftIcon={subMenuItem.icon}>
              {subMenuItem.name}
            </DropDownItem>
          ))}
        </div>
      </CSSTransition>
    );
  };
  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      {/* {items.filter((item) => item.hasSubMenu).map((sub) => renderSubMenu(sub))} */}
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcMenuHeight}
      >
        <div className="menu">
          {items.map((item, i) => {
            return (
              <DropDownItem
                setActiveMenu={setActiveMenu}
                key={i}
                leftIcon={item.icon}
                rightIcon={item.hasSubMenu ? <ChevronIcon /> : null}
                goToMenu={item.hasSubMenu ? item.name : false}
              >
                {item.name}
              </DropDownItem>
            );
          })}
        </div>
      </CSSTransition>
      {items.filter((item) => item.hasSubMenu).map((sub) => renderSubMenu(sub))}
    </div>
  );
};
