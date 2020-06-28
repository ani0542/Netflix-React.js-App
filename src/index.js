import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import Sdata from './Sdata'

// console.log(Sdata[0].sname)
ReactDOM.render(<>
<h1 className='heading_style'>list of top 5 netflix series in 2020</h1>
  {
      Sdata.map((value)=>{
        //   console.log(value)
          return(<App 
                        imgsrc={value.imgsrc}  sname={value.sname} link={value.link} title={value.title}
            />)
      })
  }

</>,document.getElementById('root'))