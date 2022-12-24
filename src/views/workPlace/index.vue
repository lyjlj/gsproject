<template>
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName">
      <el-table-column
        prop="date"
        label="序号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="委托单"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="位置号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="件数"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="证书类型"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="称重"
        width="180">
        <!-- 表格上的单个元素定义 -->
        <template slot-scope="scope">
            <router-link :to="{name:'workPlaceDetail'}">{{ scope.row.name }}</router-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="拍照"
        width="180">
        <!-- 表格上的单个元素定义 -->
        <template slot-scope="scope">
            <el-link href="#">{{ scope.row.name }}</el-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="贵金属"
        width="180">
        <!-- 表格上的单个元素定义 -->
        <template slot-scope="scope">
            <el-link href="#">{{ scope.row.name }}</el-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="仪器检测"
        width="180">
        <!-- 表格上的单个元素定义 -->
        <template slot-scope="scope">
            <el-link href="#">{{ scope.row.name }}</el-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="初检"
        width="180">
        <!-- 表格上的单个元素定义 -->
        <template slot-scope="scope">
            <el-link href="#">{{ scope.row.name }}</el-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="复核"
        width="180">
        <!-- 表格上的单个元素定义 -->
        <template slot-scope="scope">
            <el-link href="#">{{ scope.row.name }}</el-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="批准"
        width="180">
        <!-- 表格上的单个元素定义 -->
        <template slot-scope="scope">
            <el-link href="#">{{ scope.row.name }}</el-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="证书制作"
        width="180">
        <!-- 表格上的单个元素定义 -->
        <template slot-scope="scope">
            <el-link href="#">{{ scope.row.name }}</el-link>
        </template>
      </el-table-column>
    </el-table>
  </template>
  <style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
<script>
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }
</script>