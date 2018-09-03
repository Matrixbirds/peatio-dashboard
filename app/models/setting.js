export default [
  {
    name: 'Trade Exchange',
    prop: 'trade_exchange',
    childs: [
      {
        name: 'Trade Coin',
        prop: 'coin'
      },
      {
        name: 'Trade Market',
        prop: 'market'
      }
    ]
  },
  {
    name: 'Activity Control Manager',
    prop: 'activity',
    childs: [
      {
        name: 'activity manager',
        prop: 'actvity_manager'
      },
      {
        name: 'send candy',
        prop: 'send_candy'
      },
      {
        name: 'turntable lottery',
        prop: 'tuntable'
      },
      {
        name: 'daily mission',
        prop: 'mission',
      },
      {
        name: 'netpurchase',
        prop: 'netpurchase'
      }
    ]
  },
  {
    name: 'Platform Manager',
    prop: 'platform',
    childs: [
      {
        name: 'Banner',
        prop: 'banner',
      },
      {
        name: 'Version Upgrade Manager',
        prop: 'version'
      },
      {
        name: 'Bulletin Manager',
        prop: 'bulletin'
      }
    ]
  },
  {
    name: 'Deposit and Withdraw',
    prop: 'deposit_withdraw',
    childs: [
      {
        name: 'Deposit Manager',
        prop: 'deposit_manager',
      },
      {
        name: 'Withdraw manager',
        prop: 'withdraw_manager'
      },
      {
        name: 'Deposit Report',
        prop: 'deposit_report'
      },
      {
        name: 'Withdraw Report',
        prop: 'withdraw_report',
      },
      {
        name: 'Withdraw Spammer',
        prop: 'withdraw_spammer',
      },
      {
        name: 'Wallet Service',
        prop: 'wallet_service'
      }
    ]
  },
  {
    name: 'User Manager',
    prop: 'user_manage',
    childs: [
      {
        name: 'Register User',
        prop: 'register_users',
      },
      {
        name: 'Verified',
        prop: 'verified'
      },
      {
        name: 'User Role',
        prop: 'user_roles'
      },
      {
        name: 'USDT Exchanger',
        prop: 'usdt_exchanger'
      },
      {
        name: 'Bulk Send Site Messages',
        prop: 'site_messages'
      }
    ]
  },
  {
    name: 'System Manager',
    prop: 'system_manager',
    childs: [
      {
        name: 'Notify Bot',
        prop: 'bot',
      },
      {
        name: 'System Setting',
        prop: 'system_setting'
      },
      {
        name: 'System Admin',
        prop: 'system_admin'
      },
      {
        name: 'System Role',
        prop: 'system_role',
      },
      {
        name: 'System Permission',
        prop: 'system_permission'
      }
    ]
  }
];