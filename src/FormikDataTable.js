import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import Button from "./components/Button";
import DataTable from "./components/DataTable";
import { orders } from "./orderListMock";
function FormikDataTable() {
  const [data] = useState(orders);

  const onRowClick = (row) => {};

  const defaultKeys = [
    {
      label: "#",
      field: "id",
    },
    {
      label: "Nome",
      field: "name",
      mutator: (
        value,
        item,
        index,
        columnIndex,
        field,
        fieldValue,
        setFieldValue
      ) => (
        <Field
          component={TextField}
          id={field}
          name={field}
          value={fieldValue}
          onChange={(e) =>
            setFieldValue(`results[${index}][${field}]`, e.target.value)
          }
        />
      ),
    },

    {
      label: "Pagamento",
      field: "invoiceType",
      mutator: (
        value,
        item,
        index,
        columnIndex,
        field,
        fieldValue,
        setFieldValue
      ) => (
        <Field
          id={String(field)}
          name={field}
          value={fieldValue}
          onChange={(e) =>
            setFieldValue(`results[${index}][${field}]`, e.target.value)
          }
        />
      ),
    },
    {
      label: "Total",
      field: "total",
      mutator: (
        value,
        item,
        index,
        columnIndex,
        field,
        fieldValue,
        setFieldValue
      ) => (
        <Field
          id={String(field)}
          name={field}
          value={fieldValue}
          onChange={(e) =>
            setFieldValue(`results[${index}][${field}]`, e.target.value)
          }
        />
      ),
    },
  ];

  const massActions = [
    {
      label: "Exportar",
      key: "export",
      action: async (items) => {
        // console.log(items);
      },
      isAvailable: (items) =>
        items.filter(
          (i) =>
            i.status !== "cancelled" &&
            i.status !== "draft" &&
            i.status !== "processing" &&
            i.status !== "pending-approval" &&
            i.status !== "payment-pending"
        ).length === 0,
    },
  ];

  return (
    <Formik initialValues={data}>
      {({ status, values, isSubmitting, setFieldValue }) => {
        return (
          <Form>
            <Field
              name="results"
              component={DataTable}
              checkbox={true}
              keys={defaultKeys}
              items={values.results}
              meta={values.meta}
              massActions={massActions}
              onRowClick={onRowClick}
              showNavNumbers={false}
              showPagination={false}
              setFieldValue={setFieldValue}
            />

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              onClick={() => console.log(values)}
            >
              Salvar
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikDataTable;
