<template>
    <div>
        <NavBar />
        <div class="container mt-3">
            <h2>上传 PPT</h2>
            <input type="file" @change="onFileChange" class="form-control">
            <button class="btn btn-primary mt-2" @click="upload">上传并生成</button>
        </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import { uploadPPT } from '../api/mock';

export default {
  components:{NavBar},
  data(){ return { file:null } },
  methods:{
    onFileChange(e){ this.file = e.target.files[0]; },
    async upload(){
      if(!this.file) return alert('请选择文件');
      await uploadPPT({ id:Date.now(), title:this.file.name, status:'处理中', time:new Date().toLocaleString(), thumbnail:'../assets/images/course1.png' });
      alert('上传成功（Mock）');
      this.$router.push('/dashboard');
    }
  }
};
</script>