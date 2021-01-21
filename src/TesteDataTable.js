import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import DataTable from "./components/DataTable";
import { orders } from "./orderListMock";
function OrderDataTable() {
  const [loading] = useState(false);
  const [data] = useState(orders);

  const onRowClick = (order) => {};

  const defaultKeys = [
    {
      label: "#",
      field: "id",
      mutator: (value, values, index, field, fieldValue) => (
        <Field id={String(value)} name={String(values[field])} />
      ),
    },
    {
      label: "Data",
      field: "createdAt",
      mutator: (value, values, index, field, fieldValue) => (
        <Field id={String(value)} name={String(values[field])} />
      ),
    },
    {
      label: "Identificador",
      field: "name",
      mutator: (value, values, index, field, fieldValue) => (
        <Field id={String(value)} name={String(values[field])} />
      ),
    },
    {
      label: "Pagamento",
      field: "invoiceType",
      mutator: (value, values, index, field, fieldValue) => (
        <Field id={String(value)} name={String(values[field])} />
      ),
    },
    {
      label: "Total",
      field: "total",
      mutator: (value, values, index, field, fieldValue) => (
        <Field id={String(value)} name={String(values[field])} />
      ),
    },
  ];

  const massActions = [
    {
      label: "Exportar",
      key: "export",
      action: async (items) => {
        console.log(items);
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
    <>
      <Formik initialValues={data}>
        {({ status, values, isSubmitting, setFieldValue }) => {
          console.log(values);
          return (
            <Form>
              <DataTable
                checkbox={true}
                keys={defaultKeys}
                allItems={values.allItems}
                items={values.results}
                meta={values.meta}
                massActions={massActions}
                // onRowClick={onRowClick}
                showNavNumbers={false}
                showPagination={false}
              />
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default OrderDataTable;
