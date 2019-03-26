import React, { Component } from 'react';
import Axios from 'axios'
import './courses.css';
import Course from '../course/course'

const endpoint = {
    featured: 'https://api.cebroker.com/v2/featuredCoursesProfession?profession=36',
    nonFeatured: 'https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=1&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27',
}

export default class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = { courses: { items: [] }, featuredCourses: [] };
    }

    handleGetCourse = async text => await Axios.get(`${endpoint.nonFeatured}${text && `&courseName=${text}`}`)

    async componentDidMount() {
        try {
            const { data: featuredCourses } = await Axios.get(endpoint.featured)
            const { data: courses } = await this.handleGetCourse()
            this.setState({ featuredCourses, courses })
        } catch (err) {
            alert('ups we cant get the courses')
        }

    }

    async componentDidUpdate({ textToSearch: prevTextToSearch }) {
        const { textToSearch } = this.props
        if (textToSearch !== prevTextToSearch) {
            try {
                const { data: courses } = await this.handleGetCourse(textToSearch)
                this.setState({ courses })
            } catch (err) {
                console.log('Upss')
            }
        }
    }

    render() {

        const { courses, featuredCourses } = this.state

        return (<div>
            <div className="content">
                <div className="filter">
                    <button onClick={this.showFilters} className="filters_main_button">filter courses result</button>
                    <div className="options">
                        <button onClick={this.showCourses} className="dropdown_button">courses type</button>
                        <div className="radio" >
                            <input type="radio" name="courses" id="paced" />
                            <label htmlFor="paced">Self paced</label>
                        </div>
                        <div className="radio" >
                            <input type="radio" name="courses" id="live" />
                            <label htmlFor="live">Live</label>
                        </div>
                    </div>
                    <div className="options" >
                        <button onClick={this.showCourses} className="dropdown_button">delivery type</button>
                        <div className="radio" >
                            <input type="radio" name="delivery" id="Any" />
                            <label htmlFor="Any">Any delivery type</label>
                        </div>
                        <div className="radio" >
                            <input type="radio" name="delivery" id="computer" />
                            <label htmlFor="computer">Computer-Based Traning</label>
                        </div>
                        <div className="radio" >
                            <input type="radio" name="delivery" id="correspondence" />
                            <label htmlFor="correspondence">Correspondence</label>
                        </div>
                        <div className="radio" >
                            <input type="radio" name="delivery" id="mailed" />
                            <label htmlFor="mailed">Mailed Material</label>
                        </div>
                    </div>
                    <div className="options">
                        <button onClick={this.showCourses} className="dropdown_button">Subject area</button>
                        <div className="radio">
                            <input type="radio" name="area" id="subject_area" />
                            <label htmlFor="subject_area">Any subject area</label>
                        </div>
                        <div className="radio">
                            <input type="radio" name="area" id="hw" />
                            <label htmlFor="hw">HWAIDS</label>
                        </div>
                        <div className="radio">
                            <input type="radio" name="area" id="Paliative" />
                            <label htmlFor="Paliative">End-of-live Care and Paliative Health Care</label>
                        </div>
                        <div className="radio">
                            <input type="radio" name="area" id="violence" />
                            <label htmlFor="violence">Domestic Violence</label>
                        </div>
                    </div>
                </div>
                <div className="list">
                    <div className="info">
                        <div className="pagination">Page 1 of {courses.totalItems} results</div>
                        <div className="sorted">
                            Sorted by:
                            <select>
                                <option value={0} >Relevance</option>
                            </select>
                        </div>
                    </div>
                    <div className="details">
                        {
                            featuredCourses.map(({ coursePublication }, index) =>
                                <Course key={`f-${index}`} course={coursePublication} showImage={true} />
                            )
                        }
                        {
                            courses.items.map((course, index) => <Course key={`r-${index}`} course={course} />)
                        }
                    </div>
                </div>
            </div >
        </div >)
    }
}