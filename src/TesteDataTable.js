import React, { useState } from "react";
import DataTable from "./components/DataTable";
import DataTableSkeleton from "./skeletons/DataTableSkeleton";
import { orders } from "./orderListMock";
function OrderDataTable() {
  const [loading] = useState(false);
  const [data] = useState(orders);

  const onRowClick = (order) => {};

  const defaultKeys = [
    {
      label: "#",
      field: "id",
      mutator: (value, values) => <div>{value}</div>,
    },
    {
      label: "Data",
      field: "createdAt",
      mutator: (value) => value,
    },
    {
      label: "Identificador",
      field: "name",
      mutator: (value, values) =>
        typeof values.name === "undefined" ? "" : value,
    },
    {
      label: "Pagamento",
      field: "invoiceType",
      mutator: (value, values) =>
        value === "pia" ? "À vista" : `À prazo ${values.paymentTerms} dias`,
    },
    {
      label: "Total",
      field: "total",
      mutator: (value) => value,
    },
  ];

  const massActions = [
    {
      label: "Exportar",
      key: "export",
      action: async (items) => {
        alert(items);
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

  if (loading) {
    return <DataTableSkeleton />;
  } else {
    return (
      <DataTable
        checkbox={true}
        keys={defaultKeys}
        allItems={data.allItems}
        items={data.results}
        meta={data.meta}
        massActions={massActions}
        onRowClick={onRowClick}
        showNavNumbers={false}
        showPagination={false}
      />
    );
  }
}

export default OrderDataTable;
