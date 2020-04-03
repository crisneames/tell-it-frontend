import React from 'react'
import EditTell from './EditTell.js'

export default class Posts extends React.Component{
  state = {
          editState: false
  }
  toggleForm = () => {
    this.setState({editState: !this.state.editState})
  }
  render(){
    return(
      <>
      { this.props.messages.map((message) => (
        <>
            <p>{message.title}</p>
            <p>{message.body}</p>
              <button onClick={() =>this.props.handleDelete(message.id)}>X</button>
              <button onClick={this.toggleForm}>Edit</button>
              {this.state.editState ?

                <EditTell message={message} handleEdit={this.props.handleEdit}/>
                :
                <div>h1</div>
              }
            </>






      ))

      }




      </>
    )
  }
}
