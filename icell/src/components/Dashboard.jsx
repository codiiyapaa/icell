import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Dashboard.css';
 
const Dashboard = () => {
    return (
       <>
      <div class="main">
      <Row>
         <Col>
         <div class="new_content">
            <Button className="new_content_button">New</Button>
         </div>
         </Col>
         <Col>
         <div class="new_content">
            <input type="text" class="searchbox" placeholder="Search"></input>
         </div>
         </Col>
         <Col>
         <div class="new_content">
            <div class="categories">
               <a href="/Blogadd">Blog</a>
               <a href="/Eventadd">Event</a>
            </div>
         </div>
         </Col>
      </Row>
                  
         <div class="sort_by_type">
             <input type="checkbox" name="blog" value="Blog"></input>
             <label for="blog">Blog</label>
             <input type="checkbox" name="event" value="Event"></input>
             <label for="event">Event</label>
         </div>

         <div class="table_header">
            <div class="table_title">Title</div>
            <div class="table_date">Date</div>
            <div class="table_type">Type</div>
         </div>
         <div class="table_cell">
            <div class="cell_title">Lorem ipsum der farmit nella cursus fur vanatem</div>
            <div class="cell_date">02-05-2021</div>
            <div class="cell_type">Blog</div>
            <input type="button" class="cell_delete" value="delete"></input>
         </div>
         <div class="table_cell">
            <div class="cell_title">Lorem ipsum der farmit nella cursus fur vanatem</div>
            <div class="cell_date">02-05-2021</div>
            <div class="cell_type">Blog</div>
            <input type="button" class="cell_delete" value="delete"></input>
         </div>
         <div class="table_cell">
            <div class="cell_title">Lorem ipsum der farmit nella cursus fur vanatem</div>
            <div class="cell_date">02-05-2021</div>
            <div class="cell_type">Blog</div>
            <input type="button" class="cell_delete" value="delete"></input>
         </div>
      </div>
       </>
    );
}
 
export default Dashboard;