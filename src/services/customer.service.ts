import axios from "axios";

import { Customer } from "@/interfaces";
import { API_URL } from "@/confiig";

export const CustomerService = {
  async getCustomers() {
    const { data } = await axios.get<Customer[]>(API_URL);

    return data;
  },

  async createCustomer(customer: Customer) {
    const { data } = await axios.post<Customer>(API_URL, customer);

    return data;
  },
};
