import React from "react";
import { TablePagination } from "@material-ui/core/";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "12px",
    fontWeight: 400,
    color: theme.palette.generalColor.text,
    "& .MuiSvgIcon-root": {
      width: `0.7em`,
      height: `0.7em`,
    },
  },
}));

export default function TablePaginatioStyled({
  meta,
  onChangePage,
  onChangeRowsPerPage,
  rowsPerPageOptions = [32],
}) {
  const classes = useStyles();
  return (
    <TablePagination
      component="div"
      onChangeRowsPerPage={onChangeRowsPerPage}
      onChangePage={onChangePage}
      count={meta.totalResults}
      page={meta.page - 1}
      rowsPerPage={meta.perPage}
      rowsPerPageOptions={rowsPerPageOptions}
      className={classes.root}
    />
  );
}

TablePaginatioStyled.propTypes = {
  meta: PropTypes.shape({
    page: PropTypes.number,
    perPage: PropTypes.any,
    totalResults: PropTypes.any,
  }),
  onChangePage: PropTypes.any,
};
