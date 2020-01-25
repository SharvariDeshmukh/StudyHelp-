import React, { Component } from 'react'

import {FaFilePdf} from "react-icons/fa";

const getCaty = items=>{
    let holdItems = items.map(items=>{
        return items.node.semester

    })
    let holdSemesters = new Set(holdItems)
    let semesters = Array.from(holdSemesters)
    semesters.sort();
    semesters = ["All", ...semesters]
    return semesters

}
export default class Semester extends Component {
    URL = "http://docs.google.com/viewer?url=https://studyhelp.netlify.com";
    constructor(props){
        super(props)
        this.state={
            papers : props.papers.edges,
            mypapers : props.papers.edges,
            mysemester : getCaty(props.papers.edges),
            showMessage: false 

        }
    }
    
  _showMessage = (bool) => {
    this.setState({
      showMessage: bool
    });
  }
    catyClicked = semester=>{
        let keepitsafe = [...this.state.papers]

        if(semester == 'All'){
            this.setState(()=>{
                return{mypapers: keepitsafe}
            })
        }
        else{
            let holdme = keepitsafe.filter(({node})=>node.semester===semester)
            this.setState(()=>{
                return{mypapers: holdme}
            })
        }
    }
 
    render() {
        return (
            <section className="py-5">
                <div classname="container">
                  <div className="bg-theme">  
                    <div className="row my-3">
                        <div className="col-10 mx-auto text-center">
                        <div className="row">
                        <div className="col text-center mb-4">
                            <h4 className="display-4 text-white">Select Semester</h4>
                            
                        </div>  
                    </div>
                            {this.state.mysemester.map((semester, index)=>{
                                return (<button
                                            type="button"
                                            className="btn btn-info m-3 px-3"
                                            key = {index}
                                            onClick={()=>{
                                                this.catyClicked(semester)
                                            }}
                                        >
                                            {semester} Semester
                                        </button>)
                            })}
                        </div>
                    </div>
                </div>    
                    <div className="row">
                    {this._showMessage.bind(null, false)}
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
                                        <h6 className="mb-0 text-success ml-5">{node.year}</h6>
                                    </div>
                                    <p className="text-muted">
                                        <small>Sem {node.semester}</small>
                                    </p>
                                    <a href={node.file.localFile.publicURL} download >
                                     <button className="btn btn-success" disabled>
                                        download
                                      </button>
                                    </a>
                                    <div className="invisible">
                                   {URL="http://docs.google.com/viewer?url=https://studyhelp.netlify.com" + node.file.localFile.publicURL}
                                   </div>
                                   <a href={URL}>
                                    <button type= "submit" className="mr-2 btn btn-warning">
                                        view  
                                    </button>   
                                    </a>                                                                              
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
