import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Heading from "../components/Heading"

import Semester from "../components/Semester"
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Heading title="Study Help"/>
   
    <Semester papers={data.papers}/>
    
  </Layout>
)


export const query = graphql`
{
  
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
