import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Tag } from 'antd'
import moment from 'moment'
import './index.scss'
import tab from '../../utils/tab'
import { Skeleton } from 'antd'
// import 'antd/lib/skeleton/style'
// import 'antd/lib/tag/style'
import 'antd/dist/antd.css';

/**
 * 首页帖子列表组件
 */
class Topics extends Component {
  render() {
    // 在没有数据时，展示骨架图
    if (this.props.list.length === 0) {
      return <Skeleton active />
    }
    const items = this.props.list.map(item => {
      return (
        <div className="topics" key={item.id}>
          <Link to={'/user/' + item.author.loginname}>
            <img src={item.author.avatar_url} alt="用户头像" />
          </Link>
          <span className="count">
            <em>{item.reply_count}</em>/<em>{item.visit_count}</em>
          </span>
          <Tag color={tab[item.tab] && tab[item.tab].color}>
            {tab[item.tab] && tab[item.tab].name}
          </Tag>
          <Link className="title" to={'/topic/' + item.id}>
            {item.title}
          </Link>
          <span className="time">
            {moment(item.last_reply_at, 'YYYY-MM-DD')
              .startOf('day')
              .fromNow()}
          </span>
        </div>
      )
    })

    return <div>{items}</div>
  }
}

export default Topics
