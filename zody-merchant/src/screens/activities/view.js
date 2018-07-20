import React from 'react'
import { Layout, Menu, Icon, Row } from 'antd'
import { ImageConst, AppConst } from '../../configs'
import { StatisticalCard } from '../statistic'
import { RcRangePicker, RcCustomerType } from '../../components'
import style from './style.css'

const { Sider, Header, Content } = Layout
class SideBarView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      collapsedMoblie: false
    }
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  getScreenSize = () => {
    const screenPx = window.innerWidth
    if (screenPx <= AppConst.screens['xs-max']) return 'xs'
    if ((screenPx >= AppConst.screens['sm-min'])
      && (screenPx <= AppConst.screens['sm-max'])) return 'sm'
    if ((screenPx >= AppConst.screens['md-min'])
      && (screenPx <= AppConst.screens['md-max'])) return 'md'
    if ((screenPx >= AppConst.screens['lg-min'])
      && (screenPx <= AppConst.screens['lg-max'])) return 'lg'
    if (screenPx >= AppConst.screens['xl-min']) return 'xl'
  }

  isMoblieSide = () => {
    return ['sm', 'xs'].includes(this.getScreenSize())
  }

  handleResize = () => {
    this.setState({
      collapsedMoblie: this.isMoblieSide(),
    })
  }

  toggle = () => {
    const { collapsed } = this.state
    this.setState({
      collapsed: !collapsed,
    })
  }


  render() {
    const { collapsed, collapsedMoblie } = this.state
    return (
      <Layout>
        <Sider
          className="app-sidebar"
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={collapsedMoblie ? 70 : 200}
          collapsedWidth={collapsedMoblie ? 0 : 80}
        >
          <img
            className={style.appLogo}
            src={ImageConst.logoZody}
            alt=""
          />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="solution" />
              <span>
                Lịch sử tích điểm
              </span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="logout" />
              <span>
                Dang xuat
              </span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={style.trigger}
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content className={style.content}>
            <Row>
              <RcRangePicker />
              <RcCustomerType />
            </Row>
            <Row gutter={16}>
              <div className={style.sectionTitle}>
                <h4>
                  Thống kê
                </h4>
                <StatisticalCard
                  title="Lượt giao dịch"
                  desc="Theo mốc thời gian"
                  icon={ImageConst.imageDolar}
                  number={10000}
                />
                <StatisticalCard
                  title="Doanh thu"
                  desc="Theo mốc thời gian"
                  icon={ImageConst.imageGiaoDich}
                  number={10000}
                />
                <StatisticalCard
                  title="Zcoin tặng thành công"
                  desc="Theo mốc thời gian"
                  icon={ImageConst.imageZcoin}
                  number={10000}
                />
              </div>
            </Row>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
export default SideBarView
