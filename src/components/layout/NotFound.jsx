import React from 'react'
import {MdError} from "react-icons/md"
import  {Link} from "react-router-dom"

const NotFound = () => {
  return (
    <section className="notFound">
        <main>
            <div>
                <MdError />
                <h1>404</h1>
            </div>

            <p>Page not found,click here to go to Home page</p>
            <Link to="/">Go to Home</Link>
        </main>
    </section>
  )
}

export default NotFound