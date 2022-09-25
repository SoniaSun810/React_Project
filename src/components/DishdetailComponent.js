/**
 * new DishdetailComponent,
 * include the component into the menu component's view,
 * so that the details of a specific dish are displayed
 */

 import React from 'react';
 import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends React.Component{

    constructor(props){
        super(props);

        this.state = {
        }
    }
    
    renderDish(){
        const dish = this.props.dish
        return (
            <div>
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
        );

    }

    renderComments(){
        const comments = this.props.dish.comments.map((comment) =>{
            if (comment != null){
            return(
            <div>    
                <ul className="list-group">
                    <li className="list-group-item list-unstyled mt-1">{comment.comment}</li>
                    <li className="list-group-item list-unstyledmt-1">--{comment.author}&nbsp;&nbsp;&nbsp;{new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                </ul>
            </div>
            )} else {
                return(
                    <div></div>
                )
            }
        });

        console.log("renderComments")

        return(
            <div>
                <h4>Comments</h4>
                {comments}
            </div>
        );
    }

    render() {
        console.log("DishDetail Rendered")
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish()}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments()}
                </div>
            </div>
        ); 
    }

}

export default Dishdetail;