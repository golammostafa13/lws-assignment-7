import React from 'react'
import { useSelector } from 'react-redux'
import Page from './Page'

export default function Paginations({transactions}) {
  
    const pages = Math.ceil(transactions.length/10);
    const arrayPages = [];
    for(let i = 1; i <= pages; i++){
        arrayPages.push(i);
    }
  
  return (
      <section className='paginations'>
        <div className='right'>
            {
                arrayPages.map(p => <Page key={p} page={p} />)
            }
        </div>
      </section>
  )
}
