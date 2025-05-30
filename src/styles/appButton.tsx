// import React from "react";
// import { Button, type ButtonProps } from "@mui/material";

// type CustomColor = "primary" | "secondary" | "danger" | "success";

// interface AppButtonProps extends Omit<ButtonProps, "color"> {
//   color?: CustomColor;
// }

// const colorStyles: Record<CustomColor, React.CSSProperties> = {
//   primary: {
//     backgroundColor: "#1976d2",
//     color: "#fff",
//   },
//   secondary: {
//     backgroundColor: "#9c27b0",
//     color: "#fff",
//   },
//   danger: {
//     backgroundColor: "#d32f2f",
//     color: "blue",
//   },
//   success: {
//     backgroundColor: "#2e7d32",
//     color: "#fff",
//   },
// };

// export const AppButton: React.FC<AppButtonProps> = ({
//   color = "primary",
//   sx,
//   ...rest
// }) => {
//   return <Button sx={{ ...colorStyles[color], ...sx }} {...rest} />;
// };
