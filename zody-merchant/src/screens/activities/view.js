import React from 'react'
import { connect } from 'dva'
import lodash from 'lodash'
import { Layout, Menu, Icon, Row } from 'antd'
import { ImageConst, AppConst } from '../../configs'
import { StatisticalCard } from '../statistic'
import { RcRangePicker, RcCustomerType } from '../../components'
import { CustomerInfoModal } from '../common'
import style from './style.css'
import TableView from './table'

const { Sider, Header, Content } = Layout
class SideBarView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      collapsedMoblie: false,
      modalCustomerInfoVisible: false,
      customerId: '',
      phone: ''
    }
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
    this.onFilterChange()
  }

  onFilterChange = (newFilter = {}) => {
    const filter = this.mergeState(newFilter)
    const recentActivitiesQuery = lodash.pick(filter, ['start', 'end', 'status'])
    this.loadRecentActivities(recentActivitiesQuery)
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

  mergeState = (newFilter = {}) => {
    let { activities: { filter } } = this.props
    filter = lodash.merge(filter, newFilter)
    return filter
  }

  // load  data table activities
  loadRecentActivities = (filter) => {
    const { dispatch } = this.props
    console.log('dta filter ', filter)
    dispatch({
      type: 'activities/recentActivities',
      payload: { ...filter }
    })
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

  showCustomerInfoModal = () => {
    this.setState({
      modalCustomerInfoVisible: true
    })
  }

  closeCustomerInfoModal = () => {
    this.setState({
      modalCustomerInfoVisible: false
    })
  }

  viewCustomerId =(customerId) => {
    this.setState({
      customerId,
      phone: '',
      modalCustomerInfoVisible: true
    })
  }

  viewPhone = (phone) => {
    this.setState({
      customerId: '',
      phone,
      modalCustomerInfoVisible: true
    })
  }

  render() {
    const { collapsed, collapsedMoblie, modalCustomerInfoVisible } = this.state
    const { activities: { data } } = this.props
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
            <Row gutter={16}>
              <RcRangePicker />
              <RcCustomerType />
            </Row>
            <Row gutter={16}>
              <div className={style.sectionTitle}>
                <h4>
                  Thống kê
                </h4>
              </div>
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
            </Row>
            <Row>
              <div className={style.sectionTitle}>
                <h4>
                Lịch sử
                </h4>
              </div>
              <TableView
                data={data}
                viewCustomerId={this.viewCustomerId}
                viewPhone={this.viewPhone}
                showModal={this.showCustomerInfoModal}
              />
            </Row>
            <CustomerInfoModal
              visible={modalCustomerInfoVisible}
              onClose={this.closeCustomerInfoModal}
            />
          </Content>
        </Layout>
      </Layout>
    )
  }
}
export default connect(({ activities }) => ({ activities }))(SideBarView)
