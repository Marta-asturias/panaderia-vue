import { defineStore } from "pinia";

export const userProductsStore = defineStore({
  id: "products",
  state: () => ({
    products: [],
  }),

  actions: {
    async fetchProducts() {
      await fetch("http://localhost:8080/api/products")
        .then(resp => resp.json())
        .then((data) => {
          this.products = data;
        });
    },

/*     async getProducts(url = 'http://localhost:8080/api/products', data = {}) {
      const response = await fetch(url, {
        method: 'GET', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(data) 
      })
      .then(response => response.json())
      .then((data) => {
        this.products = data;
      });
    }, */

    async postData(data) {
      const url = 'http://localhost:8080/api/products/create';
      const resp = await fetch(url, {
        method: 'POST', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(data) 
      })
        const json = await resp.json(); 
        this.fetchProducts();
        alert('Acabas de Crear producto')
        window.location.href = "/listProduct";
      
    },

    
        async putData(data, id) {
          console.log(id);
          const url = `http://localhost:8080/api/products/${id}`;
          const resp = await fetch(url, {
            method: 'PUT', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'

            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(data) 
          })
          const json = await resp.json(); 
          this.fetchProducts();
          alert('Acabas de actualizar el producto')
          window.location.href = "/listProduct";


        
      },
  

 
    async deleteData(data) {
      const url = 'http://localhost:8080/api/products/delete';
      const resp = await fetch(url, {
        method: 'DELETE', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
      });
      const json = await resp.json();
      this.fetchProducts();
      alert('Acabas de Eliminar el producto')
      window.location.href = "/listProduct";
     

    },

  },
});

