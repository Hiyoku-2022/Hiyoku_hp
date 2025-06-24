import React from "react";
import { BaseButton, BaseButtonProps } from "./base-button";

export function HoverShapeButton (props: BaseButtonProps) {
    return <BaseButton {...props} shapeTransition />;
};