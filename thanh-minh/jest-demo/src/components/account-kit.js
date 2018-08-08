import React from 'react'
import { Button } from 'antd'
import { translate } from 'react-i18next'
import AccountKit from 'react-facebook-account-kit'
import { KeysConst } from '../configs/locale'
import { AccountKitConst } from '../configs'


class AccountKitView extends React.Component {
  render() {
    const { t } = this.props
    return (
      <div className="account-kit">
        <AccountKit
          appId={AccountKitConst.appId}
          version={AccountKitConst.version}
          onResponse={resp => console.log(resp)}
          csrf={AccountKitConst.csrf}
          language={AccountKitConst.language}
          loginType={AccountKitConst.loginType}
        >
          {p => <Button {...p}>{t(KeysConst.accountKit)}</Button>
      }
        </AccountKit>
      </div>
    )
  }
}
export default translate('translations')(AccountKitView)
