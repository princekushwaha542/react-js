import React from 'react'
import Card from './assets/components/card'
const App = () => {
  return (
    <div>
       <Card src="https://www.bing.com/th/id/OIP.CrfHaFNOQMDTJL_aBDVFwQHaHh?w=160&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
      companyName="Google" jobTitle="Frontend Developer" jobType="Part Time" level="Mid Level" salary="$80" location="Bangalore, India"
      />
      <Card src="https://media.wired.com/photos/5a99ba72927dc94e67685b9b/191:100/w_1280,c_limit/amazon-a-logo.jpg"
      companyName="Amazon" jobTitle="Senior UI/UX Designer" jobType="Full Time" level="Senior Level" salary="$120" location="Mumbai, India"
      />
      
    </div>
  )
}

export default App


