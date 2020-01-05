import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection";
import Heading from "../components/Heading"
import { graphql } from 'gatsby'
import Semester from "../components/Semester"
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
     
      heroclass="hero-background"
    
    ></HeroSection>
    
   
    <Semester papers={data.papers}/>
    
  </Layout>
)


export const query = graphql`
{   
    img: file(relativePath: { eq: "Hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1500, maxHeight: 950) {
        ...GatsbyImageSharpFluid_tracedSVG
        }
      }
  }
    papers: allContentfulPapers{
      edges{
        node{
          id
          title
          file{
            localFile {
              publicURL
            }
          }
          year
          semester
        }
      }
     
    }
  
    
}`
export default IndexPage
