import React from "react";
import DrawerComponent, { IDrawerProps } from "../../components/drawer";

const DrawerContainer: (props: IDrawerProps) => JSX.Element = (props: IDrawerProps) => ( <DrawerComponent {...props}/>);

export default DrawerContainer;
