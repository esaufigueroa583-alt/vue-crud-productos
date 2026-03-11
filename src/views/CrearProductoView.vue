<script setup>

import { ref } from 'vue'
import { useProductoStore } from '../stores/useProductoStore'
import { useRouter } from 'vue-router'

const store = useProductoStore()
const router = useRouter()

const producto = ref({
nombre: '',
precio: 0
})

const guardarProducto = () => {

store.crearProducto(producto.value)

router.push('/productos')

}

</script>

<template>

<div class="container">

<h2 class="mb-4">Crear Producto</h2>

<div class="card shadow p-4">

<form @submit.prevent="guardarProducto">

<div class="mb-3">

<label class="form-label">Nombre</label>

<input
v-model="producto.nombre"
type="text"
class="form-control"
required
>

</div>

<div class="mb-3">

<label class="form-label">Precio</label>

<input
v-model="producto.precio"
type="number"
class="form-control"
required
>

</div>

<button class="btn btn-success">

<i class="bi bi-save"></i> Guardar Producto

</button>

</form>

</div>

</div>

</template>