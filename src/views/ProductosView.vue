<script setup>

import { useProductoStore } from '../stores/useProductoStore'
import { useCarritoStore } from '../stores/useCarritoStore'
import { useRouter } from 'vue-router'

const store = useProductoStore()
const carritoStore = useCarritoStore()
const router = useRouter()

const eliminar = (id) => {
  store.eliminarProducto(id)
}

const agregar = (producto) => {
  carritoStore.agregarAlCarrito(producto)
  alert("Producto agregado al carrito")
}

</script>

<template>

<div class="container mt-4">

<div class="d-flex justify-content-between align-items-center mb-4">

<h2>Productos</h2>

<router-link to="/productos/crear" class="btn btn-success">

<i class="bi bi-plus-circle"></i> Crear Producto

</router-link>

</div>

<div class="row">

<div
class="col-md-4 mb-4"
v-for="producto in store.productos"
:key="producto.id"
>

<div class="card shadow h-100">

<img
:src="producto.imagen"
class="card-img-top"
style="height:200px; object-fit:cover;"
>

<div class="card-body text-center">

<h5 class="card-title">
{{ producto.nombre }}
</h5>

<p class="card-text">
Precio: ${{ producto.precio }}
</p>

<div class="d-flex justify-content-center">

<button
class="btn btn-primary me-2"
@click="agregar(producto)"
>

<i class="bi bi-cart-plus"></i>
Agregar

</button>

<button
class="btn btn-warning me-2"
@click="router.push('/productos/' + producto.id)"
>

<i class="bi bi-pencil"></i>
Editar

</button>

<button
class="btn btn-danger"
@click="eliminar(producto.id)"
>

<i class="bi bi-trash"></i>
Eliminar

</button>

</div>

</div>

</div>

</div>

</div>

<div v-if="store.productos.length === 0" class="alert alert-info">

No hay productos registrados

</div>

</div>

</template>