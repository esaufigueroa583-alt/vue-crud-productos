<script setup>

import { useCarritoStore } from '../stores/useCarritoStore'

const carritoStore = useCarritoStore()

</script>

<template>

<h2>Carrito de Compras</h2>

<div v-if="carritoStore.carrito.length === 0" class="alert alert-info">

El carrito está vacío

</div>

<table v-else class="table table-striped">

<thead>

<tr>
<th>Producto</th>
<th>Precio</th>
<th>Acción</th>
</tr>

</thead>

<tbody>

<tr v-for="producto in carritoStore.carrito" :key="producto.id">

<td>{{ producto.nombre }}</td>

<td>${{ producto.precio }}</td>

<td>

<button class="btn btn-danger btn-sm"
@click="carritoStore.eliminarDelCarrito(producto.id)">

<i class="bi bi-trash"></i> Eliminar

</button>

</td>

</tr>

</tbody>

</table>

<h4>Total artículos: {{ carritoStore.totalArticulos }}</h4>

<h4>Total precio: ${{ carritoStore.totalPrecio }}</h4>

<button class="btn btn-danger" @click="carritoStore.vaciarCarrito()">

<i class="bi bi-cart-x"></i> Vaciar carrito

</button>

</template>