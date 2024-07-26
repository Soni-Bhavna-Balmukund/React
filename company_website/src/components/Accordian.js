import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

// const accordian = () => {
//   return (

function Accordian() {
  return (
    <Accordion defaultActiveKey="0">

      <Accordion.Item eventKey="0" className='accordian  pb-5' >
        <Accordion.Header className='text-white  border-0 border-bottom border-light-subtle ' ><p className='fs-2 fw-semibold border-0 text-white ps-0'>Define Goals and Requirements</p></Accordion.Header>
        <Accordion.Body  className='accordian fs-3 text-gray'>
        At Grswt, we Understand the purpose of the website, its target audience, and the specific goals it needs to achieve. Determine the features, functionality, and content that the website will require for ecommerce website design services.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className='accordian pb-5'>
        <Accordion.Header className='text-white  border-0 border-bottom border-light-subtle '><p className='fs-2 fw-semibold border-0 text-white'>Research and Planning</p></Accordion.Header>
        <Accordion.Body className='accordian fs-3 text-gray'>
        Conduct market research to gather insights about the target audience, competitors, and industry trends. Create a sitemap to outline the structure and hierarchy of the website’s pages. Consider the user journey and how visitors will navigate through the site.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className='accordian pb-5'>
        <Accordion.Header className='text-white  border-0 border-bottom border-light-subtle '><p className='fs-2 fw-semibold border-0 text-white'>User Experience (UX) Design</p></Accordion.Header>
        <Accordion.Body className='accordian fs-3 text-gray'>
        Focus on designing a user-friendly experience by creating wireframes or prototypes. This involves creating the layout, structure, and functionality of each page, ensuring intuitive navigation and easy access to information.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3" className='accordian pb-5'>
        <Accordion.Header className='text-white  border-0 border-bottom border-light-subtle '><p className='fs-2 fw-semibold border-0 text-white'>Testing and Optimization</p></Accordion.Header>
        <Accordion.Body className='accordian fs-3 text-gray'>
        Conduct thorough testing to identify and fix any issues, such as broken links, browser compatibility problems, or usability concerns. Optimize the website’s performance, including page load times and mobile responsiveness.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4" className='accordian pb-5'>
        <Accordion.Header className='text-white  border-0 border-bottom border-light-subtle '><p className='fs-2 fw-semibold border-0 text-white'>Launch and Deployment</p></Accordion.Header>
        <Accordion.Body className='accordian fs-3 text-gray'>
        Deploy the website on a web hosting platform or server. Ensure proper domain and hosting setup, configure security measures (such as SSL certificates), and monitor the website’s performance.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5" className='accordian pb-5'>
        <Accordion.Header className='text-white  border-0 border-bottom border-light-subtle '><p className='fs-2 fw-semibold border-0 text-white'>Maintenance and Updates</p></Accordion.Header>
        <Accordion.Body className='accordian fs-3 text-gray'>
        Regularly update and maintain the website by adding new content, improving functionality, and addressing any technical issues. Monitor analytics to gain insights into user behavior and make data-driven improvements.
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  );
}

// export default BasicExample;
//   )
// }

export default Accordian