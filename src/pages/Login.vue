<template>
    <div class="container mt-5">
        <h2>µÇÂ¼ AI Î¢¿ÎÆ½Ì¨</h2>
        <input v-model="username" class="form-control mb-3" placeholder="ÓÃ»§Ãû">
        <input type="password" v-model="password" class="form-control mb-3" placeholder="ÃÜÂë">
        <button class="btn btn-primary" @click="doLogin">µÇÂ¼</button>
    </div>
</template>

<script>
import { login } from '../api/mock';
export default {
  data(){ return { username:'', password:'' } },
  methods:{
    async doLogin(){
      const res = await login(this.username,this.password);
      if(res.success) this.$router.push('/dashboard');
    }
  }
};
</script>