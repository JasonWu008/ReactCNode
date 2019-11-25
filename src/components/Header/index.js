import React, { Component } from 'react'
import './index.scss'
import { Modal } from 'antd'
//import 'antd/es/modal/style/css'

/**
 * 网站的顶部Header组件
 */
class Header extends Component {
  /**
   * 给state设置默认值
   * P.S. 另外一种设置方法见ProfilePanel/Index.js文件
   */
  state = { visible: false }

  /**
   * 隐藏Modal(模态)框
   */
  handleOk = () => {
    this.setState({
      visible: false
    })
  }
  /**
   * 显示Modal(模态)框
   */
  showModal = () => {
    this.setState({
      visible: true
    })
  }

  render() {
    return (
      <div className="header">
        <div>
          <a href="/">
            <img
              src={require('../../assets/image/cnodejs.svg')}
              alt="网站logo"
            />
          </a>
          <span onClick={this.showModal}>关于</span>
        </div>
        <Modal
          title="关于本项目"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleOk}
        >
          {/* P.S. 当使用_blank时有一个容易忽略的安全漏洞，需要注意：https://developers.google.com/web/tools/lighthouse/audits/noopener?hl=zh-cn */}
          <p>
            作者：吴宇鹏
          </p>
          <div>
            <p>技术栈：</p>
            <ul>
              <li>React</li>
              <li>React Router</li>
              <li>Ant Design</li>
              <li>Axios</li>
            </ul>
          </div>
        </Modal>
      </div>
    )
  }
}

export default Header