<template>
    
    <el-container style="height:100%; border: 1px solid #eee">
        
        <el-aside width="18%" style="background-color: rgb(238, 241, 246); position:fixed; top:0px; ">
            <el-menu router :default-openeds="['1','2','3']" background-color="#0d1b35" text-color="#fff" active-text-color="#fff">
                
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-upload"></i>云主机服务</template>
                    <el-menu-item index="/ecs/instance">实例</el-menu-item>
                    <el-menu-item index="1-2">云硬盘</el-menu-item>
                    <el-menu-item index="1-2">云硬盘快照</el-menu-item>
                    <el-menu-item index="1-2">镜像</el-menu-item>
                    <el-menu-item index="1-2">安全组</el-menu-item>
                    <el-menu-item index="1-2">SSH密钥</el-menu-item>                    
                </el-submenu>

                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-setting"></i>数据库与缓存</template>
                    <el-menu-item index="1-1">云数据库 RDS</el-menu-item>
                    <el-menu-item index="1-2">缓存 Redis</el-menu-item>                
                </el-submenu>

                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-sort"></i>大数据分析</template>
                    <el-menu-item index="1-1">数据工厂</el-menu-item>
                    <el-menu-item index="1-2">数据计算服务</el-menu-item>
                    <el-menu-item index="1-2">BI 报表</el-menu-item>
                    <el-menu-item index="1-2">数据大屏</el-menu-item>
                    <el-menu-item index="1-2">流式计算</el-menu-item>               
                </el-submenu>

            </el-menu>

        </el-aside>
        
        <el-container style="margin-left:18%">
            
            <el-header style="text-align: right; background-color:rgb(74, 82, 216); margin-left:2px; top:0px; font-size: 12px; position:fixed; z-index:1; width:81%">

                <el-dropdown style="margin-right:30px">
                    <span class="el-dropdown-link" style="color:#ffffff">
                        消息中心<i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item class="clearfix">
                        系统消息
                        <el-badge class="mark" :value="12" />
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

                <el-dropdown style="margin-right:30px">
                    <span class="el-dropdown-link" style="color:#ffffff">
                        工单<i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>提交工单</el-dropdown-item>
                        <el-dropdown-item>我的工单</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>


                <el-dropdown style="margin-right:30px">
                    <span>
                        <a href="http://www.baidu.com" style="text-decoration:none; color:#ffffff">帮助中心</a>
                    </span>
                </el-dropdown>

                <el-dropdown>
                    <span class="el-dropdown-link" style="color:#ffffff">
                        Administrator<i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>退出登录</el-dropdown-item>
                        <el-dropdown-item>修改密码</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            
            </el-header>

            <router-view/>
            
            <!-- <div style="position:fixed; z-index:1;margin-left:10px; margin-top:60px; width: 82%">
                <el-button type="success" icon="el-icon-refresh"></el-button>
                <el-button style="margin-left:83%" type="primary" icon="el-icon-plus" @click="dialogFormVisible = true">创 建</el-button>
            </div>

            <el-dialog title="创建云主机" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="选择镜像" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>

            <el-main style="padding-top:120px">

                <el-table :data="tableData3" height="646" border style="width: 100%" >
                    
                    <el-table-column prop="date" label="实例名称" width="210" header-align="center" align="center">
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

                                                        <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                            <el-button
                            size="mini"
                            type="success"
                            @click="handleDelete(scope.$index, scope.row)">重启</el-button>
                        </template>
                    </el-table-column>
                </el-table>

            </el-main> -->

        </el-container>

    </el-container>

</template>

<script>
    export default {
    data() {
      return {
        tableData3: [{
          date: 'centos7withssh',
          name: '192.168.352.20',
          address: '255.255.248.0',
          property: 'OS：Centos7.4 Kernel:3.32.5342'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
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
