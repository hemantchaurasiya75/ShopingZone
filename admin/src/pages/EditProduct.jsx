import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import EditproductMain from '../components/products/EditproductMain';

function EditProduct({ match }) {
    const productId = match.params.id;
    return (
      <>
        <Sidebar />
        <main className="main-wrap">
          <Navbar />
          <EditproductMain productId={productId} />
        </main>
      </>
    );
}

export default EditProduct;