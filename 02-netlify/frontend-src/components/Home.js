import React, { useEffect } from "react"

function Home() {
  useEffect(() => {
    document.title = "Our Amazing App"
  }, [])

  return (
    <div>
      <h2 className="display-4">Welcome to the homepage!</h2>
      <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quasi natus fugit ab laudantium dolores, dicta blanditiis sit eum perferendis minima sunt repudiandae voluptates tempore. Fuga dicta ipsa beatae vel?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eveniet dignissimos alias repellat officia qui rem nemo, unde magnam voluptatum obcaecati explicabo tempora quidem? Aperiam doloremque assumenda accusantium deleniti soluta?</p>
    </div>
  )
}

export default Home
