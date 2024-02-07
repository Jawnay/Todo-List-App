import React from 'react'
import { AuthorContainer } from "./styles"

function Author() {
  return (
    <AuthorContainer>
      Created by{" "}
      <a href="https://www.linkedin.com/in/jonaly/" target="_blank" rel="noopener noreferrer">
        Jonathan Ly
      </a>
    </AuthorContainer>
  )
}

export default Author;