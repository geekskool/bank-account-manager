const React = require('react')
const {Link, IndexLink} = require('react-router')
const {getJSON} = require('io-square-browser')

const Nav = React.createClass({
  componentWillMount: function () {
    getJSON('/getuserdetails').then((response) => {
      console.log(response)
      this.setState(
        {
          user: response.name,
          bank: response.bank
        }
      )
    })
  },
  render: function () {
    return (
        <div className='top-bar'>
          <div className='top-bar-left'>
            <ul className='menu'>
              <li className='menu-text'>ExpenseApp</li>
              <li><IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Transactions</IndexLink></li>
              <li><Link to='/upload' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Upload</Link></li>
              <li><Link to='/addtransaction' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Add Transaction</Link></li>
             </ul>
          </div>
            <div className='top-bar-right'>
              <ul className='menu'>
                <li className='menu-text'>Pooja,</li>
                <li>bank</li>
              </ul>
            </div>
        </div>
      )
  }
})

module.exports = Nav
