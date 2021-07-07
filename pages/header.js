import React from "react";
import Menu from "./menu";
import Link from "next/link";

export default class Header extends React.Component {
  render() {
    return(
      <header>
        <Menu></Menu>
      </header>
    )
  }
}