import { ApolloProvider } from "@apollo/client";
import client  from '../pages/apollo-client'
import ProductListing from "./ProductListing";
import React from 'react'

const Product = () => {
  return (
    // <ApolloProvider client={client}>
        <ProductListing/>
    // </ApolloProvider>
  )
}

export default Product;