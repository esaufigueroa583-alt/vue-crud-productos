<script setup>

import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductoStore } from '../stores/useProductoStore'

const route = useRoute()
const router = useRouter()
const store = useProductoStore()

const id = route.params.id

const producto = ref({
  nombre: '',
  precio: 0
})

const productoEncontrado = store.obtenerProductoPorId(id)

if (productoEncontrado) {
  producto.value = { ...productoEncontrado }
}

const actualizarProducto = () => {

  store.actualizarProducto(id, producto.value)

  router.push('/productos')

}

</script>

<template>

<h2>Editar Producto</h2>

<form @submit.prevent="actualizarProducto">

<div>
<label>Nombre</label>
<input v-model="producto.nombre" type="text" required>
</div>

<br>

<div>
<label>Precio</label>
<input v-model="producto.precio" type="number" required>
</div>

<br>

<button type="submit">
Actualizar Producto
</button>

</form>

</template>