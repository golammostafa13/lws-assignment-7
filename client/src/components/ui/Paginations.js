import React from 'react'
import { useSelector } from 'react-redux'
import Page from './Page'

export default function Paginations({transactions}) {
  
    const pages = Math.ceil(transactions.length/10);
    const arrayPages = [];
    for(let i = 1; i <= pages; i++){
        arrayPages.push(i);
    }

    let p="";
    if(pages===1){
        p="Page";
    }else if(pages > 1){
        p="Pages";
    }
  
  return (
      <section className='paginations'>
        {<p style={{paddingRight: '10px'}}>{p}</p>}
        <div className='right'>
            {
                arrayPages.map(p => <Page key={p} page={p} />)
            }
        </div>
      </section>
  )
}
