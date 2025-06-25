import React from "react";
import { BaseButton, BaseButtonProps } from "./BaseButton";

export function HoverShapeButton (props: BaseButtonProps) {
    return <BaseButton {...props} shapeTransition />;
};