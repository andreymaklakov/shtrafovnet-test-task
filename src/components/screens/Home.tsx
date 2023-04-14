import React, { FC, useEffect, useState } from "react";

import { Customer, Customers } from "@/interfaces";
import SearchField from "../SearchField";
import Table from "../Table";

import styles from "./Home.module.scss";
import NewCustomerDialog from "../NewCustomerDialog";

const Home: FC<Customers> = ({ customers }) => {
  const [filteredCustomers, setFilteredCustomers] =
    useState<Customer[]>(customers);

  useEffect(() => {
    if (filteredCustomers?.length) {
      setFilteredCustomers((prevState) => {
        const customers = [...prevState];

        return customers.sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      });
    }
  }, [filteredCustomers]);

  const handleSubmit = (value: string) => {
    console.log(value);

    setFilteredCustomers(
      customers.filter(
        (customer) =>
          customer.id?.toLowerCase().includes(value.toLowerCase()) ||
          customer.email.toLowerCase().includes(value.toLowerCase()) ||
          customer.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleAddNewCustomer = (newCustomer: Customer) => {
    setFilteredCustomers((prevState) => [...prevState, newCustomer]);
  };

  return (
    <div className="container">
      <div className={styles.header}>
        <SearchField onSubmit={handleSubmit} />

        <NewCustomerDialog onAdd={handleAddNewCustomer} />
      </div>

      <Table customers={filteredCustomers} />
    </div>
  );
};

export default Home;
