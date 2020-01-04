import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Semester from "../components/Semester"
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    
    <h3>Select Semester</h3>
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
