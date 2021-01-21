import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import {
  Box,
  Checkbox,
  Grid,
  IconButton,
  Link,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core/";
import Button from "./Button";
import { SelectOutlined } from "./Select";
import BodyText from "./BodyText";
import PaginationMeta from "./PaginationMeta";
import { makeStyles } from "@material-ui/core/styles";
import { darken } from "polished";
import withConfirm from "../hocs/withConfirm";
import TablePaginationStyled from "./TablePaginationStyled";
const useStyles = makeStyles((theme) => ({
  checkbox: {
    color: theme.palette.generalColor.main,
  },
  tableBody: {
    "& tr:last-child td": {
      borderBottom: "none !important",
    },
  },
  noBorder: {
    "& tr td": {
      borderBottom: "none !important",
    },
  },
  clickableCell: {
    cursor: "pointer",
  },
  clickableRow: {
    cursor: "pointer",
    "&:hover": {
      background: darken(0.01, theme.palette.generalColor.light),
    },
  },
}));

function DataTable({
  keys,
  items,
  allItems,
  actions,
  checkbox,
  meta,
  onPaginationChange,
  showPagination,
  massActions,
  showNavNumbers,
  stickyHeader,
  head = true,
  onRowClick,
  noBorder,
  onSelect,
  size = "medium",
  toolBar = true,
  confirm,
  ...props
}) {
  const classes = useStyles();
  const [selection, setSelection] = useState([]);
  const [massAction, setMassAction] = useState("");
  const [selectItems, setSelectItem] = useState([]);
  const [statusSelection, setStatusSelection] = useState(false);
  useEffect(() => {
    setMassAction([]);
    typeof allItems !== "undefined" && setSelectItem(allItems);
  }, [selection, selectItems, allItems]);

  useEffect(() => {
    if (statusSelection) {
      onSelect && onSelect(selectItems.map((i) => ({ id: i })));
    } else {
      onSelect && onSelect(selection);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection, selectItems, statusSelection]);

  function changeOnRowClick(onRowClick, classes) {
    if (typeof onRowClick !== "undefined") {
      return classes.clickableRow;
    } else {
      return null;
    }
  }

  const handleSelection = (item) => {
    const itemExists = selection.filter((i) => i.id === item.id).length;
    if (itemExists > 0) {
      const deletedItem = selection.filter((i) => i.id !== item.id);
      setSelection(deletedItem);
    } else {
      const newItem = [...selection, item];
      setSelection(newItem);
    }
  };

  const handleSelectAll = (items) => {
    if (selection.length === items.length) {
      setSelection([]);
      setStatusSelection(false);
    } else {
      setSelection(items);
    }
  };

  const handleMassActionSubmission = () => {
    const mass = massActions.filter((i) => i.key === massAction);
    if (mass.length > 0) {
      if (statusSelection) {
        let selectionAllItems = [];
        selectItems.map((i) => selectionAllItems.push({ id: i }));
        massActions
          .filter((i) => i.key === massAction)[0]
          .action(selectionAllItems);
      } else {
        massActions.filter((i) => i.key === massAction)[0].action(selection);
      }
    }
  };

  const handleClearSelection = (item) => {
    handleSelectAll(item);
    setSelection([]);
    setStatusSelection(false);
  };

  const availableMassActions =
    typeof massActions !== "undefined" &&
    massActions.filter((massAction) => massAction.isAvailable(selection));

  const isSelected = (item) =>
    selection.filter((i) => i.id === item.id).length > 0 ? true : false;

  return (
    <>
      {toolBar && (
        <Box px={2}>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            style={{ height: 50 }}
          >
            <Grid item>
              {typeof massActions !== "undefined" &&
                massActions.length > 0 &&
                selection.length > 0 && (
                  <>
                    <SelectOutlined
                      onChange={(e) => setMassAction(e.target.value)}
                      value={massAction}
                    >
                      <option>Ações em massa</option>
                      {availableMassActions.map((massAction, key) => {
                        return (
                          <option key={key} value={massAction.key}>
                            {massAction.label}
                          </option>
                        );
                      })}
                    </SelectOutlined>{" "}
                    <Button
                      size="small"
                      color="default"
                      variant="outlined"
                      onClick={() => handleMassActionSubmission()}
                    >
                      Aplicar
                    </Button>
                  </>
                )}
            </Grid>
            <Grid item>
              {typeof massActions !== "undefined" &&
                availableMassActions.length > 0 &&
                selectItems.length > 0 &&
                selection.length >= meta.limit && (
                  <>
                    {statusSelection ? (
                      <Box style={{ display: "flex" }}>
                        <BodyText size="lg">
                          Todos os {selectItems.length} foram selecionados.
                        </BodyText>
                        {availableMassActions.length > 0 && (
                          <Link
                            component="button"
                            color="primary"
                            variant="body1"
                            underline="none"
                            onClick={() => handleClearSelection(selectItems)}
                          >
                            Limpar seleção
                          </Link>
                        )}
                      </Box>
                    ) : (
                      <Box style={{ display: "flex" }}>
                        <BodyText size="lg">
                          {selection.length} itens selecionados.
                        </BodyText>
                        {availableMassActions.length > 0 && (
                          <Link
                            component="button"
                            color="primary"
                            variant="body1"
                            underline="none"
                            onClick={() => setStatusSelection(true)}
                          >
                            Selecionar todos os {selectItems.length}
                          </Link>
                        )}
                      </Box>
                    )}
                  </>
                )}
            </Grid>
            {showNavNumbers && (
              <Grid item>
                <PaginationMeta meta={meta} />
              </Grid>
            )}
          </Grid>
        </Box>
      )}
      <TableContainer>
        <Table
          size={"small"}
          stickyHeader={stickyHeader}
          className={clsx({ [classes.noBorder]: noBorder === true })}
        >
          {head && (
            <TableHead>
              <TableRow>
                {checkbox && (
                  <TableCell>
                    <Checkbox
                      style={{ width: 4, height: 4 }}
                      color="primary"
                      className={classes.checkbox}
                      checked={selection.length === items.length}
                      onClick={(e) => handleSelectAll(items)}
                    />
                  </TableCell>
                )}
                {keys.map((key, i) => {
                  return (
                    <TableCell key={i} style={{ width: key.width }}>
                      <b>{key.label}</b>
                    </TableCell>
                  );
                })}
                {typeof actions !== "undefined" && (
                  <TableCell style={{ fontWeight: "bold", minWidth: 70 }}>
                    Ações
                  </TableCell>
                )}
              </TableRow>
            </TableHead>
          )}
          <TableBody className={classes.tableBody}>
            {items.map((item, index) => {
              return (
                <TableRow
                  key={index}
                  className={clsx({
                    [classes.clickableRow]: typeof onRowClick !== "undefined",
                  })}
                >
                  {checkbox && (
                    <TableCell onClick={(e) => handleSelection(item)}>
                      <Checkbox
                        style={{ width: 4, height: 4 }}
                        checked={isSelected(item)}
                        color="primary"
                        className={classes.checkbox}
                      />
                    </TableCell>
                  )}
                  {keys.map((key, i) => {
                    let value;
                    if (key.field.split(".").length > 1) {
                      let fields = key.field.split(".");
                      value =
                        item[fields[0]] !== null
                          ? item[fields[0]][fields[1]]
                          : "";
                    } else {
                      value =
                        typeof item[key.field] !== "undefined"
                          ? item[key.field]
                          : "";
                    }
                    if (typeof key.mutator !== "undefined") {
                      value = key.mutator(
                        value,
                        item,
                        index,
                        key.field,
                        item[key.field]
                      );
                    }
                    return (
                      <TableCell
                        key={i}
                        width={key.width}
                        className={changeOnRowClick(onRowClick, classes)}
                        onClick={
                          typeof onRowClick !== "undefined"
                            ? () => onRowClick(item)
                            : () => null
                        }
                      >
                        {value}
                      </TableCell>
                    );
                  })}
                  {typeof actions !== "undefined" && (
                    <TableCell>
                      {actions.map((action, i) => {
                        const handleConfirmationItem = () =>
                          action.onClick(item);
                        return (
                          <IconButton
                            size="small"
                            key={i}
                            disabled={
                              typeof action.disabled === "undefined"
                                ? false
                                : action.disabled(item, action)
                            }
                            onClick={
                              action.confirmation === true
                                ? confirm(handleConfirmationItem)
                                : () => action.onClick(item)
                            }
                          >
                            {action.label}
                          </IconButton>
                        );
                      })}
                    </TableCell>
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {showPagination && meta.totalPages > 1 && (
        <TablePaginationStyled
          component="div"
          onChangePage={onPaginationChange}
          meta={meta}
          rowsPerPage={meta.perPage}
          rowsPerPageOptions={[]}
        />
      )}
    </>
  );
}

DataTable.propTypes = {
  actions: PropTypes.array,
  allItems: PropTypes.any,
  checkbox: PropTypes.any,
  confirm: PropTypes.func,
  items: PropTypes.any,
  keys: PropTypes.any,
  massActions: PropTypes.any,
  meta: PropTypes.shape({
    limit: PropTypes.any,
    page: PropTypes.number,
    perPage: PropTypes.any,
    totalPages: PropTypes.number,
    totalResults: PropTypes.any,
  }),
  noBorder: PropTypes.bool,
  onPaginationChange: PropTypes.any,
  onRowClick: PropTypes.func,
  onSelect: PropTypes.func,
  showNavNumbers: PropTypes.any,
  showPagination: PropTypes.any,
  stickyHeader: PropTypes.any,
  toolBar: PropTypes.bool,
};

export default withConfirm(DataTable);
