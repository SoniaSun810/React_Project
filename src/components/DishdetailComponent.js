/**
 * new DishdetailComponent,
 * include the component into the menu component's view,
 * so that the details of a specific dish are displayed
 */

 import React from 'react';
 import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
 import { Link, } from 'react-router-dom';

function RenderDish({dish}){

    return(
        <div className='m-1'>
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

function RenderComments({comments}){
    if (comments != null){
        return(
            <div className='m-1'>
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>--{comment.author}, {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        )
                    }
                    )}
                </ul>
            </div>
        )
    }
}

const Dishdetail = (props) => {
    if (props.dish != null){
        return(
            <div className='container'>
              <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3>{props.dish.name}</h3>
                </div>
             </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        )
    }
}

export default Dishdetail;



// or We can use Class Component;
// class Dishdetail extends React.Component{

//     constructor(props){
//         super(props);

//         this.state = {
//         }
//     }
    
//     renderDish(){
//         const dish = this.props.dish
//         return (
//             <div>
//             <Card>
//                 <CardImg top src={dish.image} alt={dish.name} />
//                 <CardBody>
//                     <CardTitle>{dish.name}</CardTitle>
//                     <CardText>{dish.description}</CardText>
//                 </CardBody>
//             </Card>
//             </div>
//         );
//     }

//     renderComments(){
//         const comments = this.props.dish.comments.map((comment) =>{
//             if (comment != null){
//             return(
//             <div>    
//                 <ul className="list-group">
//                     <li className="list-group-item list-unstyled mt-1">{comment.comment}</li>
//                     <li className="list-group-item list-unstyledmt-1">--{comment.author}&nbsp;&nbsp;&nbsp;{new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
//                 </ul>
//             </div>
//             )} else {
//                 return(
//                     <div></div>
//                 )
//             }
//         });


//         return(
//             <div>
//                 <h4>Comments</h4>
//                 {comments}
//             </div>
//         );
//     }

//     render() {

//         console.log("Dishdetail Component Render is invoked")

//         return(
//             <div className="row">
//                 <div className="col-12 col-md-5 m-1">
//                     {this.renderDish()}
//                 </div>
//                 <div className="col-12 col-md-5 m-1">
//                     {this.renderComments()}
//                 </div>
//             </div>
//         ); 
//     }

// }

// export default Dishdetail;