<template>
    <div id="components-layout-demo-basic">
        <l-layout @click="test">
            <l-layout-header @click.prevent="test">Header</l-layout-header>
            <l-layout-content @click="test">Content</l-layout-content>
            <l-layout-footer @click="test">Footer</l-layout-footer>
        </l-layout>

    <l-layout>
        <l-layout-header>Header</l-layout-header>
        <l-layout>
            <l-layout-sider>Sider</l-layout-sider>
            <l-layout-content>Content</l-layout-content>
        </l-layout>
        <l-layout-footer>Footer</l-layout-footer>
    </l-layout>

    <l-layout>
      <l-layout-header>Header</l-layout-header>
      <l-layout>
        <l-layout-content>Content</l-layout-content>
        <l-layout-sider>Sider</l-layout-sider>
      </l-layout>
      <l-layout-footer>Footer</l-layout-footer>
    </l-layout>

    <l-layout>
      <l-layout-sider>Sider</l-layout-sider>
      <l-layout>
        <l-layout-header>Header</l-layout-header>
        <l-layout-content>Content</l-layout-content>
        <l-layout-footer>Footer</l-layout-footer>
      </l-layout>
    </l-layout>
    </div>
</template>

<script>
export default {
    name: 'layout',
    methods: {
        test() {
            console.log(1);
        }
    }
}
</script>

<style>
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .le-layout {
    padding-top: 100px;
}
#components-layout-demo-basic .le-layout-header,
#components-layout-demo-basic .le-layout-footer {
    background: #7dbcea;
    color: #fff;
}
#components-layout-demo-basic .le-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .le-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .le-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .le-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .le-layout:last-child {
  margin: 0;
}
</style>
