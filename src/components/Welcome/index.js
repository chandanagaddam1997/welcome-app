// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isLoggedIn: true}

  render() {
    const {isLoggedIn} = this.state
    let subscribeButton
    if (isLoggedIn) {
      subscribeButton = (
        <button className="button" type="button">
          Subscribed
        </button>
      )
    } else {
      subscribeButton = (
        <button className="button" type="button">
          Subscribe
        </button>
      )
    }
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thankyou!Happy Learning</p>
        {subscribeButton}
      </div>
    )
  }
}

export default Welcome
