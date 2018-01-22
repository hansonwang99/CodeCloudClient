<template>
    <div>

        <!-- 刷新按钮 创建按钮 -->
        <div style="position:fixed; z-index:1;margin-left:10px; margin-top:60px; width: 82%">
            <el-button type="success" icon="el-icon-refresh"></el-button>
            <el-button style="margin-left:83%" type="primary" icon="el-icon-plus" @click="outerVisible = true">创 建</el-button>
        </div>

        <!-- 创建云节点的弹出式对话框 -->
        <el-dialog title="创建云主机" width="70%" :visible.sync="outerVisible">

            <!-- 预览配置的内嵌对话框 -->
            <el-dialog width="50%" title="云主机配置预览" :visible.sync="innerVisible" append-to-body>
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item  title="操作系统" name="1">
                        <div style="text-align:center;">CentOS 7.4 64Bit</div>
                    </el-collapse-item>
                    <el-collapse-item title="CPU" name="1">
                        <div style="text-align:center">2核</div>
                    </el-collapse-item>
                    <el-collapse-item title="内存" name="1">
                        <div style="text-align:center">8G RAM</div>
                    </el-collapse-item>
                    <el-collapse-item title="硬盘" name="1">
                        <div style="text-align:center">500GB SSD</div>
                    </el-collapse-item>
                    <el-collapse-item title="带宽" name="1">
                        <div style="text-align:center">10 Mbps</div>
                    </el-collapse-item>
                    <el-collapse-item title="购买时常" name="1">
                        <div style="text-align:center">365天</div>
                    </el-collapse-item>
                </el-collapse>
            </el-dialog>

            <el-form style="margin-left:35px; margin-right:30px" :model="form">
                <el-form-item label="操作系统规格：" :label-width="formLabelWidth">
                    <el-select size="large" v-model="form.region" placeholder="操作系统版本 + 位数">
                        <el-option label="CentOS 6.5 64Bit" value="centos"></el-option>
                        <el-option label="Ubuntu" value="ubuntu"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="CPU规格(核数)：" :label-width="formLabelWidth">
                    <el-slider show-tooltip max=8 v-model="value7" :step="1" show-stops show-input>
                    </el-slider>
                </el-form-item>
                <el-form-item label="内存规格(GB) ：" :label-width="formLabelWidth">
                    <el-slider max=32 v-model="value7" :step="1" show-stops show-input>
                    </el-slider>
                </el-form-item>
                <el-form-item label="硬盘规格(GB) ：" :label-width="formLabelWidth">
                    <el-slider max=512 v-model="value7" :step="32" show-stops show-input>
                    </el-slider>
                </el-form-item>
                <el-form-item label="带宽(Mbps) ：" :label-width="formLabelWidth">
                    <el-slider max=100 v-model="value7" :step="2" show-stops show-input>
                    </el-slider>
                </el-form-item>
                <el-form-item style="margin-bottom:0px" label="是否设置密码：" :label-width="formLabelWidth">
                    <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949">
                    </el-switch>
                </el-form-item>
                <el-form-item style="margin-bottom:0px" label="密 码：" :label-width="formLabelWidth">
                    <el-input prefix-icon="el-icon-warning" size="small" style="width: 200px" v-model="input"></el-input>
                </el-form-item>
                <el-form-item label="确认密码：" :label-width="formLabelWidth">
                    <el-input prefix-icon="el-icon-warning" size="small" style="width: 200px" v-model="input"></el-input>
                </el-form-item>
                <el-form-item label="购买时长(天) ：" :label-width="formLabelWidth">
                    <el-slider max=720 v-model="value7" :step="1" show-input>
                    </el-slider>
                </el-form-item>
                <el-form-item style="margin-bottom:0px" label="数   量 ：" :label-width="formLabelWidth">
                    <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="innerVisible = true">预览配置</el-button>
                <el-button @click="outerVisible = false">取 消</el-button>
                <el-button type="primary" @click="outerVisible = false">确 定</el-button>
            </div>
        </el-dialog>  <!-- 创建云节点的弹出式对话框 结束 -->

        <el-main style="padding-top:120px">
            
            <!-- 表格 -->
            <el-table :data="tableData3" height="646" border style="width: 100%" >
                
                <el-table-column prop="date" label="实例名称"  header-align="center" align="center">
                </el-table-column>

                <el-table-column prop="name" label="IP地址" width="140" header-align="center" align="center">
                </el-table-column>

                <el-table-column prop="address" label="子网" header-align="center" align="center" width="140" >
                </el-table-column>

                <el-table-column prop="property" label="配置信息" header-align="center" align="center">
                </el-table-column>

                <el-table-column prop="status" label="状态" header-align="center" width="90" align="center">
                </el-table-column>

                <el-table-column prop="operation" label="操作" header-align="center" width="150" align="center">
                    <template slot-scope="scope">

                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        <el-button size="mini" type="success" @click="handleDelete(scope.$index, scope.row)">重启</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>

    </div>
</template>

<script>

export default {
    name: 'Instance',
    data() {
      return {
          outerVisible: false,
        innerVisible: false,
        value2: 2,
        tableData3: [{
          date: 'codecloud-centos7withssh-3fjdav',
          name: '192.168.352.20',
          address: '255.255.248.0',
          property: 'OS：Centos7.4 Kernel:3.32.5342'
        },{
          date: 'centos7withssh',
          name: '192.168.352.20',
          address: '255.255.248.0',
          property: 'OS：Centos7.4 Kernel:3.32.5342'
        },{
          date: 'centos7withssh',
          name: '192.168.352.20',
          address: '255.255.248.0',
          property: 'OS：Centos7.4 Kernel:3.32.5342'
        },{
          date: 'centos7withssh',
          name: '192.168.352.20',
          address: '255.255.248.0',
          property: 'OS：Centos7.4 Kernel:3.32.5342'
        },{
          date: 'centos7withssh',
          name: '192.168.352.20',
          address: '255.255.248.0',
          property: 'OS：Centos7.4 Kernel:3.32.5342'
        },{
          date: 'centos7withssh',
          name: '192.168.352.20',
          address: '255.255.248.0',
          property: 'OS：Centos7.4 Kernel:3.32.5342'
        },{
          date: 'centos7withssh',
          name: '192.168.352.20',
          address: '255.255.248.0',
          property: 'OS：Centos7.4 Kernel:3.32.5342'
        },{
          date: 'centos7withssh',
          name: '192.168.352.20',
          address: '255.255.248.0',
          property: 'OS：Centos7.4 Kernel:3.32.5342'
        },{
          date: 'centos7withssh',
          name: '192.168.352.20',
          address: '255.255.248.0',
          property: 'OS：Centos7.4 Kernel:3.32.5342'
        },{
          date: 'centos7withssh',
          name: '192.168.352.20',
          address: '255.255.248.0',
          property: 'OS：Centos7.4 Kernel:3.32.5342'
        },{
          date: 'centos7withssh',
          name: '192.168.352.20',
          address: '255.255.248.0',
          property: 'OS：Centos7.4 Kernel:3.32.5342'
        },{
          date: 'centos7withssh',
          name: '192.168.352.20',
          address: '255.255.248.0',
          property: 'OS：Centos7.4 Kernel:3.32.5342'
        },{
          date: 'centos7withssh',
          name: '192.168.352.20',
          address: '255.255.248.0',
          property: 'OS：Centos7.4 Kernel:3.32.5342'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      }
    }
  }

</script>


<style scoped>

.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    
}
  
.el-aside {
    color: rgb(18, 32, 71);
}



</style>