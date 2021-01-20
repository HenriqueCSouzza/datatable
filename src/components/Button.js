import PropTypes from "prop-types";
import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";
import AddIcon from "@material-ui/icons/Add";
import FileCopy from "@material-ui/icons/FileCopy";
const useStyles = makeStyles((theme) => ({
  root: {
    "&:focus": {
      outline: "1px dotted !important",
    },
  },
}));

export default function AppButton({
  disabled,
  onClick,
  children,
  size,
  type,
  component,
  color = "primary",
  variant = "contained",
  iconAdd = false,
  iconCheck = false,
  iconFile = false,
  ...rest
}) {
  const classes = useStyles();
  return (
    <Button
      className={classes.root}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      component={component}
      color={color}
      size={size}
      {...rest}
      disableElevation
    >
      {children}
      {iconAdd && <AddIcon style={{ marginLeft: 2, fontSize: 16 }} />}
      {iconCheck && <CheckIcon style={{ marginLeft: 2, fontSize: 16 }} />}

      {iconFile && <FileCopy style={{ marginLeft: 2, fontSize: 16 }} />}
    </Button>
  );
}

AppButton.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  component: PropTypes.any,
  disabled: PropTypes.any,
  onClick: PropTypes.any,
  size: PropTypes.any,
  type: PropTypes.any,
  variant: PropTypes.string,
};
