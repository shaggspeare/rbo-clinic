import * as React from "react"
import type { HeadFC } from "gatsby"

const pageStyles = {
    fontFamily: "Raleway, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1>Рух без обмежень</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci alias animi atque dicta explicabo fuga fugiat iste labore numquam.</p>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Рух без обмежень</title>
