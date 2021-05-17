<template>
	<div class="sidebar-right">
	  <h2>Images CSV</h2>
	  <textarea :rows="25" placeholder="image_url, id" v-model="images"></textarea>
	</div>
	<input type="checkbox" id="nav-trigger" class="nav-trigger" />
	<label for="nav-trigger"></label>
	<div class="site-wrap">
		<div v-for="(item, index) in items" :key="item.id" class="img-container">
		    <div>#{{ index + 1 }} - {{item.id}}</div>
			<lazy-image
		        :src="item.url"
		        :id="index + ''"
		    ></lazy-image>
	    </div>
	</div>
</template>

<script lang="ts">
import { ref, watch } from "vue";

export default {
	data() {
		const items: { id: string, url: string }[] = []
		const images = ref('')

		watch(images, (newValue, oldValue) => {
    		items.length = 0
  			if (!newValue) {
  				return
  			}

  			let imgString = newValue.trim()
  			if (imgString.length <= 0) {
  				return
  			}

  			let itms  = imgString.trim().split('\n')
  			itms.forEach((val, index) => {
  			  console.log(val)
  			  if (val.indexOf(',') > 0) {
			      let itm = val.split(',')
			      items.push({ id: itm[1].trim(), url: itm[0].trim() })
			  }
		    })
    	})
        return { images, items }
    }
}
</script>

<style scoped>
.img-container {
	height: 350px;
	width: 300px;
	float: left;
	margin-left: 5px;
}


.img-container img {
	height: 300px;
	width: 300px;
}

.site-wrap {
	padding-left: 250px;
}
</style>