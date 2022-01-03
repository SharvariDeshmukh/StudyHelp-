import React, { Component } from 'react'
import { Link } from "gatsby"
import {FaFilePdf} from "react-icons/fa";
import viewPage from '../pages/view';
export default class Papers extends Component {
    constructor(props){
      super(props)
      this.state = {
        papers : props.papers.edges,
        mypapers: props.papers.edges,
      }
    }
    viewPage({url}){
      return(      
        <div>   
        {url}                 
       <object data={url} type="application/pdf" width="100%" height="100%">
       Your Browser doesnot support viewing pdfs.<br/>
       Please download the file instead.
     </object>
     </div>
      )
     }
    render() {
      return(    
        <section className="py-5">
        <div classname="container">
          <div className="row">
              {this.state.mypapers.map(({node})=>{
                  return(
                      <div
                      key = {node.id}
                      className = "col-11 col-md-6 col-xs-12 d-flex mx-auto mb-2"
                      >
                      <FaFilePdf className="PDF_ICON"/>
                          <div className="flex-grow-1 px-3">
                              <div className="d-flex justify-content-between">
                                  <h6 className="mb-0">{node.title}</h6>
                                  <h6 className="mb-0 text-success ml-5">Sem {node.semester}</h6>
                              </div>
                              <p className="text-muted">
                                  <small>{node.year}</small>
                              </p>
                              <a href={node.file.localFile.publicURL} download>
                                <button className="btn btn-success">
                                  download
                                </button>
                              </a>
                            
                            
                            <button className="mr-2 btn btn-warning" onClick={this.viewPage(node.file.localFile.publicURL)} >
                                view
                            </button>

                            
                          </div>
                      </div>
                  )
              } 
              )}
          
          </div>

      </div>
  </section>
       
    )
  }



}
  
