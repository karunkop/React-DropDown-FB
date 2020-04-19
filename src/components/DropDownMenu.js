import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

const DropDownItem = (props) => {
  return (
    // eslint-disable-next-line
    <Link to={props.path ? `${props.path}` : "/"}>
      <div
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
        {props.rightIcon && (
          <span className="icon-right">{props.rightIcon}</span>
        )}
      </div>
    </Link>
  );
};

export const DropDownMenu = (props) => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  const { items } = props;

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  const calcMenuHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  const renderSubMenu = (item) => {
    return (
      <CSSTransition
        in={activeMenu === item.name}
        unmountOnExit
        timeout={220}
        classNames="menu-secondary"
        onEnter={calcMenuHeight}
      >
        <div className="menu">
          <DropDownItem
            leftIcon={<ArrowIcon />}
            goToMenu="main"
            setActiveMenu={setActiveMenu}
          >
            <h2>{item.name}</h2>
          </DropDownItem>
          {item.subMenu.map((subMenuItem, i) => (
            <DropDownItem
              key={i}
              path={subMenuItem.path}
              leftIcon={subMenuItem.icon}
            >
              {subMenuItem.name}
            </DropDownItem>
          ))}
        </div>
      </CSSTransition>
    );
  };

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={220}
        classNames="menu-primary"
        onEnter={calcMenuHeight}
      >
        <div className="menu">
          {items.map((item, i) => {
            return (
              <DropDownItem
                setActiveMenu={setActiveMenu}
                key={i}
                path={item.path}
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
