import PropTypes from "prop-types";
import React, { useRef } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  FormControl,
  InputBase,
  InputLabel,
  NativeSelect,
} from "@material-ui/core";

const InputOutlined = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    color: theme.palette.generalColor.text,
    border: `1px solid ${theme.palette.generalColor.medMain}`,
    fontSize: 12,
    padding: 6,
    select: { outline: "none" },
    "&:focus": {
      borderRadius: 4,
    },
  },
}))(InputBase);

const InputInline = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
    backgroundColor: theme.palette.background.default,
  },
  input: {
    padding: 6,
    position: "relative",
    color: theme.palette.generalColor.text,
    backgroundColor: theme.palette.white,
    border: "none",
    fontWeight: "bold",
    fontSize: 12,
    select: { outline: "none" },
  },
}))(InputBase);

export function SelectOutlined({
  label,
  onChange,
  children,
  styleFormControl = {},
  formControlProps,
  value = [],
  ...props
}) {
  const inputEl = useRef(null);
  return (
    <FormControl {...formControlProps} ref={inputEl}>
      {label && <InputLabel>{label}</InputLabel>}
      <NativeSelect
        onChange={onChange}
        input={<InputOutlined />}
        multiple={true}
        {...props}
      >
        {children}
      </NativeSelect>
    </FormControl>
  );
}
export function SelectInline({
  label,
  onChange,
  children,
  styleFormControl = {},
  formControlProps,
  value = [],
  ...props
}) {
  const inputEl = useRef(null);
  return (
    <FormControl {...formControlProps} ref={inputEl}>
      {label && <InputLabel>{label}</InputLabel>}
      <NativeSelect onChange={onChange} input={<InputInline />} {...props}>
        {children}
      </NativeSelect>
    </FormControl>
  );
}

SelectInline.propTypes = {
  children: PropTypes.any,
  formControlProps: PropTypes.any,
  label: PropTypes.any,
  onChange: PropTypes.any,
  styleFormControl: PropTypes.object,
  value: PropTypes.any,
};

SelectOutlined.propTypes = {
  children: PropTypes.any,
  formControlProps: PropTypes.any,
  label: PropTypes.any,
  onChange: PropTypes.any,
  styleFormControl: PropTypes.object,
  value: PropTypes.any,
};
