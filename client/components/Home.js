import React from 'react'
import {connect} from 'react-redux'
import Modal from './Modal'
import Table from './Table'
/**
 * COMPONENT
 */
export const Home = props => {
  const {username} = props

  return (
    <div style={{
      overflow: 'auto'
    }}>
      <main style={{width: '100vw', height: '100vh', backgroundColor: 'light-grey', maxWidth: '100%', overflowX: 'hidden'}}>
            <div style={{
              overflow: 'auto'
            }}>
                <div style={{
                  display: 'flex',
                  marginTop: '15px'
                }}>
                    <h1 class="text-4xl" style={{textIndent: '25px'}}>Top Content</h1>
                    <Modal />
                  </div>
                <Table />
            </div>
        </main>
    </div>
  )
}


 

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)
