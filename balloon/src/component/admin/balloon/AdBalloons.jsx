import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons

import { Toaster } from "react-hot-toast";
import notify from "../../../utils/notify";
import { showProduct, getProdcutAsync } from "../../../app/productSlice";
import { showCategory, getCategoryAsync } from "../../../app/categorySlice";
import Layout from "../layout/AdLayout";
import AdAddBalloon from "./AdAddBalloon";
import AdEditBalloon from "./AdEditBalloon";
import AdRemoveBalloon from "./AdRemoveBalloon";

const AdBalloons = () => {
  const dispatch = useDispatch();
  const products = useSelector(showProduct);
  const categories = useSelector(showCategory);

  const [product, setProduct] = useState();
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [editProductData, setEditProductData] = useState({});
  const [globalFilter, setGlobalFilter] = useState(null);
  const [showModal, setShowModal] = useState("none");
  const dt = useRef(null);

  useEffect(() => {
    dispatch(getProdcutAsync());
    dispatch(getCategoryAsync());
  }, []);

  useEffect(() => {
    console.log("products", products);
    if (products) {
      setProduct(products);
    }
  }, [products]);

  // useEffect(() => {
  //   if (categories) {
  //     setCategory(categories);
  //   }
  // }, [categories]);

  const openModal = (e) => {
    window.scrollTo(0, 0);
    setShowModal(e);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal("none");
    document.body.style.overflow = "auto";
  };

  const editProduct = (rowData) => {
    setEditProductData(rowData);
    openModal("edit");
  };

  const removeProduct = (rowData) => {
    openModal("remove");
  };

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const setNotification = (e, from) => {
    if (e) {
      if (from === "add") {
        notify("You have successfully added new product!", 1);
      } else if (from === "edit") {
        notify("You have successfully updated a product!", 1);
      } else if (from === "remove") {
        notify("Product successfully removed!", 1);
      }
    }
  };

  const imageBodyTemplate = (rowData) => {
    return (
      <img
        src={`${process.env.REACT_APP_API_BASE_URL}upload/products/${rowData.image}`}
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
          onClick={() => editProduct(rowData)}
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
          onClick={() => removeProduct(rowData)}
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
            onInput={(e) => setGlobalFilter(e.target.value)}
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
          onClick={(e) => openModal("add")}
        />
        <Button
          label="Delete"
          size="small"
          icon="pi pi-trash"
          severity="danger"
          onClick={(e) => openModal("remove")}
          disabled={!selectedProducts || !selectedProducts.length}
        />
        <Button
          label="Export"
          size="small"
          icon="pi pi-upload"
          severity="warning"
          onClick={exportCSV}
        />
      </div>
    </div>
  );

  return (
    <div>
      <Toaster position="top-right" />
      <Layout />
      <div className="mt-[60px] p-4 sm:ml-64">
        <div className="card">
          <DataTable
            ref={dt}
            value={product}
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
              field="code"
              header="Code"
              sortable
              style={{ minWidth: "10rem" }}
            ></Column>
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
      <AdAddBalloon
        categories={categories}
        show={showModal}
        closeModal={closeModal}
        success={(e) => setNotification(e, "add")}
      />
      <AdEditBalloon
        productDetail={editProductData}
        categories={categories}
        show={showModal}
        closeModal={closeModal}
        success={(e) => setNotification(e, "edit")}
      />
      <AdRemoveBalloon
        selectedProducts={selectedProducts}
        show={showModal}
        closeModal={closeModal}
        success={(e) => setNotification(e, "remove")}
      />
      <div
        className="absolute w-full h-[100%] bg-[#010101] bg-opacity-80 z-[50] left-0 top-0"
        style={{ display: showModal === "none" ? "none" : "block" }}
      />
    </div>
  );
};

export default AdBalloons;
