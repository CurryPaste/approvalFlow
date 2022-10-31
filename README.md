# 参考钉钉的审批流组件
> 这是针对打包lib组件模式的文档，[原文档在这里](./OLD-README.md)

## 前置条件
- 要引入 `element-ui` 组件库，最好是全局引入，否则就要把该库中 [index.import.js](./src/components/index.import.js) 的涉及到的组件引入

## 如何使用
```js 
// - install （后续请使用tag稳定版本）
npm install git+http://git.dycjr.net/github/workFlow.git
```

```js
// - import 
import approvalFlow from 'approval-flow';
// 并注册组件 
components: {/* ... */ approvalFlow}`
```
```html
// - use 
<approvalFlow :conf="conf" :form-item-list="formItemList" :process-conditions="processConditions" :node-type-list="nodeTypeList" />
``` 
> 点击查看demo数据 [conf](#demodata-conf) 、 [formItemList](#demodata-formitemlist) 、 [processConditions](#demodata-processconditions) 、 [nodeTypeList](#demodata-nodetypelist)

## Props
|参数|说明|类型|是否必填|
|-|-|-|-|
|conf|节点信息|Object|是|
|formItemList|流程节点表单权限控制——组件列表|Array|是|
|processConditions|用于传递流程图需要的条件|Array|是|
|nodeTypeList|自定义节点数组，[详细](#nodetypelist-自定义新节点)|Array|是|
> 文档最下面预留了一些可以直接使用的[默认数据](#一些参考demodata)
<!-- TODO: 这里后续要再继续补充更细致的说明 -->

## nodeTypeList-自定义新节点
|参数名|说明|类型|是否必填|
|-|-|-|-|
|nodeKey|节点类型唯一key|String|是|
|nodeName|节点名称|String|是|
|defaultContent|节点默认展示的content|String|是|
|color|节点配色|String|是|
|nodeIcon|节点图标(增加节点按钮的icon)|() => (CreateElement/VNode)|是|
|titleIcon|节点块的标题icon|() => (CreateElement/VNode)|否|
|modalConfig|节点对应模态框[配置](#modalconfig)|Object|是|

### modalConfig
|参数名|说明|类型|是否必填|
|-|-|-|-|
|modalTemplete|模态框内容|() => (CreateElement/VNode)|是|
|getContent|模态框点击确定后显示的content|() => String|否|
|onBeforeOk|模态框点击确定之前的函数，resolve则关闭|() => Promise|否|



## 需要注意的点
- 因为 引入该组件的项目，可能对 `element-ui` 有单独的样式处理，所以为了避免 `element-ui` 样式冲突，并没有打包 `element-ui` css 文件

## 打包lib库的相关改动
- `element-ui` 改为按需引入(指的是`babel`[配置](./babel.config.js))
- `main.js` 注册的自定义组件都[单独抽离](./src/components/index.import.js)
- 功能组件用到 `vuex` 的都改为`prop`参数的形式

## 一些参考DemoData

### DemoData-formItemList
```js
export const formItemList = [
  {
    'cmpType': 'common',
    'label': '组织机构',
    'tag': 'fc-org-select',
    'tagIcon': 'dept',
    'defaultValue': {
      'dep': [
        {
          'nodeId': 1,
          'deptId': 1,
          'deptName': 'xxxs公司'
        }
      ]
    },
    'tabList': [
      'dep'
    ],
    'buttonType': 'button',
    'title': '组织机构',
    'searchable': true,
    'maxNum': 1,
    'tagConfig': {
      'type': 'info',
      'closable': true,
      'disable-transitions': false,
      'hit': false,
      'size': 'small',
      'effect': 'light'
    },
    'style': {
      'width': '100%'
    },
    'span': 24,
    'labelWidth': 0,
    'disabled': false,
    'required': true,
    'regList': [],
    'changeTag': true,
    'proCondition': true,
    'asSummary': false,
    'layout': 'colFormItem',
    'formId': 20,
    'renderKey': 1590641662215,
    'vModel': 'field20'
  },
  {
    'cmpType': 'common',
    'label': '姓名',
    'tag': 'el-input',
    'tagIcon': 'input',
    'placeholder': '请输入姓名',
    'span': 12,
    'labelWidth': 0,
    'style': {
      'width': '100%'
    },
    'clearable': true,
    'prepend': '',
    'append': '',
    'prefix-icon': '',
    'suffix-icon': '',
    'maxlength': null,
    'show-word-limit': false,
    'readonly': false,
    'disabled': false,
    'required': false,
    'regList': [],
    'changeTag': true,
    'proCondition': false,
    'asSummary': false,
    'formId': 2,
    'renderKey': 1590647662215,
    'layout': 'colFormItem',
    'vModel': 'field2'
  },
  {
    'cmpType': 'common',
    'label': '学历',
    'tag': 'el-select',
    'tagIcon': 'select',
    'placeholder': '请选择学历',
    'span': 12,
    'labelWidth': 0,
    'style': {
      'width': '100%'
    },
    'clearable': true,
    'disabled': false,
    'required': true,
    'filterable': false,
    'multiple': false,
    'options': [
      {
        'label': '专科',
        'value': '专科'
      },
      {
        'label': '本科',
        'value': '本科'
      },
      {
        'label': '研究生',
        'value': '研究生'
      },
      {
        'label': '博士生',
        'value': '博士生'
      }
    ],
    'regList': [],
    'changeTag': true,
    'proCondition': true,
    'formId': 3,
    'renderKey': 1590647681649,
    'layout': 'colFormItem',
    'vModel': 'field3'
  },
  {
    'cmpType': 'common',
    'label': '性别',
    'tag': 'el-radio-group',
    'tagIcon': 'radio',
    'span': 12,
    'labelWidth': 0,
    'style': {},
    'optionType': 'default',
    'border': false,
    'size': 'medium',
    'disabled': false,
    'required': false,
    'options': [
      {
        'label': '男',
        'value': '男'
      },
      {
        'label': '女',
        'value': '女'
      }
    ],
    'regList': [],
    'changeTag': true,
    'proCondition': true,
    'formId': 4,
    'renderKey': 1590647690138,
    'layout': 'colFormItem',
    'vModel': 'field4',
    'defaultValue': '男'
  },
  {
    'cmpType': 'common',
    'layout': 'rowFormItem',
    'rowType': 'table',
    'tagIcon': 'row',
    'tag': 'fc-input-table',
    'type': 'table',
    'justify': 'start',
    'align': 'top',
    'label': '工作经历',
    'layoutTree': false,
    'children': [
      {
        'cmpType': 'common',
        'label': '日期范围',
        'tag': 'fc-date-duration',
        'showDuration': false,
        'tagIcon': 'date-range',
        'defaultValue': null,
        'span': 24,
        'labelWidth': 0,
        'style': {
          'width': '100%'
        },
        'type': 'daterange',
        'range-separator': '至',
        'start-placeholder': '开始日期',
        'end-placeholder': '结束日期',
        'disabled': false,
        'clearable': true,
        'required': false,
        'format': 'yyyy-MM-dd',
        'value-format': 'yyyy-MM-dd',
        'readonly': false,
        'regList': [],
        'changeTag': true,
        'proCondition': true,
        'asSummary': false,
        'formId': 6,
        'renderKey': 1590647800330,
        'layout': 'colFormItem',
        'vModel': 'field6'
      },
      {
        'cmpType': 'common',
        'label': '公司名称',
        'tag': 'el-input',
        'tagIcon': 'input',
        'placeholder': '请输入公司名称',
        'span': 24,
        'labelWidth': 0,
        'style': {
          'width': '100%'
        },
        'clearable': true,
        'prepend': '',
        'append': '',
        'prefix-icon': '',
        'suffix-icon': '',
        'maxlength': null,
        'show-word-limit': false,
        'readonly': false,
        'disabled': false,
        'required': true,
        'regList': [],
        'changeTag': true,
        'proCondition': false,
        'asSummary': false,
        'formId': 7,
        'renderKey': 1590647831276,
        'layout': 'colFormItem',
        'vModel': 'field7'
      },
      {
        'cmpType': 'common',
        'label': '岗位',
        'tag': 'el-select',
        'tagIcon': 'select',
        'placeholder': '请选择岗位',
        'span': 24,
        'labelWidth': 0,
        'style': {
          'width': '100%'
        },
        'clearable': true,
        'disabled': false,
        'required': false,
        'filterable': false,
        'multiple': false,
        'options': [
          {
            'label': '前端',
            'value': '前端'
          },
          {
            'label': '后端',
            'value': '后端'
          },
          {
            'label': '其他',
            'value': '其他'
          }
        ],
        'regList': [],
        'changeTag': true,
        'proCondition': true,
        'formId': 8,
        'renderKey': 1590647845533,
        'layout': 'colFormItem',
        'vModel': 'field8'
      },
      {
        'cmpType': 'common',
        'label': '附件',
        'tag': 'el-upload',
        'tagIcon': 'upload',
        'action': 'https://jsonplaceholder.typicode.com/posts/',
        'defaultValue': [],
        'labelWidth': 0,
        'disabled': false,
        'required': false,
        'accept': '',
        'name': 'file',
        'auto-upload': true,
        'showTip': false,
        'buttonText': '点击上传附件',
        'fileSize': 20,
        'sizeUnit': 'MB',
        'list-type': 'text',
        'multiple': false,
        'regList': [],
        'changeTag': true,
        'proCondition': false,
        'asSummary': false,
        'formId': 9,
        'span': 24,
        'renderKey': 1590647866199,
        'layout': 'colFormItem',
        'vModel': 'field9'
      }
    ],
    'actionText': '添加',
    'tableConf': {},
    'showDivider': false,
    'show-summary': false,
    'formId': 5,
    'span': 24,
    'renderKey': 1590647776442,
    'vModel': 'field5',
    'componentName': 'row5',
    'gutter': 15
  }
];
```
### DemoData-conf
```js
export const conf = {
  'type': 'start',
  'content': '所有人',
  'properties': {
    'title': '发起人',
    'initiator': 'ALL',
    'formOperates': [
      {
        'formId': 2,
        'formOperate': 2
      },
      {
        'formId': 3,
        'formOperate': 2
      },
      {
        'formId': 4,
        'formOperate': 2
      },
      {
        'formId': 5,
        'formOperate': 2
      },
      {
        'formId': 6,
        'formOperate': 2
      },
      {
        'formId': 7,
        'formOperate': 2
      },
      {
        'formId': 8,
        'formOperate': 2
      },
      {
        'formId': 9,
        'formOperate': 2
      }
    ]
  },
  'nodeId': 'Gb2',
  'childNode': {
    'type': 'approver',
    'content': '发起人自选',
    'properties': {
      'title': '审批人',
      'assigneeType': 'optional',
      'formOperates': [
        {
          'formId': 2,
          'formOperate': 1
        },
        {
          'formId': 3,
          'formOperate': 1
        },
        {
          'formId': 4,
          'formOperate': 1
        },
        {
          'formId': 5,
          'formOperate': 1
        },
        {
          'formId': 6,
          'formOperate': 1
        },
        {
          'formId': 7,
          'formOperate': 1
        },
        {
          'formId': 8,
          'formOperate': 1
        },
        {
          'formId': 9,
          'formOperate': 1
        }
      ],
      'counterSign': true,
      'optionalMultiUser': false,
      'optionalRange': 'ALL'
    },
    'nodeId': 'Nb2',
    'prevId': 'Gb2'
  },
  'conditionNodes': [
    {
      'type': 'condition',
      'content': '[学历 = 博士生] \n',
      'properties': {
        'title': '条件1',
        'conditions': [
          {
            'formId': 3,
            'conditionValue': '博士生'
          }
        ],
        'initiator': null,
        'priority': 0,
        'isDefault': false
      },
      'nodeId': 'Lb2',
      'prevId': 'Gb2',
      'childNode': {
        'type': 'approver',
        'content': '张三',
        'properties': {
          'title': '审批人',
          'approvers': [
            {
              'nodeId': 20,
              'userId': 20,
              'userName': '张三',
              'deptId': 1
            }
          ],
          'assigneeType': 'user',
          'formOperates': [
            {
              'formId': 2,
              'formOperate': 1
            },
            {
              'formId': 3,
              'formOperate': 1
            },
            {
              'formId': 4,
              'formOperate': 1
            },
            {
              'formId': 5,
              'formOperate': 1
            },
            {
              'formId': 6,
              'formOperate': 1
            },
            {
              'formId': 7,
              'formOperate': 1
            },
            {
              'formId': 8,
              'formOperate': 1
            },
            {
              'formId': 9,
              'formOperate': 1
            }
          ],
          'counterSign': true,
          'optionalMultiUser': false,
          'optionalRange': 'ALL'
        },
        'nodeId': 'Wb2',
        'prevId': 'Lb2',
        'childNode': {
          'type': 'copy',
          'content': 'xxx研发部',
          'properties': {
            'title': '抄送人',
            'menbers': {
              'dep': [
                {
                  'nodeId': 4,
                  'deptId': 4,
                  'deptName': 'xxx研发部',
                  'parentDeptId': 1
                }
              ]
            },
            'userOptional': true
          },
          'nodeId': 'Yb2',
          'prevId': 'Wb2'
        }
      }
    },
    {
      'type': 'condition',
      'content': '其他情况进入此流程',
      'properties': {
        'title': '条件2',
        'conditions': [],
        'initiator': null,
        'priority': 1,
        'isDefault': true
      },
      'nodeId': 'Mb2',
      'prevId': 'Gb2',
      'childNode': {
        'type': 'approver',
        'content': '王五',
        'properties': {
          'title': '审批人',
          'approvers': [
            {
              'nodeId': 40,
              'userId': 40,
              'userName': '王五',
              'deptId': 1
            }
          ],
          'assigneeType': 'user',
          'formOperates': [
            {
              'formId': 2,
              'formOperate': 1
            },
            {
              'formId': 3,
              'formOperate': 1
            },
            {
              'formId': 4,
              'formOperate': 1
            },
            {
              'formId': 5,
              'formOperate': 1
            },
            {
              'formId': 6,
              'formOperate': 1
            },
            {
              'formId': 7,
              'formOperate': 1
            },
            {
              'formId': 8,
              'formOperate': 1
            },
            {
              'formId': 9,
              'formOperate': 1
            }
          ],
          'counterSign': true,
          'optionalMultiUser': false,
          'optionalRange': 'ALL'
        },
        'nodeId': 'Xb2',
        'prevId': 'Mb2'
      }
    }
  ]
};
```
### DemoData-processConditions
```js
export const processConditions = [
  {
    'cmpType': 'common',
    'label': '性别',
    'tag': 'el-radio-group',
    'tagIcon': 'radio',
    'span': 12,
    'labelWidth': 0,
    'style': {},
    'optionType': 'default',
    'border': false,
    'size': 'medium',
    'disabled': false,
    'required': true,
    'options': [
      {
        'label': '男',
        'value': '男'
      },
      {
        'label': '女',
        'value': '女'
      }
    ],
    'regList': [],
    'changeTag': true,
    'proCondition': true,
    'formId': 4,
    'renderKey': 1590647690138,
    'layout': 'colFormItem',
    'vModel': 'field4',
    'defaultValue': '男'
  },
  {
    'cmpType': 'common',
    'label': '学历',
    'tag': 'el-select',
    'tagIcon': 'select',
    'placeholder': '请选择学历',
    'span': 12,
    'labelWidth': 0,
    'style': {
      'width': '100%'
    },
    'clearable': true,
    'disabled': false,
    'required': true,
    'filterable': false,
    'multiple': false,
    'options': [
      {
        'label': '专科',
        'value': '专科'
      },
      {
        'label': '本科',
        'value': '本科'
      },
      {
        'label': '研究生',
        'value': '研究生'
      },
      {
        'label': '博士生',
        'value': '博士生'
      }
    ],
    'regList': [],
    'changeTag': true,
    'proCondition': true,
    'formId': 3,
    'renderKey': 1590647681649,
    'layout': 'colFormItem',
    'vModel': 'field3'
  },
  {
    'cmpType': 'common',
    'label': '组织机构',
    'tag': 'fc-org-select',
    'tagIcon': 'dept',
    'defaultValue': {
      'dep': [
        {
          'nodeId': 1,
          'deptId': 1,
          'deptName': 'xxxs公司'
        }
      ]
    },
    'tabList': [
      'dep'
    ],
    'buttonType': 'button',
    'title': '组织机构',
    'searchable': true,
    'maxNum': 1,
    'tagConfig': {
      'type': 'info',
      'closable': true,
      'disable-transitions': false,
      'hit': false,
      'size': 'small',
      'effect': 'light'
    },
    'style': {
      'width': '100%'
    },
    'span': 24,
    'labelWidth': 0,
    'disabled': false,
    'required': true,
    'regList': [],
    'changeTag': true,
    'proCondition': true,
    'asSummary': false,
    'layout': 'colFormItem',
    'formId': 20,
    'renderKey': 1590641662215,
    'vModel': 'field20'
  }
];
```
### DemoData-nodeTypeList
```js
// nodeTypeList:
// nodeIcon是一个 .vue 组件
// 推荐直接编写vue组件，通过 this.$createElement的方式，直接引入组件
const nodeTypeList= [
  {
    nodeKey: 'uniqueId1',
    nodeName: 'node-1',
    defaultContent: '这是一个新节点的content',
    color: 'green',
    nodeIcon: () => this.$createElement(nodeIcon, { props: { isSvg: true, content: 'wenben', color: 'green', isSmall: false }}),
    titleIcon: () => this.$createElement(nodeIcon, { props: { isSvg: true, content: 'wenben', color: 'white', isSmall: true }}),
    modalConfig: {
      modalTemplete: () => this.$createElement('div', 'asdfasdfasdfasdfasdfasdfasdfasdf')
    }
  },
  {
    nodeKey: 'uniqueId2',
    nodeName: 'node-2',
    defaultContent: '这是一个新节点2222的content',
    color: 'rgba(0, 0, 0, 0.8)',
    /** 考虑到大小可能不一样 */
    titleIcon: () => this.$createElement(nodeIcon, { props: { isSvg: true, content: 'chaosong', color: 'white', isSmall: true }}),
    nodeIcon: () => this.$createElement(nodeIcon, { props: { isSvg: false, content: '抄送类型', color: 'rgba(0, 0, 0, 0.8)', isSmall: false }}),
    modalConfig: {
      modalTemplete: () => this.$createElement(OrderPage, { props: { orderNo: 'GF221026181147000296', pageKey: 'OrderDetail' }}),
      onBeforeOk: (renderDomRef) => new Promise((resolve, reject) => {
        console.log(' 1s后关闭', renderDomRef);
        setTimeout(() => {
          resolve();
        }, 1000);
      }),
      getContent: (renderDomRef) => {
        console.log(renderDomRef, 'renderDomRef');
        return '这是点击了保存之后的 content';
      }
    }
  }
]
```


