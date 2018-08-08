import React from 'react'
import AccountKit from 'react-facebook-account-kit'
import { Button } from 'antd'
import { AppConst, key } from '../configs'

class RcAccountKitLogin extends React.Component {
  render() {
    const { accountKit } = AppConst
    const { t } = this.props
    return (
      <AccountKit
        appId={accountKit.appId}
        version={accountKit.version}
        onResponse={resp => console.log(resp)}
        csrf={accountKit.csrf}
        language={accountKit.language}
        loginType={accountKit.loginType}
      >
        {p => <Button {...p}>{t(key.loginByPhoneNumber)}</Button>}
      </AccountKit>
    )
  }
}

export default RcAccountKitLogin
