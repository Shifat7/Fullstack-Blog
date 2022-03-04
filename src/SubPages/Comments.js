import React from "react";
import '../App.css';
import withRouter from '../withRouter';
import { Card } from 'react-bootstrap';
import axios from "axios";

class Comments extends React.Component {


    constructor() {
        super();
        this.state = {
            post: null,
            Comment: []
        }
    }


    receivedData() {
        const id = this.props.params.id;
        const ID = Number(id)


        axios.get(`http://localhost:3001/getComments`).then((Response) => {

            const data = Response.data;

            console.log(data)

            const filtered = data.filter(obj => obj.postId === ID)

            console.log(filtered)

            this.setState({
                Comment: filtered
            })
        });
    }


    receivedData2() {
        const id = this.props.params.id;

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((Response) => {
            console.log(Response)
            const data = Response.data;

            const Post = <div key={data.id} className="postcom">
                <h3>{data.title}</h3>
                <p>{data.body}</p>
            </div>;

            this.setState({
                post: Post
            })
        })

    }


    componentDidMount() {
        this.receivedData2();
        this.receivedData();

    }

    render() {

        return (
            <div className="AppWhole">
                <div className="App">
                    <div className="comments">
                        {this.state.post}

                        {this.state.Comment.map(Com => (
                            <div key={Com.id} >
                                <Card style={{ margin: 20 }} border="dark" bg="light" text="grey">
                                    <Card.Body>
                                        <Card.Title>{Com.name}</Card.Title>
                                        <Card.Text>
                                            <img src={`https://randomuser.me/api/portraits/men/${Com.id}.jpg`} style={{ marginRight: 10, marginBottom: 20, border: "solid" }} className="img" alt="profilepic" height="50" width="50" />
                                            {Com.body}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        );
    }
}

export default withRouter(Comments);