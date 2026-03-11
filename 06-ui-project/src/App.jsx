 import React from 'react'
 import Section1 from './components/section1/section1'
 import Section2 from './components/section2/section2'
 const App = () => {
  const user =[
    { img :"https://plus.unsplash.com/premium_photo-1682787494953-33e83bc527d1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Satisfied"
    },
    { img:"https://images.unsplash.com/photo-1621274790572-7c32596bc67f?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Satisfied"
    },
    { img:"https://images.unsplash.com/photo-1610012524257-d8910048e208?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Underserved"
    },
    { img:"https://plus.unsplash.com/premium_photo-1664461666103-5d6137323b0f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Underbanked"
    },
    { img:"https://images.unsplash.com/photo-1601392561050-340745ba9c25?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Underbanked"
    }
  ]
   return (
     <div >
      <Section1 user={user}/>
      <Section2/>
     </div>
   )
 }
 
 export default App
 