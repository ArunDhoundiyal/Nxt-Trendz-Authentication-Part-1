import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', error: ''}

  onLoginSuccess = () => {
    const {history} = this.props
    const {replace} = history
    replace('/')
  }

  onClickSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', option)
    const data = await response.json()

    const {ok} = response
    if (ok) {
      this.onLoginSuccess()
    } else {
      this.setState({error: data.error_msg})
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUserName = () => {
    const {username} = this.state

    return (
      <>
        <label htmlFor="username" className="label">
          USERNAME
        </label>
        <br />
        <input
          placeholder="Username"
          value={username}
          id="username"
          type="text"
          onChange={this.onChangeUserName}
          className="input-username"
        />
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="password" className="label">
          PASSWORD
        </label>
        <br />
        <input
          placeholder="Password"
          value={password}
          id="password"
          type="password"
          onChange={this.onChangePassword}
          className="input-password"
        />
      </>
    )
  }

  render() {
    const {error} = this.state
    return (
      <div className="bg-container">
        <div className="shopping-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt=" website login"
            className="shopping-style"
          />
        </div>
        <form className="form-container" onSubmit={this.onClickSubmitForm}>
          <div className="nxt-trend-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="nxt-trend-logo"
            />
          </div>

          <div className="userName-container">{this.renderUserName()}</div>
          <div className="password-container">{this.renderPassword()}</div>
          <p className="error">{error}</p>
          <button className="button" type="submit">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
