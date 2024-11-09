import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import axios from 'axios';
import logo from '../public/logo.png'

const Header = () => {
  const dispatch = useDispatch()
  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout());
    // Remove the JWT token from request headers
    delete axios.defaults.headers.common['Authorization'];
    history.push('/login');
  };

  // Set the JWT token in request headers for authenticated requests
  if (userInfo) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${userInfo.token}`;
  }

  return (
  
   
    // <header>
    //   <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
    //     <Container>
    //       <LinkContainer to='/'>
    //         <Navbar.Brand>Motor Magic Parts </Navbar.Brand>
    //       </LinkContainer>
    //       <Navbar.Toggle aria-controls='basic-navbar-nav' />
    //       <Navbar.Collapse id='basic-navbar-nav'>
    //         <Route render={({ history }) => <SearchBox history={history} />} />
    //         <Nav className='ml-auto'>
    //           {userInfo && !userInfo.isAdmin ? (
    //             <LinkContainer to='/cart'>
    //               <Nav.Link>
    //                 <i className='fas fa-shopping-cart'></i> Cart
    //               </Nav.Link>
    //             </LinkContainer>
    //           ) : null}

    //           {userInfo ? (
    //             <NavDropdown title={userInfo.name} id='username'>
    //               <LinkContainer to='/profile'>
    //                 <NavDropdown.Item>Profile</NavDropdown.Item>
    //               </LinkContainer>
    //               <NavDropdown.Item onClick={logoutHandler}>
    //                 Logout
    //               </NavDropdown.Item>
    //             </NavDropdown>
    //           ) : (
    //             <LinkContainer to='/login'>
    //               <Nav.Link>
    //                 <i className='fas fa-user'></i> Sign In
    //               </Nav.Link>
    //             </LinkContainer>
    //           )}
    //           {userInfo && userInfo.isAdmin && (
    //             <NavDropdown title='Admin' id='adminmenu'>
    //               <LinkContainer to='/admin/userlist'>
    //                 <NavDropdown.Item>Users</NavDropdown.Item>
    //               </LinkContainer>
    //               <LinkContainer to='/admin/productlist'>
    //                 <NavDropdown.Item>Products</NavDropdown.Item>
    //               </LinkContainer>
    //               <LinkContainer to='/admin/orderlist'>
    //                 <NavDropdown.Item>Orders</NavDropdown.Item>
    //               </LinkContainer>
    //             </NavDropdown>
    //           )}
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </header>
    <>
    <header className='fixed w-full z-50'>
      <nav class=" border-gray-200 px-4 lg:px-6 p-2 bg-white shadow-sm">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img width={100} src={logo} alt='logo'/>
            </Navbar.Brand>
          </LinkContainer>
          <div class="flex items-center lg:order-2">
            {userInfo && !userInfo.isAdmin ? (
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
            ) : null}

            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Sign In
                </Nav.Link>
              </LinkContainer>
            )}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title='Admin' id='adminmenu'>
                <LinkContainer to='/admin/userlist'>
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/productlist'>
                  <NavDropdown.Item>Products</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/orderlist'>
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
            {/* <a href="#" class=" us:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800">Log in</a>
            <a href="#" class=" bg-black text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-primary-800">Get started</a> */}
          </div>
          <div class="justify-between items-center flex w-auto order-1">
            <ul class="flex font-medium flex-row  justify-center items-center space-x-8 w-full  lg:mt-0">
            <Route render={({ history }) => <SearchBox history={history} />} />
              {/* <li>
                <a href="#" class="block py-2 pr-4 pl-3  rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 text-white" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" class="block py-2 pr-4 pl-3  border-b   lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-400  hover:bg-gray-700  lg:hover:bg-transparent border-gray-700">Company</a>
              </li>
              <li>
                <a href="#" class="block py-2 pr-4 pl-3  border-b   lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-400  hover:bg-gray-700  hover:bg-transparent border-gray-700">Marketplace</a>
              </li>
              <li>
                <a href="#" class="block py-2 pr-4 pl-3  border-b   border-0 hover:text-primary-700 p-0 text-gray-400  hover:bg-gray-700  hover:bg-transparent border-gray-700">Features</a>
              </li>
              <li>
                <a href="#" class="block py-2 pr-4 pl-3  border-b   border-0 hover:text-primary-700 p-0 text-gray-400  hover:bg-gray-700  hover:bg-transparent border-gray-700">Team</a>
              </li>
              <li>
                <a href="#" class="block py-2 pr-4 pl-3  border-b   border-0 hover:text-primary-700 p-0 text-gray-400  hover:bg-gray-700  hover:bg-transparent border-gray-700">Contact</a>
              </li> */}

            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div className='h-[3rem]'/>
     </>
  )
}

export default Header
