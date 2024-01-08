<template>
    <div class="citacao">
        <slot name="autor"></slot>
        <slot name="texto"></slot>
        <div class="autor">
            <slot name="fonte"></slot>
            
        </div>
    </div>
</template>

<script>
export default {
    created(){
        console.log('created')
    },
    destroyed(){
        console.log('destroyed')
    },
    activated(){
        console.log('activated')
    },
    deactivated(){
        console.log('deactivated')
    },

    //ativado e desativado so funciona quando o componente esta dentro do keep alive fora dele o componente é criado e desctruido
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }

    h1{
        color: green;
    }

    .autor{
        float: right;
    }
</style>
