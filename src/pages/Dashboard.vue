<template>
    <div>
        <NavBar />
        <div class="container mt-3">
            <h2>ÎÒµÄÎ¢¿Î</h2>
            <div class="row">
                <CourseCard v-for="c in courses" :key="c.id" :course="c" />
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import CourseCard from '../components/CourseCard.vue';
import { getCourses } from '../api/mock';

export default {
  components:{NavBar, CourseCard},
  data(){ return { courses: [] } },
  async mounted(){
    const res = await getCourses();
    this.courses = res.list;
  }
};
</script>