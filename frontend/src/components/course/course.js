import React, { Component } from 'react';
import './course.css'

export default class Course extends Component {
    render() {

        const { course: coursePublication, course: { course }, showImage } = this.props
        return (<div>
            <div className="course_box">
                {showImage && (<figure>
                    <img src={"https://storage.cebroker.com/CEBroker/" + course.featuredBanner} alt="" />
                </figure>)}
                <div className="description_box">
                    <div className="tile">{course.name}</div>
                    {showImage && (<div className="featured">Featured</div>)}
                    <div className="description">{course.description}</div>
                    <div className="feature">
                        <div>
                            <img src={require('../../images/relo.PNG')} alt="" width="20px" />
                            {coursePublication.totalHours} Hours</div>
                        <div style={{ marginLeft: '20px' }}>
                            <img src={require('../../images/pc.PNG')} alt="" width="20px" />
                            Computed-Based Traning</div>
                    </div>
                </div>
                <div className="value_box">
                    {showImage && (<div className="value">{course.isFree ? 'Free' : course.price > 0 ? `$ ${course.price}` : `$0`}</div>)}
                    {!showImage && (<div className="value"> {coursePublication.isFree ? 'Free' : coursePublication.price > 0 ? `$ ${coursePublication.price}` : `$0`}</div>)}
                    <div className="button_box">
                        <button className="default share">
                            <img src={require('../../images/arrow.PNG')} alt="" width="32px" />
                        </button>
                    </div>
                </div>
            </div>
        </div >)
    }
}

