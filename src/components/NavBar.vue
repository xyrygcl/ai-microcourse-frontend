<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">AI 微课平台</a>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><router-link class="nav-link" to="/dashboard">首页</router-link></li>
                <li class="nav-item"><router-link class="nav-link" to="/upload">上传 PPT</router-link></li>
                <li class="nav-item"><router-link class="nav-link" to="/profile">个人中心</router-link></li>
                <li class="nav-item"><a class="nav-link" @click="$router.push('/')">退出</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {};
</script>