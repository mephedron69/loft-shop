<template>
    <div class="proCard">
        <img class="img" :src="require('@/assets/images/'+ image +'.png')" />
        <p :style="`font-size:${size ? size : 16}px;`"> {{ text }}  </p>           
    </div>
</template>
<script>
export default {
    name: "ProductCard",
    props: ['image', 'text', 'size']
}
</script>
<style lang="scss" scoped>
.proCard {
    display: flex;
    flex-direction: column;
    .img {
        width: 200px;
    }

    .text1 {
        font-weight: 500;
        font-size: 16px;
    }

}
</style>