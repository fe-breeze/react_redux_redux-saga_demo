import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>首页 <a className='author' href='https://github.com/fe-breeze' target='_blank'>breeze</a></h1>
    <IndexLink to='/' activeClassName='route--active'>
      主页
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
  </div>
)

export default Header
