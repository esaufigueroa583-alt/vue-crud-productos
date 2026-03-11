import { defineStore } from 'pinia'

export const useProductoStore = defineStore('productos', {

  state: () => ({
    productos: [

      {
        id: 1,
        nombre: "Laptop",
        precio: 15000,
        imagen: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
      },

      {
        id: 2,
        nombre: "Mouse Gamer",
        precio: 500,
        imagen: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7"
      },

      {
        id: 3,
        nombre: "Teclado Mecánico",
        precio: 1200,
        imagen: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
      },

      {
        id: 4,
        nombre: "Monitor",
        precio: 4500,
        imagen: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf"
      },

      {
        id: 5,
        nombre: "Audífonos Gamer",
        precio: 900,
        imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
      }
    ]
  }),

  actions: {

    crearProducto(producto) {
      producto.id = Date.now()
      this.productos.push(producto)
    },

    actualizarProducto(id, productoActualizado) {
      const index = this.productos.findIndex(p => p.id == id)
      this.productos[index] = { ...this.productos[index], ...productoActualizado }
    },

    eliminarProducto(id) {
      this.productos = this.productos.filter(p => p.id !== id)
    }

  }

})