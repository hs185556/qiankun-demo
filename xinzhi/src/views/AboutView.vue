<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button plain @click="dialogVisible = true" style="width: 200px">
      Click to open the Dialog
    </el-button>
    <div class="responsive-btns">
      <el-input class="btn-item" v-model="value"></el-input>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      border
      class="demo-table"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <el-dialog v-model="dialogVisible" title="Tips" width="500" :before-close="handleClose">
      <span>This is a message</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false"> Confirm </el-button>
        </div>
      </template>
    </el-dialog>
    <!-- 9. 组件混用 -->
    <MyButton></MyButton>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import MyButton from '@/components/MyButton'

const dialogVisible = ref(false)
const value = ref('11111111111111111')
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]

const tableRowClassName = ({ row, rowIndex }) => {
  if (rowIndex === 1) {
    return 'warning-row'
  } else if (rowIndex === 3) {
    return 'success-row'
  }
  return ''
}

const handleClose = (done) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>

<style scoped lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
.demo-table {
  margin-top: 24px;
}
:deep(.el-table) {
  .cell {
    text-align: center !important;
  }
}

:deep(.el-table) .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
:deep(.el-table) .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}

// :deep(.el-input) {
//   .el-input__inner {
//     font-size: 40px !important;
//   }
// }
:deep .el-input {
  .el-input__inner {
    font-size: 40px !important;
  }
}
</style>
