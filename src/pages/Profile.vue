<template>
    <div>
        <NavBar />
        <div class="container mt-3">
            <h2>个人中心</h2>
            <p>用户名: Alice (Mock)</p>
            <p>邮箱: alice@example.com</p>
        </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
export default { components:{NavBar} };
</script>