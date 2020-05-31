<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>

import Layout from '@/components/Layout';
export default {
  name: 'app',
  components: {
    Layout,
  },
  data:()=>({
  }),
  methods: {
    
  }
  
}
</script>
<style>
  ::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #0000ff);
    border-radius: 12px;
}

::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(#D7DBDD, #0000ff);
}
.title{
  font-size: 32px;
}
@media (max-width: 576px) {
  ::-webkit-scrollbar {
    width: 4px;
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #0000ff);
    border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(#D7DBDD, #0000ff);
}
.title{
  font-size: 28px!important;
  font-weight: 800;
  padding: 10px!important; }
.top-title{
 margin-bottom: 40px;
}
}  
</style>
