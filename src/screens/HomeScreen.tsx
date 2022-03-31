import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import react from '../assets/react.svg';
import node from '../assets/nodejs.svg';
import naman from '../assets/naman.jpg';
import git from '../assets/Git.webp';
import redux from '../assets/redux.svg';
import typescript from '../assets/typescript.svg';
import scala from '../assets/scala.svg';
import spring from '../assets/spring.svg';
import aws from '../assets/aws.svg';
import azure from '../assets/azure.svg';
import spark from '../assets/spark.svg';
import project1 from '../assets/project1.png';

const HomeScreen = () => {
  return (
    <>
      <Row className='mb-5'>
        <Col lg={2} />
        <Col lg={8}>
          <div className='pt-5 intro'>
            <div className='text'>
            <p className='hi_name my-0'>Hi, I am Naman</p>
            <p className='mt-0'>A Software Engineer</p>
            <p className='muted'>Building Websites, Web apps, proficient in full stack development. Writing articles
on dev.to sometimes.</p>
            </div>
            <img className='naman-image' height={'150px'} width={'150px'} src={naman} />
          </div>
        </Col>
        <Col lg={2} />
      </Row>
      <div className='div_block'>
        <h3 className='heading mb-4'>My Projects</h3>
        <div>
          <Row>
            <Col sm={0} md={0} lg={2} />
            <Col sm={12} md={12} lg={8}>
              <div>
                <a target="_blank" rel="noopener noreferrer" href='https://ecommapplication.netlify.app/'>
                  <img height={'100%'} width={'100%'} src={project1} />
                </a>
              </div>
              <div className='mt-3'>
                <p className='text mb-0 project_heading'>Web App Development</p>
              </div>
              <div>
                <p className='text muted'>
                  An Ecommerce application built using MERN Stack that allows
                  users with full functionality of an ecomm app with payment
                  processing using Paypal Sandbox, with separate login for
                  Admin.
                </p>
              </div>
            </Col>
            <Col sm={0} md={0} lg={2} />
          </Row>
        </div>
      </div>
      <div className='div_block'>
        <h3 className='heading'>Skillset</h3>
        <div className='skillset_container'>
          <div className='skill'>
            <svg height={'100px'} width={'100px'}>
              <image height={'100px'} width={'100px'} href={react} />
            </svg>
            <h5 className='skill-name'>ReactJs</h5>
          </div>
          <div className='skill'>
            <svg height={'100px'} width={'100px'}>
              <image height={'100px'} width={'100px'} href={node} />
            </svg>
            <h5 className='skill-name'>NodeJs</h5>
          </div>
          <div className='skill'>
            <svg height={'100px'} width={'100px'}>
              <image height={'100px'} width={'100px'} href={git} />
            </svg>
            <h5 className='skill-name'>GIT</h5>
          </div>
          <div className='skill'>
            <svg height={'100px'} width={'100px'}>
              <image height={'100px'} width={'100px'} href={redux} />
            </svg>
            <h5 className='skill-name'>Redux</h5>
          </div>
          <div className='skill'>
            <svg height={'100px'} width={'100px'}>
              <image height={'100px'} width={'100px'} href={typescript} />
            </svg>
            <h5 className='skill-name' >TypeScript</h5>
          </div>
          <div className='skill'>
            <svg height={'100px'} width={'100px'}>
              <image height={'100px'} width={'100px'} href={scala} />
            </svg>
            <h5 className='skill-name'>Scala</h5>
          </div>
          <div className='skill'>
            <svg height={'100px'} width={'100px'}>
              <image height={'100px'} width={'100px'} href={spring} />
            </svg>
            <h5 className='skill-name'>Spring</h5>
          </div>
          <div className='skill'>
            <svg height={'100px'} width={'100px'}>
              <image height={'100px'} width={'100px'} href={aws} />
            </svg>
            <h5 className='skill-name'>AWS</h5>
          </div>{' '}
          <div className='skill'>
            <svg height={'100px'} width={'100px'}>
              <image height={'100px'} width={'100px'} href={azure} />
            </svg>
            <h5 className='skill-name'>Azure</h5>
          </div>{' '}
          <div className='skill'>
            <svg height={'100px'} width={'100px'}>
              <image height={'100px'} width={'100px'} href={spark} />
            </svg>
            <h5 className='mt-2 skill-name'>Spark</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
