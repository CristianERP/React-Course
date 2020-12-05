import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Detail extends Component{


    renderDish(dish) {
        if (dish != null) {
            const listComment = dish.comments.map((comment)=>{
                const newFormat = { year: 'numeric', month: 'short', day: '2-digit'}
                return(
                    <div key={comment.id} >
                        <p>{comment.comment}</p>
                        <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', newFormat).format(new Date(comment.date))} </p>

                    </div>
                )
            })
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>    
                            <CardBody>
                                <CardTitle>
                                    {dish.name}
                                </CardTitle>
                                <CardText>
                                    {dish.description}
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h3>Comments</h3>
                        <div>{listComment} </div>
                    </div>
                </div>

            );
        }
        else {
            return(
                <div></div>
            );
        }
    }
    render(){
 

        return <div className="container">{this.renderDish(this.props.dish)} </div>
    }
}

export default Detail;