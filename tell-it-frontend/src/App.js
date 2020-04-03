import React from 'react'
import Header from './components/Header.js'
import Posts from './components/Posts.js'
import Tell from './components/Tell.js'
  export default class App extends React.Component {
    state = {
      users: [],
      messages: [],

    }
    componentDidMount(){
      this.getUsers()
    }
    // PULL FROM THE BACKEND
    getUsers = async () => {
      const response = await fetch('http://localhost:3000/users')
      const data = await response.json()

      const messagesResponse = await fetch('http://localhost:3000/messages')
      const messages = await messagesResponse.json()

      this.setState({users: data, messages: messages})
    }
    // SUBMIT THE FORM
    handleChange = async createTell => {
      console.log(createTell);
      let tellPost = await fetch('http://localhost:3000/messages', {
        body: JSON.stringify(createTell),
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        }
      })
      let post = await tellPost.json()
      let newPosts = [post, ...this.state.messages]
      this.setState({messages: newPosts})

    }
    // DELETE A TELL
    handleDelete = async (id) => {
      let response = await fetch(`http://localhost:3000/messages/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      this.getUsers()
    }
    // Show Edit Form
    handleEdit = async (updateData) => {
      let response = await fetch(`http://localhost:3000/messages/${updateData.id}`, {
        body: JSON.stringify(updateData),
        method: 'PUT',
        headers: {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json'
}
      })
      this.getUsers()
    }

    render(){

      return(
        <>
          {/* ONLY RETURN COMPONENTS THAT HAVE OUR FUNCTIONALITY */}
          <Header />
          {/* DISPLAY POSTS HERE */}
          <Posts toggleForm={this.toggleForm} users={this.state.users} messages={this.state.messages} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
          {/* CREATE A NEW TELL */}
          <Tell handleChange={this.handleChange}/>
        </>
      )
    }
  }
