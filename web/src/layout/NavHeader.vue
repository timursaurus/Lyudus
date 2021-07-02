<template>
    <div>
        <p>{{ time }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            time: null,
        }
    },
    mounted() {
        this.newDate()
    },
    methods: {
        newDate() {
            let time = new Date().toLocaleTimeString()
            this.time = time
        }
    }
}
</script>



<style>
</style>