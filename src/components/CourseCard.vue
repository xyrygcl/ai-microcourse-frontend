<template>
    <div class="card col-md-3 mb-3">
        <img :src="course.thumbnail" class="card-img-top" />
        <div class="card-body">
            <h5 class="card-title">{{ course.title }}</h5>
            <p class="card-text">生成时间: {{ course.time }}</p>
            <span :class="course.status==='完成' ? 'badge bg-success' : 'badge bg-warning'">{{ course.status }}</span>
        </div>
    </div>
</template>

<script>
export default {
  props:['course']
};
</script>