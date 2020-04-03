import React from 'react'

export default class Tell extends React.Component{
  state = {
    title: '',
    body: '',
    user_name: '',
    user_id: null
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleChange(this.state)
}

  render(){

    return(
      <form onSubmit={this.handleSubmit}>

      <input type="text" name="title" placeholder="Title..." onChange={this.handleChange}/>
      <br />
      <textarea name="body" placeholder="Tell me..." onChange={this.handleChange}></textarea>
      <br />
      <input type="text" name="user_name" placeholder="Type your name..." onChange={this.handleChange}/>
      <br />
      <input type="number" name="user_id" onChange={this.handleChange} />
      <input type="submit" />
      </form>
    )
  }
}
