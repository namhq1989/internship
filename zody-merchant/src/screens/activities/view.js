import React from 'react'
import { connect } from 'dva'
import lodash from 'lodash'
import { Layout, Menu, Icon, Row } from 'antd'
import { ImageConst, AppConst } from '../../configs'
import { StatisticalCard } from '../statistic'
import { RcRangePicker, RcCustomerType } from '../../components'
import { CustomerInfoModalView } from '../common/customer-info-modal'
import style from './style.css'
import TableView from './table'

const { Sider, Header, Content } = Layout
class ActivitiesView extends React.Component {
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

  // Change filter
  onFilterChange = (newFilter = {}) => {
    const filter = this.mergeState(newFilter)

    const statisticQuery = lodash.pick(filter, ['start', 'end', 'status'])
    this.loadStatistic(statisticQuery)

    const recentActivitiesQuery = lodash.pick(filter, ['start', 'end', 'status', 'sort'])
    this.loadRecentActivities(recentActivitiesQuery)
  }

  onChangeTable = (pagination, filters, sorter) => {
    const { field, order } = sorter
    let sort = field
    if (order === 'descend') {
      sort = `-${sort}`
    }
    const filter = this.mergeState({ sort })
    const recentActivitiesQuery = lodash.pick(filter, ['start', 'end', 'status', 'page', 'sort'])
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
    dispatch({
      type: 'activities/recentActivities',
      payload: { ...filter }
    })
  }

  loadStatistic = (filter) => {
    const { dispatch } = this.props
    dispatch({
      type: 'activities/fetch',
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
    const { dispatch } = this.props
    dispatch({
      type: 'customerInfo/resetState',
      payload: {}
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

  // Rangepicker selected
  dateSelected = (start, end) => {
    this.onFilterChange({ start, end })
  }

  // CustomerType selected
  customerTypeSelected = (status) => {
    this.onFilterChange({ status })
  }

  render() {
    const { collapsed, collapsedMoblie, modalCustomerInfoVisible, customerId, phone } = this.state
    const { activities: { statistic, filter, data } } = this.props
    let coinDesc = 'Cho thành viên đã sử dụng app'
    if (filter.status === 'all') {
      coinDesc = 'Cho tất cả thành viên'
    } else if (filter.status === 'unregistered') {
      coinDesc = 'Cho thành viên chưa đăng ký app'
    }
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
              <RcRangePicker
                start={filter.start}
                end={filter.end}
                onOk={this.dateSelected}
              />
              <RcCustomerType
                initValue={filter.status}
                onChange={this.customerTypeSelected}
              />
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
                icon={ImageConst.imageGiaoDich}
                number={statistic.totalBill}
              />
              <StatisticalCard
                title="Doanh thu"
                desc="Theo mốc thời gian"
                icon={ImageConst.imageDolar}
                number={statistic.revenue}
              />
              <StatisticalCard
                title="Zcoin tặng thành công"
                desc={coinDesc}
                icon={ImageConst.imageZcoin}
                number={statistic.releasedCoin}
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
                onChange={this.onChangeTable}
              />
            </Row>
            <CustomerInfoModalView
              visible={modalCustomerInfoVisible}
              onClose={this.closeCustomerInfoModal}
              customerId={customerId}
              phone={phone}
            />
          </Content>
        </Layout>
      </Layout>
    )
  }
}
export default connect(({ activities }) => ({ activities }))(ActivitiesView)
