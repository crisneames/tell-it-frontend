import React from 'react'

export default class EditTell extends React.Component {
  state = {
    title: '',
    body: '',
    user_name: '',
    user_id: null
  }
  componentDidMount(){
    this.setState({user_id: this.props.message.user_id, body: this.props.message.body, title: this.props.message.title})
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleEdit(this.state)
}
  render(){
    return(
      <form onSubmit={this.handleSubmit}>

      <input type="text" name="title"  placeholder={this.props.message.title} onChange={this.handleChange}/>
      <br />
      <textarea name="body" value={this.props.message.body}  placeholder="Tell me..." onChange={this.handleChange}></textarea>
      <br />
      <input type="text" name="user_name" placeholder="Type your name..." onChange={this.handleChange}/>
      <br />
      <input type="number" name="user_id" value={this.props.message.user_id} onChange={this.handleChange} />
      <input type="submit" />
      </form>
    )
  }
}
