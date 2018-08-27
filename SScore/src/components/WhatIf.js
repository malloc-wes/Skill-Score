import React, { Component } from 'react';
import axios from 'axios';

import ClassWhatIf from "./ClassWhatIf";

class WhatIf extends Component {

    state = {

        jobs: []

    }
    getJob = (e) => {
        e.preventDefault();

        const job = e.target.elements.jobtitle.value;
        axios.get(`https://indreed.herokuapp.com/api/jobs?q=${job}&limit=10`).then((res) => {
            //console.log(res);

            //I can display a sigle index with (jobs[0]):
            let jobs = res.data;
            //console.log(jobs[0].title);
            this.setState({ jobs: jobs });
            console.log(this.state.jobs);
        })
    }
    render() {
        return (
            <div className="datapull">


                <ClassWhatIf getJob={this.getJob} />
                <h1> <img src="logo_a.png" className="App-logo" alt="logo" /></h1>
                {this.state.jobs.map((job) => {
                    return <li style={{ fontWeight: "bold" }} key={job.id}>{job.title}
                        <p style={{ fontFamily: "Serif", fontWeight: "normal", fontStyle: "italic" }}>{job.location}</p>
                        <p style={{ fontFamily: "Serif", fontWeight: "normal" }}>{job.summary}</p>
                        <p style={{ fontFamily: "Serif", fontWeight: "normal" }}>{job.url}</p>
                    </li>
                })}
            </div>
        );
    }

}

export default WhatIf;