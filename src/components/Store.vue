<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col bg-light">
                <a class="navbar-brand" ><h4 class="font-weight-bolder" style="font-size: 50px;"> Atelier LAMP</h4></a>
            </div>
        </div>
        <div class="row">
            <div class="col-3 bg-transparent p-2">
                <CatControls />
            </div>
            <div class="col-9 bg-dark p-2">
                <ProductsList/>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductsList from "./ProductsList";
    import CatControls from "./CatControls";
    export default {
        name: "store",
        components: { ProductsList, CatControls }
    }
</script>

<style scoped>

</style>
