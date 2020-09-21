import React from "react"
import Banner from "../components/Home/Banner"
import CardList from "../components/Home/CardList"
import Layout from "../components/Layout"

const cards = [
  {
    title: "Password Generator",
    image: "images/password.jpg",
    description: "Generate strong and secure passwords",
    link: "/password_generator",
  },
  {
    title: "PKCE",
    image: "images/oauth2-search.png",
    description:
      "Generate code verifier and code challenge for OAuth with PKCE.",
    link: "/pkce",
  },
]

const Home = () => {
  return (
    <Layout title="">
      <Banner
        title={process.env.NEXT_PUBLIC_APP_NAME}
        message="Various tools to help you"
      />
      <CardList cards={cards} />
    </Layout>
  )
}

export default Home
