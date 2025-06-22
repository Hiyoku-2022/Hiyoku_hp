import React from "react";
import { BaseButton, BaseButtonProps } from "./BaseButton";

export const HoverShapeButton = (props: BaseButtonProps) => {
    return <BaseButton {...props} shapeTransition />;
};