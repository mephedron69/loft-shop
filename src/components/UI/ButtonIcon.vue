<template>
    <div class="iconButton">
        <img :src="require('@/assets/icons/'+ image +'.png')" />
        <p :style="`font-size:${size ? size : 14}px;`"> 
            {{ text }}
        </p>                        
    </div>
</template>
<script>
export default {
    name: "ButtonIcon",
    props: ['image', 'text', 'size']
}
</script>
<style lang="scss" scoped>
.iconButton {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>