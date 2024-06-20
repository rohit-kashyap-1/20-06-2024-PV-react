import React from 'react'
import img from './defualt.jpg'

export default function Gallery(props) {

  const styles = {
    img:{maxWidth:'100%',border:'5px solid #4caf50'},
    cite:{fontSize:'12px',marginBottom:0},
    description:{fontSize:'11px'}
  }
  return (
    <div className='col-md-3'>
      <img src={props.src} style={styles.img} />
      <p style={styles.cite}>{props.author}</p>
      <p style={styles.description}>This image is just an imagination of an ai tool</p>
    </div>
  )
}
