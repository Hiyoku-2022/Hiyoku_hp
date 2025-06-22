export type Variant =
    | "blue"
    | "orange"
    | "ghostBlue"
    | "ghostOrange"
    | "softBlue"
    | "softOrange"
    | "green"
    | "sky";

export const variantClasses: Record<Variant, string> = {
    blue: "bg-sub03 text-white hover:bg-sub05",
    orange: "bg-sub text-white hover:bg-sub02",
    ghostBlue: "bg-white text-black hover:text-sub03",
    ghostOrange: "bg-white text-black hover:text-sub",
    softBlue: "bg-white text-sub03 hover:text-main",
    softOrange: "bg-white text-sub hover:text-sub02",
    green: "bg-sub01 text-text hover:bg-sub04",
    sky: "bg-sub05 text-text hover:bg-main",
};
