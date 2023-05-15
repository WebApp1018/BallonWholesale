import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons

import Layout from "../layout/AdLayout";
import { Toaster } from "react-hot-toast";
import { ProductService } from "./ProductService";

const AdBalloons = () => {
  let emptyProduct = {
    id: null,
    name: "",
    image: null,
    description: "",
    category: null,
    price: 0,
    quantity: 0,
    rating: 0,
    inventoryStatus: "INSTOCK",
  };

  const [products, setProducts] = useState(null);
  const [product, setProduct] = useState(emptyProduct);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const dt = useRef(null);

  useEffect(() => {
    ProductService.getProducts().then((data) => setProducts(data));
  }, []);

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const imageBodyTemplate = (rowData) => {
    return (
      <img
        src={`https://primefaces.org/cdn/primereact/images/product/${rowData.image}`}
        alt={rowData.image}
        className="shadow-2 border-round"
        style={{ width: "64px" }}
      />
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          // onClick={() => editClient(rowData)}
          style={{
            width: "30px",
            height: "30px",
            padding: 0,
            marginRight: "5px",
          }}
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          // onClick={() => removeClient(rowData)}
          style={{ width: "30px", height: "30px", padding: 0 }}
        />
      </React.Fragment>
    );
  };

  const header = (
    <div className="flex flex-wrap justify-between">
      <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            type="search"
            className="p-inputtext-sm"
            // onInput={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
          />
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button
          label="New"
          size="small"
          icon="pi pi-plus"
          severity="warning"
          // onClick={(e) => openModal("add")}
        />
        <Button
          label="Delete"
          size="small"
          icon="pi pi-trash"
          severity="danger"
          // onClick={(e) => openModal("remove")}
          // disabled={!selectedClients || !selectedClients.length}
        />
        <Button
          label="Export"
          size="small"
          icon="pi pi-upload"
          severity="warning"
          // onClick={exportCSV}
        />
      </div>
    </div>
  );

  return (
    <div>
      <Layout />
      <div className="mt-[60px] p-4 sm:ml-64">
        <div className="card">
          <DataTable
            ref={dt}
            value={products}
            selection={selectedProducts}
            onSelectionChange={(e) => setSelectedProducts(e.value)}
            dataKey="_id"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            globalFilter={globalFilter}
            header={header}
          >
            <Column selectionMode="multiple" exportable={false}></Column>
            <Column
              field="name"
              header="Name"
              sortable
              style={{ minWidth: "16rem" }}
            ></Column>
            <Column
              field="image"
              header="Image"
              body={imageBodyTemplate}
            ></Column>
            <Column
              field="category"
              header="Category"
              sortable
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              body={actionBodyTemplate}
              exportable={false}
              style={{ minWidth: "12rem" }}
            ></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default AdBalloons;
