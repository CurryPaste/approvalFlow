export class IcreateNode {
  constructor(key, name, content, icon, color, modal = {}) {
    this.nodeKey = key;
    this.nodeName = name;
    this.defaultContent = content;
    this.nodeIcon = icon;
    this.modalConfig = {...this.modalConfig, ...modal}
  }

  // static nodeKey = "";
  // static nodeName = "";
  // static defaultContent = "";
  // static nodeIcon = () => undefined;
  // modalConfig = {
  //   modalTemplete: () => undefined,
  //   onOk: () => {
  //     console.log('这是data成功')
  //   },
  //   onCancel: () => {
  //     console.log('err')
  //   }
  // }
}

export const a = ''
