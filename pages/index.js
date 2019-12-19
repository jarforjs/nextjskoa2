import Link from 'next/link'
import Router from 'next/router'
export default () => {

  function gotoTestB() {
    // Router.push('/test/b?id=2')
    Router.push({
      pathname:'/test/b',
      query:{
        id:2
      }
    })
  }


  const events = [
    'routeChangeStart',
    'routeChangeComplete',
    'routeChangeError',
    'beforeHistoryChange',
    'hasheChangeStart',
    'hashChangeComplete',
  ]

  function makeEvent(type){
    return (...args)=>{
      console.log(type,...args)
    }
  }

  events.forEach(event=>{
    Router.events.on(event,makeEvent(event))
  })
  return (
    <>
      <span>Index</span>
      <a>index a1</a>
    </>
  )
}