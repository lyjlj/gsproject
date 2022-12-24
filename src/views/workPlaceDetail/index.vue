 
<template>
    <el-table :data="tableData" style="width: 100%" @cell-dblclick="handleEdit">
      <template v-for="(item, index) in columData">
        <el-table-column :label="item.label" :key="index" :prop="item.prop">
          <template slot-scope="scope">
            <el-input
              @blur="blur"
              ref="flag"
              v-if="
                item.edit == true && 'flag' + item.prop + scope.row.index == value
              "
              v-model="scope.row[scope.column.property]"
            ></el-input>
   
            <span v-else>{{ scope.row[scope.column.property] }} </span>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </template>
   
  <script>
  export default {
    data() {
      return {
        value: "",
        columData: [
          {
            label: "序号",
            prop: "name",
            edit: true,
          },
          {
            label: "证书号",
            prop: "address",
          },
          {
            label: "商品条码",
            prop: "address",
            edit: true,
          },
          {
            label: "印记",
            prop: "address",
            edit: true,
          },
          {
            label: "宝石名称",
            prop: "address",
          },
          {
            label: "品类名称",
            prop: "address",
            edit: true,
          },
          {
            label: "图片",
            prop: "address",
          },
          {
            label: "打印质量",
            prop: "address",
            edit: true,
          },
          {
            label: "原始质量",
            prop: "address",
          },
          {
            label: "基础记录人",
            prop: "address",
          },
          {
            label: "质量单位",
            prop: "address",
            edit: true,
          },

          {
            label: "质量备注",
            prop: "address",
            edit: true,
          },
          {
            label: "形状",
            prop: "address",
            edit: true,
          },
          {
            label: "证书类型",
            prop: "address",
          },
          {
            label: "主石重量",
            prop: "address",
            edit: true,
          },
          {
            label: "规格",
            prop: "address",
            edit: true,
          },
        ],
        tableData: [
          {
            index: 0,
            name: "chen虎",
            address: "1518 弄",
          },
          {
            index: 1,
            name: "小虎",
            address: "1517 弄",
          },
          {
            index: 2,
            name: "王虎",
            address: "1519 弄",
          },
          {
            index: 3,
            name: "王小",
            address: " 1516 弄",
          },
        ],
      };
    },
    methods: {
      handleEdit(row, e) {
        console.log(row,e)
        this.value = "flag" + e.property + row.index;
        this.$nextTick(() => {
          if (this.$refs.flag[0]) {
            console.log(this.$refs.flag[0])
            this.$refs.flag[0].focus();
          }
        });
      },
      blur() {
        this.value = "";
      },
    },
  };
  </script>
   
  <style scoped lang="less">
  
  