import React from "react";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import spacingProps from "../utils/spacing-props";
import { useTheme } from "@material-ui/core/styles";
export default function BodyText({
  type = "default",
  variant = "body1",
  bold = false,
  children,
  boxProps,
  ...props
}) {
  const theme = useTheme();
  const textColor = {
    inherit: theme.palette.generalColor.text,
    default: theme.palette.text.primary,
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    error: theme.palette.status.error,
    success: theme.palette.status.processing,
    disabled: theme.palette.appBarColor.lightColor,
    white: theme.palette.white,
  };
  return (
    <Box {...spacingProps(props)} {...boxProps}>
      <Typography
        variant={variant}
        {...props}
        style={{ color: textColor[type], fontWeight: bold && "bold" }}
      >
        {children}
      </Typography>
    </Box>
  );
}

BodyText.propTypes = {
  boxProps: PropTypes.any,
  children: PropTypes.any,
  size: PropTypes.string,
  type: PropTypes.string,
};
