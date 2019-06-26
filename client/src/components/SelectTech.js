import React, { Component } from "react";
import API from "../utils/techsAPI";
import partsAPI from "../utils/partsAPI";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

class SelectTech extends Component {

    state = {
        team: [],
        selectedRequest = ""
    }

    componentDidMount() {
        this.loadTechs();
    }

    loadTechs = () => {
        API.getTechs()
            .then(res => {
                console.log(res);
                console.log(res.data)
                this.setState({ team: res.data })
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="pt-4">
                <h4>Select Parts Specialist</h4>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th style={{width:"20px"}}></th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.team.map(tech => (
                            <tr
                                key={tech._id}>
                                <td className="align-middle">
                                    <Button 
                                        className="btn btn-primary myButton" 
                                        size="sm" 
                                        data-id={tech._id}
                                    >
                                        Select
                                    </Button>
                                </td>
                                <td className="align-middle">{tech.name}</td>
                                <td className="align-middle">{tech.specialty}</td>
                                <td className="align-middle">{tech.contact}</td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>
        );
    }
}

export default SelectTech;