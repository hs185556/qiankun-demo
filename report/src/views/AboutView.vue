<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button type="primary" @click="logout">登出</el-button>
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
    <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="500"
      :before-close="handleClose"
    >
      <span>This is a message</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            Confirm
          </el-button>
        </div>
      </template>
    </el-dialog>
    <img class="empty_img" src="@/assets/icon_warning.png" alt="" />
  </div>
</template>

<script>
import { logoinOut } from "@/api/upm";
import { ElMessageBox } from 'element-plus'
export default {
  name: "AboutView",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
      value: '222222222222222',
      dialogVisible: false,
    };
  },
  methods: {
    async logout() {
      await logoinOut();
      localStorage.removeItem("main_token");
      window.location.reload();
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    handleClose(done) {
      ElMessageBox.confirm("Are you sure to close this dialog?")
        .then(() => {
          done();
        })
        .catch(() => {
          // catch error
        });
    },
  },
};
</script>

<style scoped lang="scss">
:deep(.el-table) .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-5);
}
:deep(.el-table) .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-5);
}
</style>
